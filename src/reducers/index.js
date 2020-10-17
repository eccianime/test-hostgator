import { CHANGE_ACTUAL_PLAN, GET_PLANS } from '../actions/types';
import plan from '../store/planState';

const planReducer = (state = plan, action) => {
  switch (action.type) {
    case CHANGE_ACTUAL_PLAN:
      return { ...state,
        actualPlan: action.actualPlan,
        actualCycle: action.actualCycle
     };
    case GET_PLANS:
      return { ...state,
        plans: action.plans,
     };
    default:
      return { ...state };
  }
};

export default planReducer;
