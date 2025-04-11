import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

export default function Gui(mesh) {
  const gui = new GUI(); // 可视化调试 立方体大小、相机位置、光照强度等

  const meshFolder = gui.addFolder('立方体');
  meshFolder.addColor(mesh.material, 'color');
  meshFolder.add(mesh.position, 'x').step(10);
  meshFolder.add(mesh.position, 'y').step(10);
  meshFolder.add(mesh.position, 'z').step(10);

  const lightFolder = gui.addFolder('灯光');
  lightFolder.add(pointLight.position, 'x').step(10);
  lightFolder.add(pointLight.position, 'y').step(10);
  lightFolder.add(pointLight.position, 'z').step(10);
  lightFolder.add(pointLight, 'intensity').step(1000);

  const otherFolder = gui.addFolder('其他控件类型');
  const obj = {
    aaa: '天王盖地虎',
    bbb: false,
    ccc: 0,
    ddd: '111',
    fff: 'Bbb',
    logic: function () {
      alert('执行一段逻辑!');
    }
  };
  otherFolder.add(obj, 'aaa').onChange(value => {
    console.log('value', value )
  });
  otherFolder.add(obj, 'bbb');
  otherFolder.add(obj, 'ccc').min(-10).max(10).step(0.5);
  otherFolder.add(obj, 'ddd', [ '111', '222', '333' ] );
  otherFolder.add(obj, 'fff', { Aaa: 0, Bbb: 0.1, Ccc: 5 } );
  otherFolder.add(obj, 'logic');
}
