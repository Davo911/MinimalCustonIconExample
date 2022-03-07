import IconComponent from '../components/IconComponent.vue';

export default {
  title: 'Custom/IconComponent',
  component: IconComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

const Template = (args) => ({
  components: { IconComponent },
  setup() {
    return { args };
  },
  template: '<icon-component v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {};