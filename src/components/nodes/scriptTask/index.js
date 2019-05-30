import component from './scriptTask.vue';
import i18next from 'i18next';

export const taskHeight = 76;

export default {
  id: 'processmaker-modeler-script-task',
  component,
  bpmnType: 'bpmn:ScriptTask',
  control: true,
  category: 'BPMN',
  icon: require('@/assets/toolpanel/scriptTask.svg'),
  label: 'Script Task',
  definition(moddle) {
    return moddle.create('bpmn:ScriptTask', {
      name: i18next.t('New Script Task'),
    });
  },
  diagram(moddle) {
    return moddle.create('bpmndi:BPMNShape', {
      bounds: moddle.create('dc:Bounds', {
        height: taskHeight,
        width: 116,
      }),
    });
  },
  inspectorConfig: [
    {
      name: 'ScriptTask',
      items: [
        {
          component: 'FormAccordion',
          container: true,
          config: {
            initiallyOpen: true,
            label: 'Configuration',
            icon: 'cog',
            name: 'confifuration',
          },
          items: [
            {
              component: 'FormInput',
              config: {
                label: 'Identifier',
                helper: 'The id field should be unique across all elements in the diagram',
                name: 'id',
              },
            },
            {
              component: 'FormInput',
              config: {
                label: 'Name',
                helper: 'The name of the script task',
                name: 'name',
              },
            },
          ],
        },
      ],
    },
  ],
};
