import IconBtnComponent from '../components/IconBtnComponent.vue';

export default {
  title: 'Custom/ButtonIcons',
  component: IconBtnComponent,
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
  components: { IconBtnComponent },
  setup() {
    return { args };
  },
  template: '<icon-btn-component v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {};