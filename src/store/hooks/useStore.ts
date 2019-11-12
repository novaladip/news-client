import { createTypedHooks } from "easy-peasy";
import { StoreModel } from "..";

const typedHooks = createTypedHooks<StoreModel>();

export const { useStoreActions, useStoreDispatch, useStoreState } = typedHooks;
