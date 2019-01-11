import { flow, steps, store } from "../../../setup/create-test-flow-with-store-middleware.js";
import { storeFlow } from "./redux-store-middleware.flow.js";

describe('Custom protocols', () => {

  beforeAll(() => {
    steps.cleanup();
    flow.pushFlow({ flow: storeFlow });
  });

  test('Store applies response to redux store', async () => {
    expect.assertions(1);
  
    await steps.on({ id: 'id1' });
    const state = store.getState();
    
    expect(state).toEqual({ one: 1, two: 2, three: 3 });

  });
});