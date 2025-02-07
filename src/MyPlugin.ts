import type PluginManager from '@jbrowse/core/PluginManager'
import Plugin from '@jbrowse/core/Plugin'

export default class MyPlugin extends Plugin {
  name = 'MyPlugin'
  install(pluginManager: PluginManager) {}
  configure(pluginManager: PluginManager) {
    pluginManager.jexl.addFunction('colorFeature', feature => {
      return 'purple'
    })
  }
}
