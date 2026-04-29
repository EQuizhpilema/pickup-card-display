# Warn before removing the last delivery stop

When a user clicks "Remove stop" on the **last remaining** delivery card, the existing confirmation dialog should change its messaging to make it clear that removing it will also cancel the entire pickup. On confirm, the pickup is canceled in the same flow as the "Cancel pickup" action.

## UX

- Normal stop (2+ remaining):
  - Title: *"Remove delivery to {destination}?"*
  - Body: *"This stop will be removed from the pickup and the totals will be recalculated."*
  - Confirm button: **Remove stop**

- Last remaining stop (only 1 left):
  - Title: *"Remove the last delivery stop?"*
  - Body: *"{destination} is the only remaining stop. Removing it will cancel pickup PU12716."*
  - Confirm button: **Remove stop & cancel pickup**
  - On confirm: remove the stop AND set the pickup to canceled, with a single toast: *"Pickup PU12716 canceled"* + Undo (restores both the deliveries list and canceled flag).

This replaces the current behavior where removing the last stop leaves the pickup card visible with an empty-state warning banner. The warning banner becomes unnecessary and is removed.

## Technical changes

- `DeliveryCard.tsx`
  - Add prop `isLastStop?: boolean`.
  - Switch dialog title / description / action label based on `isLastStop`.

- `DeliveryCardsContainer.tsx`
  - Pass `isLastStop={deliveries.length === 1}` to each `DeliveryCard` (true only when one remains).

- `Index.tsx`
  - Update `handleRemoveDelivery(id)`:
    - Snapshot `prevDeliveries` and `prevCanceled`.
    - If it's the last delivery, also `setCanceled(true)` and show the "Pickup canceled" toast (Undo restores both).
    - Otherwise keep current behavior.
  - Remove `emptyDeliveriesWarning` prop usage on `PickupInfoCard` (no longer reachable since removing the last stop now cancels the pickup). Keep the prop in the component for safety, or drop it — recommend dropping it from `PickupInfoCard` to keep the component clean.

## Files touched

- `src/components/DeliveryCard.tsx`
- `src/components/DeliveryCardsContainer.tsx`
- `src/pages/Index.tsx`
- `src/components/PickupInfoCard.tsx` (remove now-unused `emptyDeliveriesWarning` prop + warning banner)
