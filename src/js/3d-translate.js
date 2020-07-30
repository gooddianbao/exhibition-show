document.addEventListener( 'mousemove', onDocumentMouseMove, false );

const rotateDegree = 10
const offsetDistance = 50
const windowHalfX = window.innerWidth / 2
const windowHalfY = window.innerHeight / 2
const mouseDegreeX = windowHalfX / rotateDegree
const mouseDegreeY = windowHalfY / rotateDegree
const mouseOffsetX = windowHalfX / offsetDistance
const mouseOffsetY = windowHalfY / (offsetDistance / 2 )

// 滑鼠移動事件
function onDocumentMouseMove( event ) {
  const mouseX = event.clientX - windowHalfX
  const mouseY = event.clientY - windowHalfY
  const offsetX = mouseX / mouseOffsetX
  const offsetY = mouseY / mouseOffsetY
  const degreeX = mouseX / mouseDegreeX
  const degreeY = mouseY / mouseDegreeY

  $('#main-title').css({
    'transform': `perspective(1000px) rotateY(${degreeX}deg) rotateX(${-degreeY}deg) translate(${offsetX}px, ${-offsetY}px)`
  })
}