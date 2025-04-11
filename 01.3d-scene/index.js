import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import Gui from '../02.gui/index.js' 

const scene = new THREE.Scene(); // 创建 Scene

{
    const geometry = new THREE.BoxGeometry(100, 100, 100); // BoxGeometry 立方体 长宽高100
    const material = new THREE.MeshLambertMaterial(({ // 漫反射材质 MeshLambertMaterial
        color: new THREE.Color('orange')
    }));
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, 0); // 位置
    scene.add(mesh); // 添加物体 Mesh


    const pointLight = new THREE.PointLight(0xffffff, 10000); // 白色，光照强度10000
    pointLight.position.set(80, 80, 80); // 位置 默认照向 0,0,0 的方向
    scene.add(pointLight); // 添加灯光 Light
    Gui({ mesh, pointLight })
}
{
  const axesHelper = new THREE.AxesHelper(200); // 展示坐标系工具 AxesHelper 坐标轴长度200
  scene.add(axesHelper);
}

{
    const width = window.innerWidth;
    const height = window.innerHeight;

    // 透视相机，四个参数
    // 角度（fov），也就是看的范围有多大
    // 宽高比，也就是这个视椎体的宽和高的比例
    // 最近是哪
    // 最远是哪
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    // 在 200,200,200 的位置看向 0,0,0
    camera.position.set(200, 200, 200); 
    camera.lookAt(0, 0, 0);

    // 用 Renderer 把 Scene 渲染到 canvas 上
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height)

    function render() {
      renderer.render(scene, camera);
      requestAnimationFrame(render)
    }
    render()

    document.body.append(renderer.domElement); // domElement 就是 canvas 元素

    // 内部原理：canvas 监听鼠标事件，然后根据鼠标的移动来修改相机 camera 的位置
    const controls = new OrbitControls(camera, renderer.domElement); // 鼠标拖动360度观察3D场景
}
