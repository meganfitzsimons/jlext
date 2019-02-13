import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the myextension extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'myextension',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension myextension is activated!');
    console.log('WAAHAHAHAHAH HF FAOIFPIEWAUFJ;AS');
  }
};

export default extension;
