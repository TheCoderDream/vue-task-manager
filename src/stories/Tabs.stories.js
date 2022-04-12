import Tabs from '../components/Tabs.vue';
import './Tabs.scss';

export default {
  title: 'Example/Tabs',
  component: Tabs,
  argTypes: {
    tabsNames: { control: { type: 'array' } },
    searchPlaceholder: { control: { type: 'text' } }
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Tabs },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Tabs v-bind="args" />',
});

export const TabsTemp = Template.bind({});
TabsTemp.args = {
  tabsNames: ['Users', 'Departments'],
  searchPlaceholder: 'Search Users'
};
