import * as THREE from 'three';

// 参数：上圆的半径 下圆的半径 高度
// 默认圆的分段数是 32、高度的分段数是 1
// 分段越多顶点和三角形越多，渲染越精细，但性能也会变差
const geometry = new THREE.CylinderGeometry(50, 50, 80);

const material = new THREE.MeshBasicMaterial(({
    color: new THREE.Color('orange'),
    wireframe: true,
}));

const mesh = new THREE.Mesh(geometry, material);

export default mesh;
