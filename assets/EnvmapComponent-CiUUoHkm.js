import{r as s,R as E}from"./index-qyj2ZBCg.js";import{ai as q,u as Y,ac as j,T as b,X as H,k as Q,x as K,s as D,a6 as U,aj as C,ak as Z,S as N,K as B,al as T,V as I,am as ee,an as ne,R as te}from"./three.module-GtcjrW6H.js";import{g as f,d as k,S as l,u as v,c as g,e as re,U as L,b as _,s as ae,k as h,t as oe}from"./index-BAucurbO.js";import{i as ie}from"./ActionFunctions-CGJ8cJXE.js";import{T as z,am as ce,v as se,u as le,q as W,M as S,t as w,an as me,ao as ue,ap as fe,J as pe,V as ve,ae as de}from"./resourceLoaderHooks-CGFdCkMf.js";import{l as Ee,g as Me}from"./SkyboxComponent-BNyLWZGx.js";import{R as F}from"./ReflectionProbeComponent-oi679bVh.js";import{b as $}from"./EnvMapBakeComponent-KWaU0m_i.js";const be=`
			#define BOX_PROJECTED_ENV_MAP

			#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )

				vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );

				#ifdef BOX_PROJECTED_ENV_MAP

					vWorldPosition = worldPosition.xyz;

				#endif

			#endif
			`,ge=`
#ifdef USE_ENVMAP

#define BOX_PROJECTED_ENV_MAP

	#ifdef BOX_PROJECTED_ENV_MAP

		uniform vec3 cubeMapSize;
		uniform vec3 cubeMapPos;
		varying vec3 vWorldPosition;

		vec3 parallaxCorrectNormal( vec3 v, vec3 cubeSize, vec3 cubePos ) {

			vec3 nDir = normalize( v );
			vec3 rbmax = ( .5 * cubeSize + cubePos - vWorldPosition ) / nDir;
			vec3 rbmin = ( -.5 * cubeSize + cubePos - vWorldPosition ) / nDir;

			vec3 rbminmax;
			rbminmax.x = ( nDir.x > 0. ) ? rbmax.x : rbmin.x;
			rbminmax.y = ( nDir.y > 0. ) ? rbmax.y : rbmin.y;
			rbminmax.z = ( nDir.z > 0. ) ? rbmax.z : rbmin.z;

			float correction = min( min( rbminmax.x, rbminmax.y ), rbminmax.z );
			vec3 boxIntersection = vWorldPosition + nDir * correction;

			return boxIntersection - cubePos;
		}

	#endif

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

      #ifdef BOX_PROJECTED_ENV_MAP

      worldNormal = parallaxCorrectNormal( worldNormal, cubeMapSize, cubeMapPos );

      #endif

			worldNormal.x *= -1.;
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

      #ifdef BOX_PROJECTED_ENV_MAP
        reflectVec = parallaxCorrectNormal( reflectVec, cubeMapSize, cubeMapPos );
      #endif

      reflectVec.x *= -1.;
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	#ifdef USE_ANISOTROPY

		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {

			#ifdef ENVMAP_TYPE_CUBE_UV

			  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );

				return getIBLRadiance( viewDir, bentNormal, roughness );

			#else

				return vec3( 0.0 );

			#endif

		}

	#endif

#endif
`,xe=`

	#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
  
  #define BOX_PROJECTED_ENV_MAP

  #ifdef BOX_PROJECTED_ENV_MAP

    uniform vec3 cubeMapSize;
    uniform vec3 cubeMapPos;

		vec3 parallaxCorrectNormal( vec3 v, vec3 cubeSize, vec3 cubePos ) {

			vec3 nDir = normalize( v );
			vec3 rbmax = ( .5 * cubeSize + cubePos - vWorldPosition ) / nDir;
			vec3 rbmin = ( -.5 * cubeSize + cubePos - vWorldPosition ) / nDir;

			vec3 rbminmax;
			rbminmax.x = ( nDir.x > 0. ) ? rbmax.x : rbmin.x;
			rbminmax.y = ( nDir.y > 0. ) ? rbmax.y : rbmin.y;
			rbminmax.z = ( nDir.z > 0. ) ? rbmax.z : rbmin.z;

			float correction = min( min( rbminmax.x, rbminmax.y ), rbminmax.z );
			vec3 boxIntersection = vWorldPosition + nDir * correction;

			return boxIntersection - cubePos;
		}
  #endif

#endif
`,Pe=`

#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif
  
  #ifdef BOX_PROJECTED_ENV_MAP
  	reflectVec = parallaxCorrectNormal( reflectVec, cubeMapSize, cubeMapPos );
  #endif

	#ifdef ENVMAP_TYPE_CUBE

		reflectVec.x *= -1.;
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 envColor = textureCubeUV( envMap, reflectVec, 1.0 );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	outgoingLight += envColor.xyz * specularStrength * reflectivity;


#endif
`,O={Skybox:"Skybox",Bake:"Bake",Default:"Default",Cubemap:"Cubemap",Equirectangular:"Equirectangular",Color:"Color",Probes:"Probes",None:"None"};let ye=0,y=null,M=null;function Se(n,e){M||(M=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),M.style.display="block"),y||(y=new q({canvas:M}));const t=new Y,r=new j(-1,1,1,-1,.1,10);r.position.z=1;const c=`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,o=`
  ${e.map((p,u)=>`uniform sampler2D envMap${u};`).join(`
`)}
  ${e.map((p,u)=>`uniform mat4 envMapTransform${u};`).join(`
`)}
  uniform mat4 targetTransform;
  varying vec2 vUv;

  //uniform vec3 targetPosition;
  float EPSILON = 0.0;

    
  void main() {
    vec3 targetPosition = targetTransform[3].xyz; // Extract position component from targetMatrix
    vec3 color = vec3(0.0);
    float totalWeight = 0.0;
    float currentDistance = 0.0;
    float weight = 0.0;
    ${e.map((p,u)=>`
      vec3 envMapPosition${u} = envMapTransform${u}[3].xyz; // Extract position component from envMapTransforms
      currentDistance = length(targetPosition - envMapPosition${u}) + EPSILON;
      weight = 1.0 / currentDistance;
      totalWeight += weight;
      color += texture2D(envMap${u}, vUv).rgb * weight;
    `).join(`
`)}
    color /= totalWeight; // Normalize the accumulated color by the total weight
    gl_FragColor = vec4(color, 1.0);
  }
`,a={targetTransform:{value:f(n,z).matrixWorld}};let i=0;for(let p=0;p<e.length;p++){const u=f(e[p],F),J=f(e[p],z);u.texture&&(a[`envMap${i}`]=new b(u.texture),a[`envMapTransform${i}`]={value:J.matrixWorld},i++)}const x=new H({vertexShader:c,fragmentShader:o,uniforms:a}),R=new Q(new K(2,2),x);t.add(R),y.setSize(256,256),y.render(t,r);const d=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");d.width=256,d.height=256;const V=d.getContext("2d");V&&V.drawImage(M,0,0);const[P,X]=ce(Z,n,d,C,U,U,D,D);return P.colorSpace=N,P.needsUpdate=!0,P.name=`ReflectionProbeTexture__${ye++}`,[P,()=>{X(),t.clear(),R.geometry.dispose(),d.remove()}]}const Ce=new B,he=()=>{const n=v(),e=g(n,m);return s.useEffect(()=>()=>{h(n)&&e.envmap.set(null)},[]),s.useEffect(()=>{Ee(e.envMapCubemapURL.value,t=>{t&&(t.mapping=ee,t.colorSpace=N,e.envmap.set(t),fe(n,m,"MISSING_FILE"))},void 0,t=>{e.envmap.set(null),w(n,m,"MISSING_FILE","Skybox texture could not be found!")})},[e.envMapCubemapURL]),null},_e=()=>{const n=v(),e=g(n,m),[t,r]=W(e.envMapSourceURL.value,n);return s.useEffect(()=>()=>{h(n)&&e.envmap.set(null)},[]),s.useEffect(()=>{!t||!t.isTexture||(t.mapping=C,e.envmap.set(t))},[t]),s.useEffect(()=>{r&&(e.envmap.set(null),w(n,m,"MISSING_FILE","Skybox texture could not be found!"))},[r]),null},Ne=()=>{const n=v(),e=g(n,m),[t]=pe(()=>null,n);return s.useEffect(()=>()=>{h(n)&&e.envmap.set(null)},[]),s.useEffect(()=>{const r=e.envMapSourceColor.value??Ce,c=64,o=new ne(Me(new B(r)),c,c,te);o.needsUpdate=!0,o.colorSpace=N,o.mapping=C,t.set(o),e.envmap.set(o)},[e.envMapSourceColor]),null},we=()=>{const n=v(),e=oe([F]);return s.useEffect(()=>()=>{const t=_(n,m);h(n)&&t.envmap.set(null)},[]),s.useEffect(()=>{const[t,r]=Se(n,e);return _(n,m).envmap.set(t),()=>{r()}},[e]),null},m=k({name:"EnvmapComponent",jsonID:"EE_envmap",schema:l.Object({type:l.LiteralUnion(Object.values(O),O.Skybox),envMapSourceColor:se.Color(4095),envMapSourceURL:l.String(""),envMapCubemapURL:l.String(""),envMapSourceEntityUUID:l.EntityUUID(),envMapIntensity:l.Number(1),envmap:l.NonSerialized(l.Nullable(l.Type()))}),reactor:function(){if(!ie)return null;const n=v(),e=g(n,m),t=!!re(n,S),r=le(n,[S,ve,de],[m]),c=L.useEntityByUUID(e.envMapSourceEntityUUID.value),o=()=>{const a=[...r];return t&&a.push(n),a.map(i=>f(i,S))};switch(s.useEffect(()=>{const a=o();if(e.envmap.value)for(const i of a)A(i,e.envmap.value);else for(const i of a)A(i,null)},[r,e.envmap,t]),s.useEffect(()=>{const a=o();for(const i of a)Ve(i,e.envMapIntensity.value)},[r,e.envMapIntensity,e.envmap,t]),e.type.value){case"Bake":{if(c)return E.createElement(Re,{key:c,envmapEntity:n,bakeEntity:c,childrenMesh:r});break}case"Cubemap":return E.createElement(he,{key:"EnvmapCubemapReactor"});case"Equirectangular":return E.createElement(_e,{key:"EnvmapEquirectangularReactor"});case"Color":return E.createElement(Ne,{key:"EnvmapColorReactor"});case"Probes":return E.createElement(we,{key:"EnvmapProbesReactor"})}return null},errors:["MISSING_FILE"]}),Re=n=>{const{envmapEntity:e,bakeEntity:t}=n,r=g(t,$),[c,o]=W(r.envMapOrigin.value,e);return s.useEffect(()=>{const a=c;if(a&&(a.mapping=C,_(e,m).envmap.set(a),r.boxProjection.value))for(const i of n.childrenMesh){const x=f(i,S);De(t,x)}},[c]),s.useEffect(()=>{o&&w(e,m,"MISSING_FILE","Skybox texture could not be found!")},[o]),null};function A(n,e){if(n&&n.material)if(Array.isArray(n.material))n.material.forEach(t=>{t instanceof T||(t.envMap=e,t.needsUpdate=!0)});else{if(n.material instanceof T)return;const t=n.material;t.envMap=e,t.needsUpdate=!0}}const Ve=(n,e)=>{n&&n.material&&(Array.isArray(n.material)?n.material.forEach(t=>{t.envMapIntensity=e,t.needsUpdate=!0}):(n.material.envMapIntensity=e,n.material.needsUpdate=!0))},G=k({name:"BoxProjectionPlugin",schema:l.Object({cubeMapSize:l.Class(()=>new b(new I)),cubeMapPos:l.Class(()=>new b(new I))}),reactor:()=>{const n=v();s.useEffect(()=>{const e=f(n,me),t=(r,c)=>{const o=f(n,G);r.uniforms.cubeMapSize=o.cubeMapSize,r.uniforms.cubeMapPos=o.cubeMapPos;const a=r.shaderType,i=a==="MeshStandardMaterial"||a==="MeshPhysicalMaterial";(i||a==="MeshLambertMaterial"||a==="MeshPhongMaterial")&&(i?(r.vertexShader.startsWith("varying vec3 vWorldPosition")||(r.vertexShader=`varying vec3 vWorldPosition;
`+r.vertexShader),r.vertexShader=r.vertexShader.replace("#include <worldpos_vertex>",be),r.fragmentShader=r.fragmentShader.replace("#include <envmap_physical_pars_fragment>",ge)):(r.fragmentShader=r.fragmentShader.replace("#include <envmap_pars_fragment>",xe),r.fragmentShader=r.fragmentShader.replace("#include <envmap_fragment>",Pe)))};ue(e.material,t)})}}),De=(n,e)=>{const t=f(n,$);if(!e.material||e.type=="VFXBatch")return;(Array.isArray(e.material)?e.material:[e.material]).forEach(c=>{ae(L.getEntityByUUID(c.uuid),G,{cubeMapPos:new b(t.bakePositionOffset),cubeMapSize:new b(t.bakeScale)})})};export{O as E,m as a,A as u};