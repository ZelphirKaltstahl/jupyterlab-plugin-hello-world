// not sure this import is needed
import {
    JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

// Activate the jupyterhub extension.
function activateExtension(app: JupyterLab): void {
    console.log('Hello World!');
}

/*************
  * FINALIZE *
  *************/
// Initialization data for the jupyterlab_hub extension.
const plugin: JupyterLabPlugin<void> = {
    // specify the init function
    activate: activateExtension,
    // give an id
    id: 'jupyter.extensions.jupyterlab-hello-world',
    // specify parts which are required for this extension to be able to run properly
    // (dependencies!)
    requires: [],
    // specify if the extension should be run automatically when all requirements are met
    autoStart: true,
};

// export the extension, which has the type JupyterLabPlugin
export default plugin;
