export const Types = {
  SHOW: 'modal/SHOW',
  HIDE: 'modal/Hide',
};

const INITIAL_STATE = {
  visible: false,
  cordinates: null,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW:
      return {
        visible: true,
      };
    case Types.HIDE:
      return {
        visible: false,
      };
    default:
      return state;
  }
}

export const Creators = {
  showModal: () => ({
    type: Types.SHOW,
  }),

  hideModal: () => ({
    type: Types.HIDE,
  }),
};
