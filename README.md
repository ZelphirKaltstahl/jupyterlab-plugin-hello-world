# jupyterlab-plugin-hello-world
Hello World Plugin for JupyterLab

# Usage
1. Clone this repository: `git clone git@github.com:ZelphirKaltstahl/jupyterlab-plugin-hello-world.git`
2. Change directory: `pushd jupyterlab-plugin-hello-world`
3. Create anaconda environment: `conda create --name=jupyterlab-plugin`
4. Activate anaconda environment: `source activate jupyterlab-plugin`
5. Install JupyterLab in the anaconda environment: `conda install -c conda-forge jupyterlab`
6. Install dependencies: `npm install` (in plugin directory)
7. Build plugin: `npm run build` (in plugin directory)
8. Install Plugin: `jupyter labextension install .` (in plugin directory)
9. Run JupyterLab: `jupyter lab`
