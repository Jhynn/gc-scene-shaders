import {
  Scene,
  AxesHelper,
  AmbientLight,
  DirectionalLight,
  Mesh,
  SphereGeometry,
  MeshToonMaterial,
  PlaneGeometry,
  Color,
} from "three"

import { updateRenderer } from "../core/renderer"
import { gui } from "../core/gui"

export const scene = new Scene()

// Axes Helper
const axesHelper = new AxesHelper(0.5)
scene.add(axesHelper)

gui.addInput(axesHelper, "visible", {
  label: "AxesHelper",
})

const ambientLight = new AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const directionalLight = new DirectionalLight("#ffffff", 2)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 500
directionalLight.shadow.normalBias = 0.5
directionalLight.position.set(0.25, 2, 2.25)

scene.add(directionalLight)

const PARAMS = {
  color1: "#00FF7F",
  color2: "#00FFFF",
  color3: "#A020F0",
}

const sphere1 = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshToonMaterial({
    color: new Color(PARAMS.color1),
    wireframe: false,
  })
)

sphere1.position.set(0, 2, 0)
sphere1.castShadow = true

const sphere1Ctrls = gui.addFolder({
  title: "Sphere 1",
})

sphere1Ctrls.addInput(sphere1.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})

sphere1Ctrls.addInput(sphere1.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})

sphere1Ctrls.addInput(sphere1.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})

sphere1Ctrls.addInput(PARAMS, "color1").on("change", (e) => {
  sphere1.material.color = new Color(e.value)
})

sphere1Ctrls.addInput(sphere1.material, "wireframe")
scene.add(sphere1)

const sphere2 = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshToonMaterial({
    color: new Color(PARAMS.color2),
    wireframe: false,
  })
)

sphere2.position.set(0, 4, 0)
sphere2.castShadow = true

const sphere2Ctrls = gui.addFolder({
  title: "Sphere 2",
})

sphere2Ctrls.addInput(sphere2.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})

sphere2Ctrls.addInput(sphere2.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})

sphere2Ctrls.addInput(sphere2.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})

sphere2Ctrls.addInput(PARAMS, "color2").on("change", (e) => {
  sphere2.material.color = new Color(e.value)
})

sphere2Ctrls.addInput(sphere2.material, "wireframe")
scene.add(sphere2)

const sphere3 = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshToonMaterial({
    color: new Color(PARAMS.color3),
    wireframe: false,
  })
)

sphere3.position.set(0, 6, 0)
sphere3.castShadow = true

const sphere3Ctrls = gui.addFolder({
  title: "Sphere 1",
})

sphere3Ctrls.addInput(sphere3.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})

sphere3Ctrls.addInput(sphere3.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})

sphere3Ctrls.addInput(sphere3.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})

sphere3Ctrls.addInput(PARAMS, "color3").on("change", (e) => {
  sphere3.material.color = new Color(e.value)
})

sphere3Ctrls.addInput(sphere3.material, "wireframe")
scene.add(sphere3)

const plane = new Mesh(
  new PlaneGeometry(10, 10, 10, 10),
  new MeshToonMaterial({
    color: new Color("#444"),
  })
)

plane.receiveShadow = true
plane.rotation.set(-Math.PI / 2, 0, 0)
scene.add(plane)

export function updateScene() {
  updateRenderer()
}
