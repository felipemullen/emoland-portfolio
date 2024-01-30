// Mostly based on:
// - https://www.maya-ndljk.com/blog/threejs-basic-toon-shader
// - https://github.com/Robpayot/zelda-project-public/blob/main/src/js/components/Link/index.js
// - https://github.com/mrdoob/three.js/blob/dev/src/renderers/shaders/ShaderLib/meshtoon.glsl.js

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// varying vec3 vNormal;|
varying vec3 vViewDir;
varying vec2 vUv;

void main() {
    vUv = uv;

    #include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = -mvPosition.xyz;
    vViewDir = vViewPosition;

    // vec4 localPosition = vec4( position, 1.0);
    // vec4 worldPosition = modelMatrix * localPosition;
    // vec4 viewPosition = viewMatrix * worldPosition;
    // vec4 projectionPosition = projectionMatrix * viewPosition;

    // vNormal = normalize(normalMatrix * normal);
    // vViewDir = normalize(-viewPosition.xyz);

    // gl_Position = projectionPosition;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}
