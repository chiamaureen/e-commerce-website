import React, { useEffect, useState, useMemo } from 'react'

const PARAMS = {
  // 放大倍数
  scale: 2,
  // 组件宽
  width: 800,
  // 组件高
  height: 800,
}

// 鼠标悬停小方块 width的半径
const mouseRadiusW = PARAMS.width / PARAMS.scale / 4
// 鼠标悬停小方块 height的半径
const mouseRadiusH = PARAMS.height / PARAMS.scale / 4

// 样式
const ClassObj = {
  // 图片容器
  imgContainer: {
    width: `${PARAMS.width}px`,
    height: `${PARAMS.height}px`,

    cursor: 'move',
    position: 'relative',
  },

  // 遮罩
  maskBlock: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    // background: "rgba(0,0,0,0)",
    zIndex: 100,
  },

  // 鼠标悬停小方块样式
  mouseBlock: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: `${mouseRadiusW * 2}px`,
    height: `${mouseRadiusH * 2}px`,
    background: 'rgba(0,0,0,0.1)',
    zIndex: 99,
  },

  // 放大镜容器样式
  magnifierContainer: {
    position: 'absolute',
    left: `${PARAMS.width}px`,
    top: `${150}px`,
    width: `${400}px`,
    height: `${400}px`,
    border: '1px solid #ccc',
    overflow: 'hidden',
    zIndex: 98,
  },

  // 图片放大样式 此处图片宽高不能设置为百分比，在scale的作用下，放大的只是图片初始的宽高 ！！！
  imgStyle: {
    width: `${PARAMS.width}px`,
    height: `${PARAMS.height}px`,
    position: 'absolute',
    top: 0,
    left: 0,
    transform: `scale(${PARAMS.scale})`,
    transformOrigin: 'top left',
  },
}

export default function Big(props) {
  // 图片信息
  const [imgUrl, setImgUrl] = useState('')
  // 移入移出开关
  const [magnifierOff, setMagnifierOff] = useState(false)
  // 放大镜样式
  const [{ mouseBlock, imgStyle }, setMouseImg] = useState({
    mouseBlock: ClassObj.mouseBlock,
    imgStyle: ClassObj.imgStyle,
  })

  // 计算相关参数
  const calculationBlock = (offsetX, offsetY) => {
    const cssStyle = {
      mouseBlock: { ...mouseBlock },
      imgStyle: { ...imgStyle },
    }
    let offsetW = offsetX
    let offsetH = offsetY
    /* 小方块位置 */
    // 防止鼠标移动过快导致计算失误，只要小于或者大于对应值，直接设置偏移量等于最小值或者最大值
    // 判断与左右的边距
    if (offsetX < mouseRadiusW) {
      offsetW = mouseRadiusW
    } else if (offsetX > PARAMS.width - mouseRadiusW) {
      offsetW = PARAMS.width - mouseRadiusW
    }

    // 判断 鼠标小方块 与上下的边距
    if (offsetY < mouseRadiusH) {
      offsetH = mouseRadiusH
    } else if (offsetY > PARAMS.height - mouseRadiusH) {
      offsetH = PARAMS.height - mouseRadiusH
    }

    const left = offsetW - mouseRadiusW
    const top = offsetH - mouseRadiusH

    // 设置鼠标悬停小方块
    cssStyle.mouseBlock.left = left
    cssStyle.mouseBlock.top = top

    /* 计算图片放大位置 */
    cssStyle.imgStyle.left = -left * PARAMS.scale
    cssStyle.imgStyle.top = -top * PARAMS.scale

    setMouseImg(cssStyle)
  }

  // 鼠标移入
  const mouseEnter = () => {
    setMagnifierOff(true)
  }

  // 鼠标移除
  const mouseLeave = () => {
    setMagnifierOff(false)
  }

  // 鼠标移动
  const mouseMove = (event) => {
    const e = event.nativeEvent
    calculationBlock(e.offsetX, e.offsetY)
  }

  // 放大镜容器样式
  const magnifierMemo = useMemo(() => {
    if (props.position === 'left') {
      return {
        ...ClassObj.magnifierContainer,
        left: `-${PARAMS.width}px`,
      }
    }
    return ClassObj.magnifierContainer
  }, [props.position])

  useEffect(() => {
    setImgUrl(props.imgUrl)
  }, [props.imgUrl])

  return (
    <div id="mydiv" style={{ position: 'relative' }}>
      <div style={ClassObj.imgContainer}>
        <img src={imgUrl} width="100%" height="100%" alt="图片加载失败" />
        <div
          style={ClassObj.maskBlock}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          onMouseMove={mouseMove}
        />
        {magnifierOff && <div style={mouseBlock} />}
      </div>

      {magnifierOff && (
        <div style={magnifierMemo}>
          <img style={imgStyle} src={imgUrl} alt="图片加载失败" />
        </div>
      )}
    </div>
  )
}
