uniform vec3 diffuse;

#include <common>
#include <lights_pars_begin>

uniform sampler2D map;
uniform vec3 uColor;

varying vec3 vNormal;
varying vec3 vViewDir;
varying vec2 vUv;

uniform float uGlossiness;

void main() {
    // texture
    vec4 tex = texture2D(map, vUv);
    gl_FragColor = texture2D(map, vUv);

    // directional light ...
    float NdotL = dot(vNormal, directionalLights[0].direction);
    float lightIntensity = smoothstep(0.0, 0.01, NdotL);
    vec3 directionalLight = directionalLights[0].color * lightIntensity;

    // specular reflection
    vec3 halfVector = normalize(directionalLights[0].direction + vViewDir);
    float NdotH = dot(vNormal, halfVector);

    float specularIntensity = pow(NdotH * lightIntensity, 1000.0 / uGlossiness);
    float specularIntensitySmooth = smoothstep(0.05, 0.1, specularIntensity);

    vec3 specular = specularIntensitySmooth * directionalLights[0].color;

    // rim lighting
    float rimDot = 1.0 - dot(vViewDir, vNormal);
    float rimAmount = 100.0;

    float rimThreshold = 0.2;
    float rimIntensity = rimDot * pow(NdotL, rimThreshold);
    rimIntensity = smoothstep(rimAmount - 0.01, rimAmount + 0.01, rimIntensity);

    vec3 rim = rimIntensity * directionalLights[0].color;

    vec4 toonShading = vec4(uColor * (directionalLight + ambientLightColor + specular + rim), 1.0);
    gl_FragColor = mix(gl_FragColor, toonShading, 0.1);
    gl_FragColor.a = tex.a;
}