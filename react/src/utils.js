function transformSkinType(skinId) {
  const id = Number(skinId)
  if (id === 0) {
    return '全部'
  }
  if (id === 1) {
    return '油性'
  }
  if (id === 2) {
    return '混合肌'
  }
  if (id === 3) {
    return '乾性'
  }
}

export { transformSkinType }
