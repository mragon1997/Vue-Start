import demoData from './demo_data.js'

export default {
  data() {
    return {
      data: demoData,
      height: 440,
      padding: [50],
      series: {
        quickType: 'smoothLine'
      }
    }
  }
}
