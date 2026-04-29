
## Goal

Extend the existing prototype so a user can:
1. Cancel the entire pickup (top-level destructive action on the Pickup card).
2. Remove an individual delivery stop (per-card destructive action on each Delivery card).

The visual structure of today's screen (matching your reference screenshot) stays intact — we only add transactional controls in the card headers, plus confirmation dialogs to prevent accidental clicks.

## UX design

### Pickup card (`PickupInfoCard`)
- Add a **"Cancel pickup"** pill button in the top-right of the card header (same position as the "Delete pickup" pill in your reference screenshot).
- Style: light red/pink pill, red text, ghost-style — visually distinct from the blue "Add to address book" pill so it reads as destructive.
- Clicking opens an AlertDialog: *"Cancel this pickup? This will remove the pickup and all associated deliveries."* with **Keep pickup** / **Cancel pickup** buttons.
- On confirm: the entire pickup view collapses to a simple "Pickup PU12716 was canceled" empty state (with an "Undo" link for the prototype) and the delivery cards are hidden.

### Delivery cards (`DeliveryCard`)
- Add a small **"Remove stop"** text button (with a trash icon) in the top-right of each delivery card header.
- Clicking opens an AlertDialog: *"Remove delivery to {destination}? The pickup totals will be recalculated."* with **Keep stop** / **Remove stop** buttons.
- On confirm: the card is removed from the list and the Pickup card's **Total units** and **Total weight** recalculate from the remaining stops.
- If the user removes the **last** remaining delivery, show an inline warning banner on the Pickup card: *"This pickup has no deliveries. Add a stop or cancel the pickup."*

### Shared safeguards
- All destructive actions go through AlertDialog (already in the project at `src/components/ui/alert-dialog.tsx`) — never one-click destructive.
- A toast (`sonner`, already wired in `App.tsx`) confirms each action with an **Undo** action that restores state for ~5 seconds.

## Layout sketch

```text
+--------------------------------------------------------+
|  Pickup Details PU12716              [ Cancel pickup ] |
+--------------------------------------------------------+
|  schedule / location / contact   |  shipment details   |
+--------------------------------------------------------+

           [ Subscribe to alerts ]

+--------------------------------------------------------+
|  Delivery Details: Christie's NY      [ Remove stop ]  |
+--------------------------------------------------------+
| ...                                                    |
+--------------------------------------------------------+
```

## Technical details

State lifting:
- Move the hard-coded delivery array out of `DeliveryCardsContainer` into `Index.tsx` as a `useState<Delivery[]>`.
- Move the pickup object into `Index.tsx` state too, with a `canceled: boolean` flag.
- `Index.tsx` derives `totalHandlingUnits` / `totalWeight` from the current deliveries array (no more hard-coded `2 + 1 + 3`).

Component changes:
- `PickupInfoCard.tsx`
  - New prop `onCancel: () => void`.
  - Add header-right "Cancel pickup" `Button` (ghost, red text, pill shape) + `AlertDialog` wrapper.
- `DeliveryCard.tsx`
  - New props `onRemove: () => void` and `id: string` (for dialog copy).
  - Add header-right `Button` (ghost, sm, with `Trash2` icon) + `AlertDialog`.
- `DeliveryCardsContainer.tsx`
  - Becomes a controlled list: accepts `deliveries` and `onRemove(id)` from `Index`.
- `Index.tsx`
  - Owns `pickup` and `deliveries` state.
  - Handlers: `handleCancelPickup`, `handleRemoveDelivery(id)`.
  - Renders a "Pickup canceled" empty state when `pickup.canceled === true`.
  - Uses `toast(...)` from `sonner` with an `action: { label: "Undo", onClick: restore }`.

Dependencies: none new — `alert-dialog`, `button`, `sonner`, and `lucide-react` (for `Trash2`) are already installed.

Out of scope:
- No backend wiring — this is prototype-only state. No API calls; the "cancel" and "remove" actions only mutate local React state.
- No routing changes.

## Files touched

- `src/pages/Index.tsx` — lift state, pass handlers, render canceled empty state.
- `src/components/PickupInfoCard.tsx` — add Cancel pickup button + confirm dialog.
- `src/components/DeliveryCard.tsx` — add Remove stop button + confirm dialog.
- `src/components/DeliveryCardsContainer.tsx` — accept `deliveries` + `onRemove` props instead of hard-coding.
