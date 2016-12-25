<template>
  <div class="hello">
    <h3> Your OS Version: {{ getWindowsVersion() }}</h3>
  </div>
</template>

<script>
export default {
  name: 'hello',
  mounted () {
    window.vm = this
  },
  methods: {
    getWindowsVersion () {
      let deviceFamilyVersion = parseInt(Windows.System.Profile.AnalyticsInfo.versionInfo.deviceFamilyVersion).toString(16)
      while (deviceFamilyVersion.length !== 16) {
        deviceFamilyVersion = '0' + deviceFamilyVersion
      }
      let vArray = []
      for (let p = 0; p < 16; p = p + 4) {
        const s = deviceFamilyVersion.substring(p, p + 4)
        if (s.length) {
          vArray.push(parseInt(s, 16))
        }
      }
      return vArray.join('.')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
