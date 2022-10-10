import '../scss/scene-styles.scss';

import ExperimentalScene from './Modules/ExperimentalScene';

const experimentalScene = new ExperimentalScene([ 'HemisphereLight', 'PointLight' ]);
experimentalScene.init();

// AmbientLight | HemisphereLight | DirectionalLight | PointLight | SpotLight