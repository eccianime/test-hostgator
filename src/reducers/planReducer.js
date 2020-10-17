import plan from '../store/planState';

const planReducer = (state = plan, action) => {
  switch (action.type) {
    case 'CHANGE_ACTUAL_PLAN':
      return { ...state,
        actualPlan: action.actualPlan,
        actualCycle: action.actualCycle
     };
    default:
      return { ...state };
  }
};

export default planReducer;
