import { PropType, VNode } from "vue";

export default {
  props: {
    render: {
      type: Object as PropType<VNode>,
      required: true,
    },
  },
  setup(props) {
    return () => props.render;
  },
};
