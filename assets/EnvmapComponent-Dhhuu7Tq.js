import{r as s,R as d}from"./index-qyj2ZBCg.js";import{ah as q,s as Y,ab as j,J as x,K as H,k as Q,v as K,q as V,a5 as D,ai as h,aj as Z,S as _,H as B,ak as U,V as T,al as ee,am as ne,R as te}from"./three.module-C17rxr4q.js";import{g as p,d as L,S as u,T as I,u as E,c as M,e as re,U as k,b as ae,s as oe,k as C,t as ie}from"./index-DpjBADr_.js";import{i as ce}from"./ActionFunctions-C1xBQLQO.js";import{T as z,aw as se,u as le,ax as me,ay as ue,M as y,V as fe,ab as pe,q as W,t as N,az as ve,H as de}from"./resourceLoaderHooks-IpSDu4rL.js";import{l as Ee,g as Me}from"./SkyboxComponent-DKmYSz7c.js";import{R as F}from"./ReflectionProbeComponent-Cuv_oYRn.js";import{b as $}from"./EnvMapBakeComponent-D5Izk5kf.js";const be=`
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
`,O={Skybox:"Skybox",Bake:"Bake",Default:"Default",Cubemap:"Cubemap",Equirectangular:"Equirectangular",Color:"Color",Probes:"Probes",None:"None"};let Se=0,S=null,g=null;function ye(n,e){g||(g=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),g.style.display="block"),S||(S=new q({canvas:g}));const t=new Y,r=new j(-1,1,1,-1,.1,10);r.position.z=1;const a=`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,o=`
  ${e.map((v,m)=>`uniform sampler2D envMap${m};`).join(`
`)}
  ${e.map((v,m)=>`uniform mat4 envMapTransform${m};`).join(`
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
    ${e.map((v,m)=>`
      vec3 envMapPosition${m} = envMapTransform${m}[3].xyz; // Extract position component from envMapTransforms
      currentDistance = length(targetPosition - envMapPosition${m}) + EPSILON;
      weight = 1.0 / currentDistance;
      totalWeight += weight;
      color += texture2D(envMap${m}, vUv).rgb * weight;
    `).join(`
`)}
    color /= totalWeight; // Normalize the accumulated color by the total weight
    gl_FragColor = vec4(color, 1.0);
  }
`,c={targetTransform:{value:p(n,z).matrixWorld}};let i=0;for(let v=0;v<e.length;v++){const m=p(e[v],F),X=p(e[v],z);m.texture&&(c[`envMap${i}`]=new x(m.texture),c[`envMapTransform${i}`]={value:X.matrixWorld},i++)}const l=new H({vertexShader:a,fragmentShader:o,uniforms:c}),w=new Q(new K(2,2),l);t.add(w),S.setSize(256,256),S.render(t,r);const b=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");b.width=256,b.height=256;const R=b.getContext("2d");R&&R.drawImage(g,0,0);const[P,J]=se(Z,n,b,h,D,D,V,V);return P.colorSpace=_,P.needsUpdate=!0,P.name=`ReflectionProbeTexture__${Se++}`,[P,()=>{J(),t.clear(),w.geometry.dispose(),b.remove()}]}const he=new B,Ce=()=>{const n=E(),e=M(n,f);return s.useEffect(()=>()=>{C(n)&&e.envmap.set(null)},[]),s.useEffect(()=>{Ee(e.envMapCubemapURL.value,t=>{t&&(t.mapping=ee,t.colorSpace=_,e.envmap.set(t),ve(n,f,"MISSING_FILE"))},void 0,t=>{e.envmap.set(null),N(n,f,"MISSING_FILE","Skybox texture could not be found!")})},[e.envMapCubemapURL]),null},_e=()=>{const n=E(),e=M(n,f),[t,r]=W(e.envMapSourceURL.value,n);return s.useEffect(()=>()=>{C(n)&&e.envmap.set(null)},[]),s.useEffect(()=>{!t||!t.isTexture||(t.mapping=h,e.envmap.set(t))},[t]),s.useEffect(()=>{r&&(e.envmap.set(null),N(n,f,"MISSING_FILE","Skybox texture could not be found!"))},[r]),null},Ne=()=>{const n=E(),e=M(n,f),[t]=de(()=>null,n);return s.useEffect(()=>()=>{C(n)&&e.envmap.set(null)},[]),s.useEffect(()=>{const r=e.envMapSourceColor.value??he,a=64,o=new ne(Me(new B(r)),a,a,te);o.needsUpdate=!0,o.colorSpace=_,o.mapping=h,t.set(o),e.envmap.set(o)},[e.envMapSourceColor]),null},we=()=>{const n=E(),e=M(n,f),t=ie([F]);return s.useEffect(()=>()=>{C(n)&&e.envmap.set(null)},[]),s.useEffect(()=>{const[r,a]=ye(n,t);return e.envmap.set(r),()=>{a()}},[t]),null},f=L({name:"EnvmapComponent",jsonID:"EE_envmap",schema:u.Object({type:u.LiteralUnion(Object.values(O),O.Skybox),envMapSourceColor:I.Color(4095),envMapSourceURL:u.String(""),envMapCubemapURL:u.String(""),envMapSourceEntityUUID:I.EntityUUID(),envMapIntensity:u.Number(1),envmap:u.NonSerialized(u.Nullable(u.Type()))}),reactor:function(){if(!ce)return null;const n=E(),e=M(n,f),t=!!re(n,y),r=le(n,[y,fe,pe],[f]),a=k.useEntityByUUID(e.envMapSourceEntityUUID.value),o=()=>{const i=[...r];return t&&i.push(n),i.map(l=>p(l,y))};s.useEffect(()=>{const i=o();if(e.envmap.value)for(const l of i)A(l,e.envmap.value);else for(const l of i)A(l,null)},[r,e.envmap,t]),s.useEffect(()=>{const i=o();for(const l of i)Ve(l,e.envMapIntensity.value)},[r,e.envMapIntensity,e.envmap,t]);const c=()=>{switch(e.type.value){case"Bake":{if(a)return d.createElement(Re,{key:a,envmapEntity:n,bakeEntity:a,childrenMesh:r});break}case"Cubemap":return d.createElement(Ce,null);case"Equirectangular":return d.createElement(_e,null);case"Color":return d.createElement(Ne,null);case"Probes":return d.createElement(we,null)}return null};return d.createElement(d.Fragment,null,c())},errors:["MISSING_FILE"]}),Re=n=>{const{envmapEntity:e,bakeEntity:t}=n,r=M(t,$),[a,o]=W(r.envMapOrigin.value,e);return s.useEffect(()=>{const c=a;if(c&&(c.mapping=h,ae(e,f).envmap.set(c),r.boxProjection.value))for(const i of n.childrenMesh){const l=p(i,y);De(t,l)}},[a]),s.useEffect(()=>{o&&N(e,f,"MISSING_FILE","Skybox texture could not be found!")},[o]),null};function A(n,e){if(n&&n.material)if(Array.isArray(n.material))n.material.forEach(t=>{t instanceof U||(t.envMap=e,t.needsUpdate=!0)});else{if(n.material instanceof U)return;const t=n.material;t.envMap=e,t.needsUpdate=!0}}const Ve=(n,e)=>{n&&n.material&&(Array.isArray(n.material)?n.material.forEach(t=>{t.envMapIntensity=e,t.needsUpdate=!0}):(n.material.envMapIntensity=e,n.material.needsUpdate=!0))},G=L({name:"BoxProjectionPlugin",schema:u.Object({cubeMapSize:u.Class(()=>new x(new T)),cubeMapPos:u.Class(()=>new x(new T))}),reactor:()=>{const n=E();s.useEffect(()=>{const e=p(n,me),t=(r,a)=>{const o=p(n,G);r.uniforms.cubeMapSize=o.cubeMapSize,r.uniforms.cubeMapPos=o.cubeMapPos;const c=r.shaderType,i=c==="MeshStandardMaterial"||c==="MeshPhysicalMaterial";(i||c==="MeshLambertMaterial"||c==="MeshPhongMaterial")&&(i?(r.vertexShader.startsWith("varying vec3 vWorldPosition")||(r.vertexShader=`varying vec3 vWorldPosition;
`+r.vertexShader),r.vertexShader=r.vertexShader.replace("#include <worldpos_vertex>",be),r.fragmentShader=r.fragmentShader.replace("#include <envmap_physical_pars_fragment>",ge)):(r.fragmentShader=r.fragmentShader.replace("#include <envmap_pars_fragment>",xe),r.fragmentShader=r.fragmentShader.replace("#include <envmap_fragment>",Pe)))};ue(e.material,t)})}}),De=(n,e)=>{const t=p(n,$);if(!e.material||e.type=="VFXBatch")return;(Array.isArray(e.material)?e.material:[e.material]).forEach(a=>{oe(k.getEntityByUUID(a.uuid),G,{cubeMapPos:new x(t.bakePositionOffset),cubeMapSize:new x(t.bakeScale)})})};export{O as E,f as a,A as u};
