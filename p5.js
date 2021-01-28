/*! p5.js v0.10.2 October 14, 2019 */
(function(f) {
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = f();
    } else if (typeof define === 'function' && define.amd) {
      define([], f);
    } else {
      var g;
      if (typeof window !== 'undefined') {
        g = window;
      } else if (typeof global !== 'undefined') {
        g = global;
      } else if (typeof self !== 'undefined') {
        g = self;
      } else {
        g = this;
      }
      g.p5 = f();
    }
  })(function() {
    var define, module, exports;
    return (function() {
      function r(e, n, t) {
        function o(i, f) {
          if (!n[i]) {
            if (!e[i]) {
              var c = 'function' == typeof require && require;
              if (!f && c) return c(i, !0);
              if (u) return u(i, !0);
              var a = new Error("Cannot find module '" + i + "'");
              throw ((a.code = 'MODULE_NOT_FOUND'), a);
            }
            var p = (n[i] = { exports: {} });
            e[i][0].call(
              p.exports,
              function(r) {
                var n = e[i][1][r];
                return o(n || r);
              },
              p,
              p.exports,
              r,
              e,
              n,
              t
            );
          }
          return n[i].exports;
        }
        for (var u = 'function' == typeof require && require, i = 0; i < t.length; i++)
          o(t[i]);
        return o;
      }
      return r;
    })()(
      {
        1: [
          function(_dereq_, module, exports) {
            module.exports = {
              project: {
                name: 'p5',
                description:
                  '[![Build Status](https://travis-ci.org/processing/p5.js.svg?branch=master)](https://travis-ci.org/processing/p5.js) [![npm version](https://badge.fury.io/js/p5.svg)](https://www.npmjs.com/package/p5)',
                version: '0.10.2',
                url: 'https://github.com/processing/p5.js#readme'
              },
              files: {
                'src/color/color_conversion.js': {
                  name: 'src/color/color_conversion.js',
                  modules: {
                    'Color Conversion': 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/color/creating_reading.js': {
                  name: 'src/color/creating_reading.js',
                  modules: {
                    'Creating & Reading': 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/color/p5.Color.js': {
                  name: 'src/color/p5.Color.js',
                  modules: {},
                  classes: {
                    'p5.Color': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/color/setting.js': {
                  name: 'src/color/setting.js',
                  modules: {
                    Setting: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/shape/2d_primitives.js': {
                  name: 'src/core/shape/2d_primitives.js',
                  modules: {
                    '2D Primitives': 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/shape/attributes.js': {
                  name: 'src/core/shape/attributes.js',
                  modules: {
                    Attributes: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/shape/curves.js': {
                  name: 'src/core/shape/curves.js',
                  modules: {
                    Curves: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/shape/vertex.js': {
                  name: 'src/core/shape/vertex.js',
                  modules: {
                    Vertex: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/constants.js': {
                  name: 'src/core/constants.js',
                  modules: {
                    Constants: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/environment.js': {
                  name: 'src/core/environment.js',
                  modules: {
                    Environment: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/error_helpers.js': {
                  name: 'src/core/error_helpers.js',
                  modules: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/helpers.js': {
                  name: 'src/core/helpers.js',
                  modules: {},
                  classes: {},
                  fors: {},
                  namespaces: {}
                },
                'src/core/init.js': {
                  name: 'src/core/init.js',
                  modules: {},
                  classes: {},
                  fors: {},
                  namespaces: {}
                },
                'src/core/legacy.js': {
                  name: 'src/core/legacy.js',
                  modules: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/main.js': {
                  name: 'src/core/main.js',
                  modules: {
                    Structure: 1
                  },
                  classes: {
                    p5: 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/p5.Element.js': {
                  name: 'src/core/p5.Element.js',
                  modules: {
                    DOM: 1
                  },
                  classes: {
                    'p5.Element': 1
                  },
                  fors: {
                    'p5.Element': 1
                  },
                  namespaces: {}
                },
                'src/core/p5.Graphics.js': {
                  name: 'src/core/p5.Graphics.js',
                  modules: {
                    Rendering: 1
                  },
                  classes: {
                    'p5.Graphics': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/p5.Renderer.js': {
                  name: 'src/core/p5.Renderer.js',
                  modules: {},
                  classes: {
                    'p5.Renderer': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/p5.Renderer2D.js': {
                  name: 'src/core/p5.Renderer2D.js',
                  modules: {},
                  classes: {},
                  fors: {},
                  namespaces: {}
                },
                'src/core/reference.js': {
                  name: 'src/core/reference.js',
                  modules: {
                    Declaration: 1,
                    'Comparison Operators': 1,
                    'Control Statement': 1,
                    Function: 1,
                    Types: 1,
                    Classes: 1,
                    'Iterative Statement': 1,
                    'JS Method': 1
                  },
                  classes: {},
                  fors: {
                    p5: 1,
                    JSON: 1,
                    console: 1
                  },
                  namespaces: {}
                },
                'src/core/rendering.js': {
                  name: 'src/core/rendering.js',
                  modules: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/shim.js': {
                  name: 'src/core/shim.js',
                  modules: {},
                  classes: {},
                  fors: {},
                  namespaces: {}
                },
                'src/core/structure.js': {
                  name: 'src/core/structure.js',
                  modules: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/transform.js': {
                  name: 'src/core/transform.js',
                  modules: {
                    Transform: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/data/local_storage.js': {
                  name: 'src/data/local_storage.js',
                  modules: {
                    LocalStorage: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/data/p5.TypedDict.js': {
                  name: 'src/data/p5.TypedDict.js',
                  modules: {
                    Dictionary: 1
                  },
                  classes: {
                    'p5.TypedDict': 1,
                    'p5.StringDict': 1,
                    'p5.NumberDict': 1
                  },
                  fors: {
                    'p5.TypedDict': 1,
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/dom/dom.js': {
                  name: 'src/dom/dom.js',
                  modules: {},
                  classes: {
                    'p5.MediaElement': 1,
                    'p5.File': 1
                  },
                  fors: {
                    p5: 1,
                    'p5.Element': 1
                  },
                  namespaces: {}
                },
                'src/events/acceleration.js': {
                  name: 'src/events/acceleration.js',
                  modules: {
                    Acceleration: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/events/keyboard.js': {
                  name: 'src/events/keyboard.js',
                  modules: {
                    Keyboard: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/events/mouse.js': {
                  name: 'src/events/mouse.js',
                  modules: {
                    Mouse: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/events/touch.js': {
                  name: 'src/events/touch.js',
                  modules: {
                    Touch: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/image/filters.js': {
                  name: 'src/image/filters.js',
                  modules: {},
                  classes: {},
                  fors: {},
                  namespaces: {}
                },
                'src/image/image.js': {
                  name: 'src/image/image.js',
                  modules: {
                    Image: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/image/loading_displaying.js': {
                  name: 'src/image/loading_displaying.js',
                  modules: {
                    'Loading & Displaying': 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/image/p5.Image.js': {
                  name: 'src/image/p5.Image.js',
                  modules: {},
                  classes: {
                    'p5.Image': 1
                  },
                  fors: {},
                  namespaces: {}
                },
                'src/image/pixels.js': {
                  name: 'src/image/pixels.js',
                  modules: {
                    Pixels: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/io/files.js': {
                  name: 'src/io/files.js',
                  modules: {
                    Input: 1,
                    Output: 1
                  },
                  classes: {
                    'p5.PrintWriter': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/io/p5.Table.js': {
                  name: 'src/io/p5.Table.js',
                  modules: {
                    Table: 1
                  },
                  classes: {
                    'p5.Table': 1
                  },
                  fors: {},
                  namespaces: {}
                },
                'src/io/p5.TableRow.js': {
                  name: 'src/io/p5.TableRow.js',
                  modules: {},
                  classes: {
                    'p5.TableRow': 1
                  },
                  fors: {},
                  namespaces: {}
                },
                'src/io/p5.XML.js': {
                  name: 'src/io/p5.XML.js',
                  modules: {},
                  classes: {
                    'p5.XML': 1
                  },
                  fors: {},
                  namespaces: {}
                },
                'src/math/calculation.js': {
                  name: 'src/math/calculation.js',
                  modules: {
                    Calculation: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/math/math.js': {
                  name: 'src/math/math.js',
                  modules: {
                    Vector: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/math/noise.js': {
                  name: 'src/math/noise.js',
                  modules: {
                    Noise: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/math/p5.Vector.js': {
                  name: 'src/math/p5.Vector.js',
                  modules: {},
                  classes: {
                    'p5.Vector': 1
                  },
                  fors: {},
                  namespaces: {}
                },
                'src/math/random.js': {
                  name: 'src/math/random.js',
                  modules: {
                    Random: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/math/trigonometry.js': {
                  name: 'src/math/trigonometry.js',
                  modules: {
                    Trigonometry: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/typography/attributes.js': {
                  name: 'src/typography/attributes.js',
                  modules: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/typography/loading_displaying.js': {
                  name: 'src/typography/loading_displaying.js',
                  modules: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/typography/p5.Font.js': {
                  name: 'src/typography/p5.Font.js',
                  modules: {},
                  classes: {
                    'p5.Font': 1
                  },
                  fors: {},
                  namespaces: {}
                },
                'src/utilities/array_functions.js': {
                  name: 'src/utilities/array_functions.js',
                  modules: {
                    'Array Functions': 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/utilities/conversion.js': {
                  name: 'src/utilities/conversion.js',
                  modules: {
                    Conversion: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/utilities/string_functions.js': {
                  name: 'src/utilities/string_functions.js',
                  modules: {
                    'String Functions': 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/utilities/time_date.js': {
                  name: 'src/utilities/time_date.js',
                  modules: {
                    'Time & Date': 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/webgl/3d_primitives.js': {
                  name: 'src/webgl/3d_primitives.js',
                  modules: {
                    '3D Primitives': 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/webgl/interaction.js': {
                  name: 'src/webgl/interaction.js',
                  modules: {
                    Interaction: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/webgl/light.js': {
                  name: 'src/webgl/light.js',
                  modules: {
                    Lights: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/webgl/loading.js': {
                  name: 'src/webgl/loading.js',
                  modules: {
                    '3D Models': 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/webgl/material.js': {
                  name: 'src/webgl/material.js',
                  modules: {
                    Material: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/webgl/p5.Camera.js': {
                  name: 'src/webgl/p5.Camera.js',
                  modules: {
                    Camera: 1
                  },
                  classes: {
                    'p5.Camera': 1
                  },
                  fors: {
                    p5: 1,
                    'p5.Camera': 1
                  },
                  namespaces: {}
                },
                'src/webgl/p5.Geometry.js': {
                  name: 'src/webgl/p5.Geometry.js',
                  modules: {},
                  classes: {
                    'p5.Geometry': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/webgl/p5.Matrix.js': {
                  name: 'src/webgl/p5.Matrix.js',
                  modules: {},
                  classes: {
                    'p5.Matrix': 1
                  },
                  fors: {},
                  namespaces: {}
                },
                'src/webgl/p5.RendererGL.Immediate.js': {
                  name: 'src/webgl/p5.RendererGL.Immediate.js',
                  modules: {},
                  classes: {},
                  fors: {},
                  namespaces: {}
                },
                'src/webgl/p5.RendererGL.Retained.js': {
                  name: 'src/webgl/p5.RendererGL.Retained.js',
                  modules: {},
                  classes: {},
                  fors: {},
                  namespaces: {}
                },
                'src/webgl/p5.RendererGL.js': {
                  name: 'src/webgl/p5.RendererGL.js',
                  modules: {},
                  classes: {
                    'p5.RendererGL': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/webgl/p5.Shader.js': {
                  name: 'src/webgl/p5.Shader.js',
                  modules: {},
                  classes: {
                    'p5.Shader': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/webgl/p5.Texture.js': {
                  name: 'src/webgl/p5.Texture.js',
                  modules: {},
                  classes: {
                    'p5.Texture': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/webgl/text.js': {
                  name: 'src/webgl/text.js',
                  modules: {},
                  classes: {
                    ImageInfos: 1,
                    FontInfo: 1,
                    Cubic: 1
                  },
                  fors: {},
                  namespaces: {}
                },
                'lib/addons/p5.sound.js': {
                  name: 'lib/addons/p5.sound.js',
                  modules: {
                    'p5.sound': 1
                  },
                  classes: {
                    'p5.SoundFile': 1,
                    'p5.Amplitude': 1,
                    'p5.FFT': 1,
                    'p5.Signal': 1,
                    'p5.Oscillator': 1,
                    'p5.SinOsc': 1,
                    'p5.TriOsc': 1,
                    'p5.SawOsc': 1,
                    'p5.SqrOsc': 1,
                    'p5.Envelope': 1,
                    'p5.Pulse': 1,
                    'p5.Noise': 1,
                    'p5.AudioIn': 1,
                    'p5.Effect': 1,
                    'p5.Filter': 1,
                    'p5.LowPass': 1,
                    'p5.HighPass': 1,
                    'p5.BandPass': 1,
                    'p5.EQ': 1,
                    'p5.Panner3D': 1,
                    'p5.Delay': 1,
                    'p5.Reverb': 1,
                    'p5.Convolver': 1,
                    'p5.Phrase': 1,
                    'p5.Part': 1,
                    'p5.Score': 1,
                    'p5.SoundLoop': 1,
                    'p5.Compressor': 1,
                    'p5.SoundRecorder': 1,
                    'p5.PeakDetect': 1,
                    'p5.Gain': 1,
                    'p5.AudioVoice': 1,
                    'p5.MonoSynth': 1,
                    'p5.PolySynth': 1,
                    'p5.Distortion': 1
                  },
                  fors: {
                    'p5.sound': 1,
                    p5: 1
                  },
                  namespaces: {}
                },
                'lib/addons/p5.sound.min.js': {
                  name: 'lib/addons/p5.sound.min.js',
                  modules: {},
                  classes: {},
                  fors: {},
                  namespaces: {}
                }
              },
              modules: {
                Color: {
                  name: 'Color',
                  submodules: {
                    'Color Conversion': 1,
                    'Creating & Reading': 1,
                    Setting: 1
                  },
                  elements: {},
                  classes: {
                    'p5.Color': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {},
                  file: 'src/color/p5.Color.js',
                  line: 14
                },
                'Color Conversion': {
                  name: 'Color Conversion',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Color',
                  namespace: '',
                  file: 'src/color/color_conversion.js',
                  line: 1,
                  requires: ['core']
                },
                'Creating & Reading': {
                  name: 'Creating & Reading',
                  submodules: {},
                  elements: {},
                  classes: {
                    'p5.Color': 1
                  },
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Color',
                  namespace: '',
                  file: 'src/color/p5.Color.js',
                  line: 14,
                  requires: ['core', 'constants'],
                  description:
                    '<p>Each color stores the color mode and level maxes that applied at the\ntime of its construction. These are used to interpret the input arguments\n(at construction and later for that instance of color) and to format the\noutput e.g. when <a href="#/p5/saturation">saturation()</a> is requested.</p>\n<p>Internally we store an array representing the ideal RGBA values in floating\npoint form, normalized from 0 to 1. From this we calculate the closest\nscreen color (RGBA levels from 0 to 255) and expose this to the renderer.</p>\n<p>We also cache normalized, floating point components of the color in various\nrepresentations as they are calculated. This is done to prevent repeating a\nconversion that has already been performed.</p>\n'
                },
                Setting: {
                  name: 'Setting',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Color',
                  namespace: '',
                  file: 'src/color/setting.js',
                  line: 1,
                  requires: ['core', 'constants']
                },
                Shape: {
                  name: 'Shape',
                  submodules: {
                    '2D Primitives': 1,
                    Curves: 1,
                    Vertex: 1,
                    '3D Primitives': 1,
                    '3D Models': 1
                  },
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                '2D Primitives': {
                  name: '2D Primitives',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Shape',
                  namespace: '',
                  file: 'src/core/shape/2d_primitives.js',
                  line: 1,
                  requires: ['core', 'constants']
                },
                Attributes: {
                  name: 'Attributes',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Typography',
                  namespace: '',
                  file: 'src/core/shape/attributes.js',
                  line: 1,
                  requires: ['core', 'constants']
                },
                Curves: {
                  name: 'Curves',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Shape',
                  namespace: '',
                  file: 'src/core/shape/curves.js',
                  line: 1,
                  requires: ['core']
                },
                Vertex: {
                  name: 'Vertex',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Shape',
                  namespace: '',
                  file: 'src/core/shape/vertex.js',
                  line: 1,
                  requires: ['core', 'constants']
                },
                Constants: {
                  name: 'Constants',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {},
                  module: 'Constants',
                  file: 'src/core/constants.js',
                  line: 1
                },
                Environment: {
                  name: 'Environment',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {},
                  module: 'Environment',
                  file: 'src/core/environment.js',
                  line: 1,
                  requires: ['core', 'constants']
                },
                Structure: {
                  name: 'Structure',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {},
                  module: 'Structure',
                  file: 'src/core/main.js',
                  line: 1,
                  requires: ['constants']
                },
                DOM: {
                  name: 'DOM',
                  submodules: {},
                  elements: {},
                  classes: {
                    'p5.Element': 1,
                    'p5.MediaElement': 1,
                    'p5.File': 1
                  },
                  fors: {
                    'p5.Element': 1,
                    p5: 1
                  },
                  namespaces: {},
                  module: 'DOM',
                  file: 'src/dom/dom.js',
                  line: 3268,
                  description:
                    "<p>The web is much more than just canvas and the DOM functionality makes it easy to interact\nwith other HTML5 objects, including text, hyperlink, image, input, video,\naudio, and webcam.</p>\n<p>There is a set of creation methods, DOM manipulation methods, and\nan extended <a href=\"#/p5.Element\">p5.Element</a> that supports a range of HTML elements. See the\n<a href='https://github.com/processing/p5.js/wiki/Beyond-the-canvas'>\nbeyond the canvas tutorial</a> for a full overview of how this addon works.\n\n<p>See <a href='https://github.com/processing/p5.js/wiki/Beyond-the-canvas'>tutorial: beyond the canvas</a>\nfor more info on how to use this library.</a>",
                  requires: ['p5']
                },
                Rendering: {
                  name: 'Rendering',
                  submodules: {
                    undefined: 1
                  },
                  elements: {},
                  classes: {
                    'p5.RendererGL': 1,
                    'p5.Graphics': 1,
                    'p5.Renderer': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {},
                  module: 'Rendering',
                  file: 'src/webgl/p5.RendererGL.js',
                  line: 548,
                  description:
                    '<p>Thin wrapper around a renderer, to be used for creating a\ngraphics buffer object. Use this class if you need\nto draw into an off-screen graphics buffer. The two parameters define the\nwidth and height in pixels. The fields and methods for this class are\nextensive, but mirror the normal drawing API for p5.</p>\n'
                },
                Foundation: {
                  name: 'Foundation',
                  submodules: {
                    Declaration: 1,
                    'Comparison Operators': 1,
                    'Control Statement': 1,
                    Function: 1,
                    Types: 1,
                    Classes: 1,
                    'Iterative Statement': 1
                  },
                  elements: {},
                  classes: {
                    JSON: 1,
                    console: 1
                  },
                  fors: {
                    p5: 1,
                    JSON: 1,
                    console: 1
                  },
                  namespaces: {}
                },
                Declaration: {
                  name: 'Declaration',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Foundation',
                  namespace: '',
                  file: 'src/core/reference.js',
                  line: 1
                },
                'Comparison Operators': {
                  name: 'Comparison Operators',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {},
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Foundation',
                  namespace: '',
                  file: 'src/core/reference.js',
                  line: 57
                },
                'Control Statement': {
                  name: 'Control Statement',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {},
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Foundation',
                  namespace: '',
                  file: 'src/core/reference.js',
                  line: 162
                },
                Function: {
                  name: 'Function',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {},
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Foundation',
                  namespace: '',
                  file: 'src/core/reference.js',
                  line: 193
                },
                Types: {
                  name: 'Types',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {},
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Foundation',
                  namespace: '',
                  file: 'src/core/reference.js',
                  line: 237
                },
                Classes: {
                  name: 'Classes',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {},
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Foundation',
                  namespace: '',
                  file: 'src/core/reference.js',
                  line: 317
                },
                'Iterative Statement': {
                  name: 'Iterative Statement',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {},
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Foundation',
                  namespace: '',
                  file: 'src/core/reference.js',
                  line: 344
                },
                'JS Method': {
                  name: 'JS Method',
                  submodules: {},
                  elements: {},
                  classes: {
                    JSON: 1,
                    console: 1
                  },
                  fors: {
                    JSON: 1,
                    console: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'IO',
                  namespace: '',
                  file: 'src/core/reference.js',
                  line: 416
                },
                Transform: {
                  name: 'Transform',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {},
                  module: 'Transform',
                  file: 'src/core/transform.js',
                  line: 1,
                  requires: ['core', 'constants']
                },
                Data: {
                  name: 'Data',
                  submodules: {
                    LocalStorage: 1,
                    Dictionary: 1,
                    'Array Functions': 1,
                    Conversion: 1,
                    'String Functions': 1
                  },
                  elements: {},
                  classes: {
                    'p5.TypedDict': 1,
                    'p5.StringDict': 1,
                    'p5.NumberDict': 1
                  },
                  fors: {
                    p5: 1,
                    'p5.TypedDict': 1
                  },
                  namespaces: {},
                  file: 'src/data/p5.TypedDict.js',
                  line: 416
                },
                LocalStorage: {
                  name: 'LocalStorage',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Data',
                  namespace: '',
                  file: 'src/data/local_storage.js',
                  line: 1,
                  requires: [
                    'core\n\nThis module defines the p5 methods for working with local storage'
                  ]
                },
                Dictionary: {
                  name: 'Dictionary',
                  submodules: {},
                  elements: {},
                  classes: {
                    'p5.TypedDict': 1,
                    'p5.StringDict': 1,
                    'p5.NumberDict': 1
                  },
                  fors: {
                    'p5.TypedDict': 1,
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Data',
                  namespace: '',
                  file: 'src/data/p5.TypedDict.js',
                  line: 416,
                  requires: [
                    'core\n\nThis module defines the p5 methods for the p5 Dictionary classes.\nThe classes StringDict and NumberDict are for storing and working\nwith key-value pairs.'
                  ],
                  description:
                    '<p>Base class for all p5.Dictionary types. Specifically\n typed Dictionary classes inherit from this class.</p>\n'
                },
                Events: {
                  name: 'Events',
                  submodules: {
                    Acceleration: 1,
                    Keyboard: 1,
                    Mouse: 1,
                    Touch: 1
                  },
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                Acceleration: {
                  name: 'Acceleration',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Events',
                  namespace: '',
                  file: 'src/events/acceleration.js',
                  line: 1,
                  requires: ['core']
                },
                Keyboard: {
                  name: 'Keyboard',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Events',
                  namespace: '',
                  file: 'src/events/keyboard.js',
                  line: 1,
                  requires: ['core']
                },
                Mouse: {
                  name: 'Mouse',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Events',
                  namespace: '',
                  file: 'src/events/mouse.js',
                  line: 1,
                  requires: ['core', 'constants']
                },
                Touch: {
                  name: 'Touch',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Events',
                  namespace: '',
                  file: 'src/events/touch.js',
                  line: 1,
                  requires: ['core']
                },
                Image: {
                  name: 'Image',
                  submodules: {
                    Pixels: 1
                  },
                  elements: {},
                  classes: {
                    'p5.Image': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {},
                  module: 'Image',
                  file: 'src/image/p5.Image.js',
                  line: 21,
                  requires: ['core'],
                  description:
                    '<p>Creates a new <a href="#/p5.Image">p5.Image</a>. A <a href="#/p5.Image">p5.Image</a> is a canvas backed representation of an\nimage.\n<br><br>\np5 can display .gif, .jpg and .png images. Images may be displayed\nin 2D and 3D space. Before an image is used, it must be loaded with the\n<a href="#/p5/loadImage">loadImage()</a> function. The <a href="#/p5.Image">p5.Image</a> class contains fields for the width and\nheight of the image, as well as an array called <a href="#/p5.Image/pixels">pixels[]</a> that contains the\nvalues for every pixel in the image.\n<br><br>\nThe methods described below allow easy access to the image&#39;s pixels and\nalpha channel and simplify the process of compositing.\n<br><br>\nBefore using the <a href="#/p5.Image/pixels">pixels[]</a> array, be sure to use the <a href="#/p5.Image/loadPixels">loadPixels()</a> method on\nthe image to make sure that the pixel data is properly loaded.</p>\n'
                },
                'Loading & Displaying': {
                  name: 'Loading & Displaying',
                  submodules: {},
                  elements: {},
                  classes: {
                    'p5.Font': 1
                  },
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Typography',
                  namespace: '',
                  file: 'src/typography/p5.Font.js',
                  line: 13,
                  requires: ['core'],
                  description:
                    '<p>This module defines the <a href="#/p5.Font">p5.Font</a> class and functions for\ndrawing text to the display canvas.</p>\n'
                },
                Pixels: {
                  name: 'Pixels',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Image',
                  namespace: '',
                  file: 'src/image/pixels.js',
                  line: 1,
                  requires: ['core']
                },
                IO: {
                  name: 'IO',
                  submodules: {
                    'JS Method': 1,
                    Input: 1,
                    Output: 1,
                    Table: 1,
                    'Time & Date': 1
                  },
                  elements: {},
                  classes: {
                    p5: 1,
                    'p5.PrintWriter': 1,
                    'p5.Table': 1,
                    'p5.TableRow': 1,
                    'p5.XML': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {},
                  file: 'src/io/p5.XML.js',
                  line: 9
                },
                Input: {
                  name: 'Input',
                  submodules: {},
                  elements: {},
                  classes: {
                    'p5.XML': 1
                  },
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'IO',
                  namespace: '',
                  file: 'src/io/p5.XML.js',
                  line: 9,
                  requires: ['core'],
                  description:
                    '<p>XML is a representation of an XML object, able to parse XML code. Use\n<a href="#/p5/loadXML">loadXML()</a> to load external XML files and create XML objects.</p>\n'
                },
                Output: {
                  name: 'Output',
                  submodules: {},
                  elements: {},
                  classes: {
                    p5: 1,
                    'p5.PrintWriter': 1
                  },
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'IO',
                  namespace: '',
                  file: 'src/io/files.js',
                  line: 1235,
                  description:
                    '<p>This is the p5 instance constructor.</p>\n<p>A p5 instance holds all the properties and methods related to\na p5 sketch.  It expects an incoming sketch closure and it can also\ntake an optional node parameter for attaching the generated p5 canvas\nto a node.  The sketch closure takes the newly created p5 instance as\nits sole argument and may optionally set <a href="#/p5/preload">preload()</a>, <a href="#/p5/setup">setup()</a>, and/or\n<a href="#/p5/draw">draw()</a> properties on it for running a sketch.</p>\n<p>A p5 sketch can run in &quot;global&quot; or &quot;instance&quot; mode:\n&quot;global&quot;   - all properties and methods are attached to the window\n&quot;instance&quot; - all properties and methods are bound to this p5 object</p>\n'
                },
                Table: {
                  name: 'Table',
                  submodules: {},
                  elements: {},
                  classes: {
                    'p5.Table': 1,
                    'p5.TableRow': 1
                  },
                  fors: {},
                  is_submodule: 1,
                  namespaces: {},
                  module: 'IO',
                  namespace: '',
                  file: 'src/io/p5.TableRow.js',
                  line: 9,
                  requires: ['core'],
                  description:
                    '<p><a href="#/p5.Table">Table</a> objects store data with multiple rows and columns, much\nlike in a traditional spreadsheet. Tables can be generated from\nscratch, dynamically, or using data from an existing file.</p>\n'
                },
                Math: {
                  name: 'Math',
                  submodules: {
                    Calculation: 1,
                    Vector: 1,
                    Noise: 1,
                    Random: 1,
                    Trigonometry: 1
                  },
                  elements: {},
                  classes: {
                    'p5.Vector': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {},
                  file: 'src/math/p5.Vector.js',
                  line: 10
                },
                Calculation: {
                  name: 'Calculation',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Math',
                  namespace: '',
                  file: 'src/math/calculation.js',
                  line: 1,
                  requires: ['core']
                },
                Vector: {
                  name: 'Vector',
                  submodules: {},
                  elements: {},
                  classes: {
                    'p5.Vector': 1
                  },
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Math',
                  namespace: '',
                  file: 'src/math/p5.Vector.js',
                  line: 10,
                  requires: ['core'],
                  description:
                    '<p>A class to describe a two or three dimensional vector, specifically\na Euclidean (also known as geometric) vector. A vector is an entity\nthat has both magnitude and direction. The datatype, however, stores\nthe components of the vector (x, y for 2D, and x, y, z for 3D). The magnitude\nand direction can be accessed via the methods <a href="#/p5/mag">mag()</a> and <a href="#/p5/heading">heading()</a>.\n<br><br>\nIn many of the p5.js examples, you will see <a href="#/p5.Vector">p5.Vector</a> used to describe a\nposition, velocity, or acceleration. For example, if you consider a rectangle\nmoving across the screen, at any given instant it has a position (a vector\nthat points from the origin to its location), a velocity (the rate at which\nthe object&#39;s position changes per time unit, expressed as a vector), and\nacceleration (the rate at which the object&#39;s velocity changes per time\nunit, expressed as a vector).\n<br><br>\nSince vectors represent groupings of values, we cannot simply use\ntraditional addition/multiplication/etc. Instead, we&#39;ll need to do some\n&quot;vector&quot; math, which is made easy by the methods inside the <a href="#/p5.Vector">p5.Vector</a> class.</p>\n'
                },
                Noise: {
                  name: 'Noise',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Math',
                  namespace: '',
                  file: 'src/math/noise.js',
                  line: 14,
                  requires: ['core']
                },
                Random: {
                  name: 'Random',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Math',
                  namespace: '',
                  file: 'src/math/random.js',
                  line: 1,
                  requires: ['core']
                },
                Trigonometry: {
                  name: 'Trigonometry',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Math',
                  namespace: '',
                  file: 'src/math/trigonometry.js',
                  line: 1,
                  requires: ['core', 'constants']
                },
                Typography: {
                  name: 'Typography',
                  submodules: {
                    Attributes: 1,
                    'Loading & Displaying': 1
                  },
                  elements: {},
                  classes: {
                    'p5.Font': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {},
                  file: 'src/typography/p5.Font.js',
                  line: 13
                },
                'Array Functions': {
                  name: 'Array Functions',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Data',
                  namespace: '',
                  file: 'src/utilities/array_functions.js',
                  line: 1,
                  requires: ['core']
                },
                Conversion: {
                  name: 'Conversion',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Data',
                  namespace: '',
                  file: 'src/utilities/conversion.js',
                  line: 1,
                  requires: ['core']
                },
                'String Functions': {
                  name: 'String Functions',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Data',
                  namespace: '',
                  file: 'src/utilities/string_functions.js',
                  line: 1,
                  requires: ['core']
                },
                'Time & Date': {
                  name: 'Time & Date',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'IO',
                  namespace: '',
                  file: 'src/utilities/time_date.js',
                  line: 1,
                  requires: ['core']
                },
                '3D Primitives': {
                  name: '3D Primitives',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Shape',
                  namespace: '',
                  file: 'src/webgl/3d_primitives.js',
                  line: 1,
                  requires: ['core', 'p5.Geometry']
                },
                'Lights, Camera': {
                  name: 'Lights, Camera',
                  submodules: {
                    Interaction: 1,
                    Lights: 1,
                    Material: 1,
                    Camera: 1
                  },
                  elements: {},
                  classes: {
                    'p5.Camera': 1,
                    'p5.Geometry': 1,
                    'p5.Matrix': 1,
                    'p5.Shader': 1,
                    'p5.Texture': 1,
                    ImageInfos: 1,
                    FontInfo: 1,
                    Cubic: 1
                  },
                  fors: {
                    p5: 1,
                    'p5.Camera': 1
                  },
                  namespaces: {},
                  file: 'src/webgl/text.js',
                  line: 260
                },
                Interaction: {
                  name: 'Interaction',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Lights, Camera',
                  namespace: '',
                  file: 'src/webgl/interaction.js',
                  line: 1,
                  requires: ['core']
                },
                Lights: {
                  name: 'Lights',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Lights, Camera',
                  namespace: '',
                  file: 'src/webgl/light.js',
                  line: 1,
                  requires: ['core']
                },
                '3D Models': {
                  name: '3D Models',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Shape',
                  namespace: '',
                  file: 'src/webgl/loading.js',
                  line: 1,
                  requires: ['core', 'p5.Geometry']
                },
                Material: {
                  name: 'Material',
                  submodules: {},
                  elements: {},
                  classes: {
                    'p5.Geometry': 1,
                    'p5.Shader': 1,
                    'p5.Texture': 1
                  },
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Lights, Camera',
                  namespace: '',
                  file: 'src/webgl/p5.Texture.js',
                  line: 12,
                  requires: ['core'],
                  description: '<p>This module defines the p5.Shader class</p>\n'
                },
                Camera: {
                  name: 'Camera',
                  submodules: {},
                  elements: {},
                  classes: {
                    'p5.Camera': 1
                  },
                  fors: {
                    p5: 1,
                    'p5.Camera': 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Lights, Camera',
                  namespace: '',
                  file: 'src/webgl/p5.Camera.js',
                  line: 319,
                  requires: ['core'],
                  description:
                    '<p>This class describes a camera for use in p5&#39;s\n<a href="https://github.com/processing/p5.js/wiki/Getting-started-with-WebGL-in-p5">\nWebGL mode</a>. It contains camera position, orientation, and projection\ninformation necessary for rendering a 3D scene.</p>\n<p>New p5.Camera objects can be made through the\n<a href="#/p5/createCamera">createCamera()</a> function and controlled through\nthe methods described below. A camera created in this way will use a default\nposition in the scene and a default perspective projection until these\nproperties are changed through the various methods available. It is possible\nto create multiple cameras, in which case the current camera\ncan be set through the <a href="#/p5/setCamera">setCamera()</a> method.</p>\n<p>Note:\nThe methods below operate in two coordinate systems: the &#39;world&#39; coordinate\nsystem describe positions in terms of their relationship to the origin along\nthe X, Y and Z axes whereas the camera&#39;s &#39;local&#39; coordinate system\ndescribes positions from the camera&#39;s point of view: left-right, up-down,\nand forward-backward. The <a href="#/p5.Camera/move">move()</a> method,\nfor instance, moves the camera along its own axes, whereas the\n<a href="#/p5.Camera/setPosition">setPosition()</a>\nmethod sets the camera&#39;s position in world-space.</p>\n'
                },
                'p5.sound': {
                  name: 'p5.sound',
                  submodules: {},
                  elements: {},
                  classes: {
                    'p5.sound': 1,
                    'p5.SoundFile': 1,
                    'p5.Amplitude': 1,
                    'p5.FFT': 1,
                    'p5.Signal': 1,
                    'p5.Oscillator': 1,
                    'p5.SinOsc': 1,
                    'p5.TriOsc': 1,
                    'p5.SawOsc': 1,
                    'p5.SqrOsc': 1,
                    'p5.Envelope': 1,
                    'p5.Pulse': 1,
                    'p5.Noise': 1,
                    'p5.AudioIn': 1,
                    'p5.Effect': 1,
                    'p5.Filter': 1,
                    'p5.LowPass': 1,
                    'p5.HighPass': 1,
                    'p5.BandPass': 1,
                    'p5.EQ': 1,
                    'p5.Panner3D': 1,
                    'p5.Delay': 1,
                    'p5.Reverb': 1,
                    'p5.Convolver': 1,
                    'p5.Phrase': 1,
                    'p5.Part': 1,
                    'p5.Score': 1,
                    'p5.SoundLoop': 1,
                    'p5.Compressor': 1,
                    'p5.SoundRecorder': 1,
                    'p5.PeakDetect': 1,
                    'p5.Gain': 1,
                    'p5.AudioVoice': 1,
                    'p5.MonoSynth': 1,
                    'p5.PolySynth': 1,
                    'p5.Distortion': 1
                  },
                  fors: {
                    'p5.sound': 1,
                    p5: 1
                  },
                  namespaces: {},
                  module: 'p5.sound',
                  file: 'lib/addons/p5.sound.js',
                  line: 12767,
                  description:
                    '<p>p5.sound extends p5 with <a href="http://caniuse.com/audio-api"\ntarget="_blank">Web Audio</a> functionality including audio input,\nplayback, analysis and synthesis.\n<br/><br/>\n<a href="#/p5.SoundFile"><b>p5.SoundFile</b></a>: Load and play sound files.<br/>\n<a href="#/p5.Amplitude"><b>p5.Amplitude</b></a>: Get the current volume of a sound.<br/>\n<a href="#/p5.AudioIn"><b>p5.AudioIn</b></a>: Get sound from an input source, typically\n  a computer microphone.<br/>\n<a href="#/p5.FFT"><b>p5.FFT</b></a>: Analyze the frequency of sound. Returns\n  results from the frequency spectrum or time domain (waveform).<br/>\n<a href="#/p5.Oscillator"><b>p5.Oscillator</b></a>: Generate Sine,\n  Triangle, Square and Sawtooth waveforms. Base class of\n  <a href="#/p5.Noise">p5.Noise</a> and <a href="#/p5.Pulse">p5.Pulse</a>.\n  <br/>\n<a href="#/p5.Envelope"><b>p5.Envelope</b></a>: An Envelope is a series\n  of fades over time. Often used to control an object&#39;s\n  output gain level as an &quot;ADSR Envelope&quot; (Attack, Decay,\n  Sustain, Release). Can also modulate other parameters.<br/>\n<a href="#/p5.Delay"><b>p5.Delay</b></a>: A delay effect with\n  parameters for feedback, delayTime, and lowpass filter.<br/>\n<a href="#/p5.Filter"><b>p5.Filter</b></a>: Filter the frequency range of a\n  sound.\n<br/>\n<a href="#/p5.Reverb"><b>p5.Reverb</b></a>: Add reverb to a sound by specifying\n  duration and decay. <br/>\n<b><a href="#/p5.Convolver">p5.Convolver</a>:</b> Extends\n<a href="#/p5.Reverb">p5.Reverb</a> to simulate the sound of real\n  physical spaces through convolution.<br/>\n<b><a href="#/p5.SoundRecorder">p5.SoundRecorder</a></b>: Record sound for playback\n  / save the .wav file.\n<b><a href="#/p5.Phrase">p5.Phrase</a></b>, <b><a href="#/p5.Part">p5.Part</a></b> and\n<b><a href="#/p5.Score">p5.Score</a></b>: Compose musical sequences.\n<br/><br/>\np5.sound is on <a href="https://github.com/therewasaguy/p5.sound/">GitHub</a>.\nDownload the latest version\n<a href="https://github.com/therewasaguy/p5.sound/blob/master/lib/p5.sound.js">here</a>.</p>\n',
                  tag: 'main',
                  itemtype: 'main'
                }
              },
              classes: {
                p5: {
                  name: 'p5',
                  shortname: 'p5',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'IO',
                  submodule: 'Output',
                  namespace: '',
                  file: 'src/core/main.js',
                  line: 13,
                  description:
                    '<p>This is the p5 instance constructor.</p>\n<p>A p5 instance holds all the properties and methods related to\na p5 sketch.  It expects an incoming sketch closure and it can also\ntake an optional node parameter for attaching the generated p5 canvas\nto a node.  The sketch closure takes the newly created p5 instance as\nits sole argument and may optionally set <a href="#/p5/preload">preload()</a>, <a href="#/p5/setup">setup()</a>, and/or\n<a href="#/p5/draw">draw()</a> properties on it for running a sketch.</p>\n<p>A p5 sketch can run in &quot;global&quot; or &quot;instance&quot; mode:\n&quot;global&quot;   - all properties and methods are attached to the window\n&quot;instance&quot; - all properties and methods are bound to this p5 object</p>\n',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'sketch',
                      description:
                        '<p>a closure that can set optional <a href="#/p5/preload">preload()</a>,\n                             <a href="#/p5/setup">setup()</a>, and/or <a href="#/p5/draw">draw()</a> properties on the\n                             given p5 instance</p>\n',
                      type: 'Function'
                    },
                    {
                      name: 'node',
                      description: '<p>element to attach canvas to</p>\n',
                      type: 'HTMLElement',
                      optional: true
                    }
                  ],
                  return: {
                    description: 'a p5 instance',
                    type: 'P5'
                  }
                },
                'p5.Color': {
                  name: 'p5.Color',
                  shortname: 'p5.Color',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Color',
                  submodule: 'Creating & Reading',
                  namespace: '',
                  file: 'src/color/p5.Color.js',
                  line: 14,
                  description:
                    '<p>Each color stores the color mode and level maxes that applied at the\ntime of its construction. These are used to interpret the input arguments\n(at construction and later for that instance of color) and to format the\noutput e.g. when <a href="#/p5/saturation">saturation()</a> is requested.</p>\n<p>Internally we store an array representing the ideal RGBA values in floating\npoint form, normalized from 0 to 1. From this we calculate the closest\nscreen color (RGBA levels from 0 to 255) and expose this to the renderer.</p>\n<p>We also cache normalized, floating point components of the color in various\nrepresentations as they are calculated. This is done to prevent repeating a\nconversion that has already been performed.</p>\n'
                },
                'p5.Element': {
                  name: 'p5.Element',
                  shortname: 'p5.Element',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'DOM',
                  submodule: 'DOM',
                  namespace: '',
                  file: 'src/core/p5.Element.js',
                  line: 9,
                  description:
                    '<p>Base class for all elements added to a sketch, including canvas,\ngraphics buffers, and other HTML elements. It is not called directly, but <a href="#/p5.Element">p5.Element</a>\nobjects are created by calling <a href="#/p5/createCanvas">createCanvas</a>, <a href="#/p5/createGraphics">createGraphics</a>,\n<a href="#/p5/createDiv">createDiv</a>, <a href="#/p5/createImg">createImg</a>, <a href="#/p5/createInput">createInput</a>, etc.</p>\n',
                  params: [
                    {
                      name: 'elt',
                      description: '<p>DOM node that is wrapped</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'pInst',
                      description: '<p>pointer to p5 instance</p>\n',
                      type: 'P5',
                      optional: true
                    }
                  ]
                },
                'p5.Graphics': {
                  name: 'p5.Graphics',
                  shortname: 'p5.Graphics',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Rendering',
                  submodule: 'Rendering',
                  namespace: '',
                  file: 'src/core/p5.Graphics.js',
                  line: 10,
                  description:
                    '<p>Thin wrapper around a renderer, to be used for creating a\ngraphics buffer object. Use this class if you need\nto draw into an off-screen graphics buffer. The two parameters define the\nwidth and height in pixels. The fields and methods for this class are\nextensive, but mirror the normal drawing API for p5.</p>\n',
                  extends: 'p5.Element',
                  params: [
                    {
                      name: 'w',
                      description: '<p>width</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'h',
                      description: '<p>height</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'renderer',
                      description: '<p>the renderer to use, either P2D or WEBGL</p>\n',
                      type: 'Constant'
                    },
                    {
                      name: 'pInst',
                      description: '<p>pointer to p5 instance</p>\n',
                      type: 'P5',
                      optional: true
                    }
                  ]
                },
                'p5.Renderer': {
                  name: 'p5.Renderer',
                  shortname: 'p5.Renderer',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Rendering',
                  submodule: 'Rendering',
                  namespace: '',
                  file: 'src/core/p5.Renderer.js',
                  line: 10,
                  description:
                    '<p>Main graphics and rendering context, as well as the base API\nimplementation for p5.js &quot;core&quot;. To be used as the superclass for\nRenderer2D and Renderer3D classes, respecitvely.</p>\n',
                  is_constructor: 1,
                  extends: 'p5.Element',
                  params: [
                    {
                      name: 'elt',
                      description: '<p>DOM node that is wrapped</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'pInst',
                      description: '<p>pointer to p5 instance</p>\n',
                      type: 'P5',
                      optional: true
                    },
                    {
                      name: 'isMainCanvas',
                      description: '<p>whether we&#39;re using it as main canvas</p>\n',
                      type: 'Boolean',
                      optional: true
                    }
                  ]
                },
                JSON: {
                  name: 'JSON',
                  shortname: 'JSON',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Foundation',
                  submodule: 'JS Method',
                  namespace: ''
                },
                console: {
                  name: 'console',
                  shortname: 'console',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Foundation',
                  submodule: 'JS Method',
                  namespace: ''
                },
                'p5.TypedDict': {
                  name: 'p5.TypedDict',
                  shortname: 'p5.TypedDict',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Data',
                  submodule: 'Dictionary',
                  namespace: '',
                  file: 'src/data/p5.TypedDict.js',
                  line: 82,
                  description:
                    '<p>Base class for all p5.Dictionary types. Specifically\n typed Dictionary classes inherit from this class.</p>\n'
                },
                'p5.StringDict': {
                  name: 'p5.StringDict',
                  shortname: 'p5.StringDict',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Data',
                  submodule: 'Dictionary',
                  namespace: '',
                  file: 'src/data/p5.TypedDict.js',
                  line: 399,
                  description: '<p>A simple Dictionary class for Strings.</p>\n',
                  extends: 'p5.TypedDict'
                },
                'p5.NumberDict': {
                  name: 'p5.NumberDict',
                  shortname: 'p5.NumberDict',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Data',
                  submodule: 'Dictionary',
                  namespace: '',
                  file: 'src/data/p5.TypedDict.js',
                  line: 416,
                  description: '<p>A simple Dictionary class for Numbers.</p>\n',
                  extends: 'p5.TypedDict'
                },
                'p5.MediaElement': {
                  name: 'p5.MediaElement',
                  shortname: 'p5.MediaElement',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'DOM',
                  submodule: 'DOM',
                  namespace: '',
                  file: 'src/dom/dom.js',
                  line: 2185,
                  description:
                    '<p>Extends <a href="#/p5.Element">p5.Element</a> to handle audio and video. In addition to the methods\nof <a href="#/p5.Element">p5.Element</a>, it also contains methods for controlling media. It is not\ncalled directly, but <a href="#/p5.MediaElement">p5.MediaElement</a>s are created by calling <a href="#/p5/createVideo">createVideo</a>,\n<a href="#/p5/createAudio">createAudio</a>, and <a href="#/p5/createCapture">createCapture</a>.</p>\n',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'elt',
                      description: '<p>DOM node that is wrapped</p>\n',
                      type: 'String'
                    }
                  ]
                },
                'p5.File': {
                  name: 'p5.File',
                  shortname: 'p5.File',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'DOM',
                  submodule: 'DOM',
                  namespace: '',
                  file: 'src/dom/dom.js',
                  line: 3268,
                  description:
                    '<p>Base class for a file.\nUsed for Element.drop and createFileInput.</p>\n',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'file',
                      description: '<p>File that is wrapped</p>\n',
                      type: 'File'
                    }
                  ]
                },
                'p5.Image': {
                  name: 'p5.Image',
                  shortname: 'p5.Image',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Image',
                  submodule: 'Image',
                  namespace: '',
                  file: 'src/image/p5.Image.js',
                  line: 21,
                  description:
                    '<p>Creates a new <a href="#/p5.Image">p5.Image</a>. A <a href="#/p5.Image">p5.Image</a> is a canvas backed representation of an\nimage.\n<br><br>\np5 can display .gif, .jpg and .png images. Images may be displayed\nin 2D and 3D space. Before an image is used, it must be loaded with the\n<a href="#/p5/loadImage">loadImage()</a> function. The <a href="#/p5.Image">p5.Image</a> class contains fields for the width and\nheight of the image, as well as an array called <a href="#/p5.Image/pixels">pixels[]</a> that contains the\nvalues for every pixel in the image.\n<br><br>\nThe methods described below allow easy access to the image&#39;s pixels and\nalpha channel and simplify the process of compositing.\n<br><br>\nBefore using the <a href="#/p5.Image/pixels">pixels[]</a> array, be sure to use the <a href="#/p5.Image/loadPixels">loadPixels()</a> method on\nthe image to make sure that the pixel data is properly loaded.</p>\n',
                  example: [
                    '\n<div><code>\nfunction setup() {\n  let img = createImage(100, 100); // same as new p5.Image(100, 100);\n  img.loadPixels();\n  createCanvas(100, 100);\n  background(0);\n\n  // helper for writing color to array\n  function writeColor(image, x, y, red, green, blue, alpha) {\n    let index = (x + y * width) * 4;\n    image.pixels[index] = red;\n    image.pixels[index + 1] = green;\n    image.pixels[index + 2] = blue;\n    image.pixels[index + 3] = alpha;\n  }\n\n  let x, y;\n  // fill with random colors\n  for (y = 0; y < img.height; y++) {\n    for (x = 0; x < img.width; x++) {\n      let red = random(255);\n      let green = random(255);\n      let blue = random(255);\n      let alpha = 255;\n      writeColor(img, x, y, red, green, blue, alpha);\n    }\n  }\n\n  // draw a red line\n  y = 0;\n  for (x = 0; x < img.width; x++) {\n    writeColor(img, x, y, 255, 0, 0, 255);\n  }\n\n  // draw a green line\n  y = img.height - 1;\n  for (x = 0; x < img.width; x++) {\n    writeColor(img, x, y, 0, 255, 0, 255);\n  }\n\n  img.updatePixels();\n  image(img, 0, 0);\n}\n</code></div>'
                  ],
                  params: [
                    {
                      name: 'width',
                      description: '',
                      type: 'Number'
                    },
                    {
                      name: 'height',
                      description: '',
                      type: 'Number'
                    }
                  ]
                },
                'p5.PrintWriter': {
                  name: 'p5.PrintWriter',
                  shortname: 'p5.PrintWriter',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'IO',
                  submodule: 'Output',
                  namespace: '',
                  file: 'src/io/files.js',
                  line: 1235,
                  params: [
                    {
                      name: 'filename',
                      description: '',
                      type: 'String'
                    },
                    {
                      name: 'extension',
                      description: '',
                      type: 'String',
                      optional: true
                    }
                  ]
                },
                'p5.Table': {
                  name: 'p5.Table',
                  shortname: 'p5.Table',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'IO',
                  submodule: 'Table',
                  namespace: '',
                  file: 'src/io/p5.Table.js',
                  line: 33,
                  description:
                    '<p><a href="#/p5.Table">Table</a> objects store data with multiple rows and columns, much\nlike in a traditional spreadsheet. Tables can be generated from\nscratch, dynamically, or using data from an existing file.</p>\n',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'rows',
                      description: '<p>An array of p5.TableRow objects</p>\n',
                      type: 'p5.TableRow[]',
                      optional: true
                    }
                  ]
                },
                'p5.TableRow': {
                  name: 'p5.TableRow',
                  shortname: 'p5.TableRow',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'IO',
                  submodule: 'Table',
                  namespace: '',
                  file: 'src/io/p5.TableRow.js',
                  line: 9,
                  description:
                    '<p>A TableRow object represents a single row of data values,\nstored in columns, from a table.</p>\n<p>A Table Row contains both an ordered array, and an unordered\nJSON object.</p>\n',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'str',
                      description:
                        '<p>optional: populate the row with a\n                            string of values, separated by the\n                            separator</p>\n',
                      type: 'String',
                      optional: true
                    },
                    {
                      name: 'separator',
                      description: '<p>comma separated values (csv) by default</p>\n',
                      type: 'String',
                      optional: true
                    }
                  ]
                },
                'p5.XML': {
                  name: 'p5.XML',
                  shortname: 'p5.XML',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'IO',
                  submodule: 'Input',
                  namespace: '',
                  file: 'src/io/p5.XML.js',
                  line: 9,
                  description:
                    '<p>XML is a representation of an XML object, able to parse XML code. Use\n<a href="#/p5/loadXML">loadXML()</a> to load external XML files and create XML objects.</p>\n',
                  is_constructor: 1,
                  example: [
                    '\n<div class=\'norender\'><code>\n// The following short XML file called "mammals.xml" is parsed\n// in the code below.\n//\n// <?xml version="1.0"?>\n// &lt;mammals&gt;\n//   &lt;animal id="0" species="Capra hircus">Goat&lt;/animal&gt;\n//   &lt;animal id="1" species="Panthera pardus">Leopard&lt;/animal&gt;\n//   &lt;animal id="2" species="Equus zebra">Zebra&lt;/animal&gt;\n// &lt;/mammals&gt;\n\nlet xml;\n\nfunction preload() {\n  xml = loadXML(\'assets/mammals.xml\');\n}\n\nfunction setup() {\n  let children = xml.getChildren(\'animal\');\n\n  for (let i = 0; i < children.length; i++) {\n    let id = children[i].getNum(\'id\');\n    let coloring = children[i].getString(\'species\');\n    let name = children[i].getContent();\n    print(id + \', \' + coloring + \', \' + name);\n  }\n}\n\n// Sketch prints:\n// 0, Capra hircus, Goat\n// 1, Panthera pardus, Leopard\n// 2, Equus zebra, Zebra\n</code></div>'
                  ],
                  alt: 'no image displayed'
                },
                'p5.Vector': {
                  name: 'p5.Vector',
                  shortname: 'p5.Vector',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Math',
                  submodule: 'Vector',
                  namespace: '',
                  file: 'src/math/p5.Vector.js',
                  line: 10,
                  description:
                    '<p>A class to describe a two or three dimensional vector, specifically\na Euclidean (also known as geometric) vector. A vector is an entity\nthat has both magnitude and direction. The datatype, however, stores\nthe components of the vector (x, y for 2D, and x, y, z for 3D). The magnitude\nand direction can be accessed via the methods <a href="#/p5/mag">mag()</a> and <a href="#/p5/heading">heading()</a>.\n<br><br>\nIn many of the p5.js examples, you will see <a href="#/p5.Vector">p5.Vector</a> used to describe a\nposition, velocity, or acceleration. For example, if you consider a rectangle\nmoving across the screen, at any given instant it has a position (a vector\nthat points from the origin to its location), a velocity (the rate at which\nthe object&#39;s position changes per time unit, expressed as a vector), and\nacceleration (the rate at which the object&#39;s velocity changes per time\nunit, expressed as a vector).\n<br><br>\nSince vectors represent groupings of values, we cannot simply use\ntraditional addition/multiplication/etc. Instead, we&#39;ll need to do some\n&quot;vector&quot; math, which is made easy by the methods inside the <a href="#/p5.Vector">p5.Vector</a> class.</p>\n',
                  params: [
                    {
                      name: 'x',
                      description: '<p>x component of the vector</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'y',
                      description: '<p>y component of the vector</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'z',
                      description: '<p>z component of the vector</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  example: [
                    '\n<div>\n<code>\nlet v1 = createVector(40, 50);\nlet v2 = createVector(40, 50);\n\nellipse(v1.x, v1.y, 50, 50);\nellipse(v2.x, v2.y, 50, 50);\nv1.add(v2);\nellipse(v1.x, v1.y, 50, 50);\n</code>\n</div>'
                  ],
                  alt:
                    '2 white ellipses. One center-left the other bottom right and off canvas'
                },
                'p5.Font': {
                  name: 'p5.Font',
                  shortname: 'p5.Font',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Typography',
                  submodule: 'Loading & Displaying',
                  namespace: '',
                  file: 'src/typography/p5.Font.js',
                  line: 13,
                  description: '<p>Base class for font handling</p>\n',
                  params: [
                    {
                      name: 'pInst',
                      description: '<p>pointer to p5 instance</p>\n',
                      type: 'P5',
                      optional: true
                    }
                  ]
                },
                'p5.Camera': {
                  name: 'p5.Camera',
                  shortname: 'p5.Camera',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Lights, Camera',
                  submodule: 'Camera',
                  namespace: '',
                  file: 'src/webgl/p5.Camera.js',
                  line: 319,
                  description:
                    '<p>This class describes a camera for use in p5&#39;s\n<a href="https://github.com/processing/p5.js/wiki/Getting-started-with-WebGL-in-p5">\nWebGL mode</a>. It contains camera position, orientation, and projection\ninformation necessary for rendering a 3D scene.</p>\n<p>New p5.Camera objects can be made through the\n<a href="#/p5/createCamera">createCamera()</a> function and controlled through\nthe methods described below. A camera created in this way will use a default\nposition in the scene and a default perspective projection until these\nproperties are changed through the various methods available. It is possible\nto create multiple cameras, in which case the current camera\ncan be set through the <a href="#/p5/setCamera">setCamera()</a> method.</p>\n<p>Note:\nThe methods below operate in two coordinate systems: the &#39;world&#39; coordinate\nsystem describe positions in terms of their relationship to the origin along\nthe X, Y and Z axes whereas the camera&#39;s &#39;local&#39; coordinate system\ndescribes positions from the camera&#39;s point of view: left-right, up-down,\nand forward-backward. The <a href="#/p5.Camera/move">move()</a> method,\nfor instance, moves the camera along its own axes, whereas the\n<a href="#/p5.Camera/setPosition">setPosition()</a>\nmethod sets the camera&#39;s position in world-space.</p>\n',
                  params: [
                    {
                      name: 'rendererGL',
                      description: '<p>instance of WebGL renderer</p>\n',
                      type: 'RendererGL'
                    }
                  ],
                  example: [
                    "\n<div>\n<code>\nlet cam;\nlet delta = 0.01;\n\nfunction setup() {\n  createCanvas(100, 100, WEBGL);\n  normalMaterial();\n  cam = createCamera();\n  // set initial pan angle\n  cam.pan(-0.8);\n}\n\nfunction draw() {\n  background(200);\n\n  // pan camera according to angle 'delta'\n  cam.pan(delta);\n\n  // every 160 frames, switch direction\n  if (frameCount % 160 === 0) {\n    delta *= -1;\n  }\n\n  rotateX(frameCount * 0.01);\n  translate(-100, 0, 0);\n  box(20);\n  translate(35, 0, 0);\n  box(20);\n  translate(35, 0, 0);\n  box(20);\n  translate(35, 0, 0);\n  box(20);\n  translate(35, 0, 0);\n  box(20);\n  translate(35, 0, 0);\n  box(20);\n  translate(35, 0, 0);\n  box(20);\n}\n</code>\n</div>"
                  ],
                  alt: 'camera view pans left and right across a series of rotating 3D boxes.'
                },
                'p5.Geometry': {
                  name: 'p5.Geometry',
                  shortname: 'p5.Geometry',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Lights, Camera',
                  submodule: 'Material',
                  namespace: '',
                  file: 'src/webgl/p5.Geometry.js',
                  line: 12,
                  description: '<p>p5 Geometry class</p>\n',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'detailX',
                      description: '<p>number of vertices on horizontal surface</p>\n',
                      type: 'Integer',
                      optional: true
                    },
                    {
                      name: 'detailY',
                      description: '<p>number of vertices on horizontal surface</p>\n',
                      type: 'Integer',
                      optional: true
                    },
                    {
                      name: 'callback',
                      description: '<p>function to call upon object instantiation.</p>\n',
                      type: 'Function',
                      optional: true
                    }
                  ]
                },
                'p5.Shader': {
                  name: 'p5.Shader',
                  shortname: 'p5.Shader',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Lights, Camera',
                  submodule: 'Material',
                  namespace: '',
                  file: 'src/webgl/p5.Shader.js',
                  line: 11,
                  description: '<p>Shader class for WEBGL Mode</p>\n',
                  params: [
                    {
                      name: 'renderer',
                      description:
                        '<p>an instance of p5.RendererGL that\nwill provide the GL context for this new p5.Shader</p>\n',
                      type: 'p5.RendererGL'
                    },
                    {
                      name: 'vertSrc',
                      description: '<p>source code for the vertex shader (as a string)</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'fragSrc',
                      description:
                        '<p>source code for the fragment shader (as a string)</p>\n',
                      type: 'String'
                    }
                  ]
                },
                'p5.sound': {
                  name: 'p5.sound',
                  shortname: 'p5.sound',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: ''
                },
                'p5.SoundFile': {
                  name: 'p5.SoundFile',
                  shortname: 'p5.SoundFile',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 1645,
                  description:
                    '<p>SoundFile object with a path to a file.</p>\n\n<p>The p5.SoundFile may not be available immediately because\nit loads the file information asynchronously.</p>\n\n<p>To do something with the sound as soon as it loads\npass the name of a function as the second parameter.</p>\n\n<p>Only one file path is required. However, audio file formats\n(i.e. mp3, ogg, wav and m4a/aac) are not supported by all\nweb browsers. If you want to ensure compatability, instead of a single\nfile path, you may include an Array of filepaths, and the browser will\nchoose a format that works.</p>',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'path',
                      description:
                        '<p>path to a sound file (String). Optionally,\n                             you may include multiple file formats in\n                             an array. Alternately, accepts an object\n                             from the HTML5 File API, or a p5.File.</p>\n',
                      type: 'String|Array'
                    },
                    {
                      name: 'successCallback',
                      description: '<p>Name of a function to call once file loads</p>\n',
                      type: 'Function',
                      optional: true
                    },
                    {
                      name: 'errorCallback',
                      description:
                        '<p>Name of a function to call if file fails to\n                                    load. This function will receive an error or\n                                   XMLHttpRequest object with information\n                                   about what went wrong.</p>\n',
                      type: 'Function',
                      optional: true
                    },
                    {
                      name: 'whileLoadingCallback',
                      description:
                        '<p>Name of a function to call while file\n                                           is loading. That function will\n                                           receive progress of the request to\n                                           load the sound file\n                                           (between 0 and 1) as its first\n                                           parameter. This progress\n                                           does not account for the additional\n                                           time needed to decode the audio data.</p>\n',
                      type: 'Function',
                      optional: true
                    }
                  ],
                  example: [
                    "\n<div><code>\n\nfunction preload() {\n  soundFormats('mp3', 'ogg');\n  mySound = loadSound('assets/doorbell.mp3');\n}\n\nfunction setup() {\n  mySound.setVolume(0.1);\n  mySound.play();\n}\n\n </code></div>"
                  ]
                },
                'p5.Amplitude': {
                  name: 'p5.Amplitude',
                  shortname: 'p5.Amplitude',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 3179,
                  description:
                    '<p>Amplitude measures volume between 0.0 and 1.0.\nListens to all p5sound by default, or use setInput()\nto listen to a specific sound source. Accepts an optional\nsmoothing value, which defaults to 0.</p>\n',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'smoothing',
                      description:
                        '<p>between 0.0 and .999 to smooth\n                           amplitude readings (defaults to 0)</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  example: [
                    "\n<div><code>\nlet sound, amplitude, cnv;\n\nfunction preload(){\n  sound = loadSound('assets/beat.mp3');\n}\nfunction setup() {\n  cnv = createCanvas(100,100);\n  amplitude = new p5.Amplitude();\n\n  // start / stop the sound when canvas is clicked\n  cnv.mouseClicked(function() {\n    if (sound.isPlaying() ){\n      sound.stop();\n    } else {\n      sound.play();\n    }\n  });\n}\nfunction draw() {\n  background(0);\n  fill(255);\n  let level = amplitude.getLevel();\n  let size = map(level, 0, 1, 0, 200);\n  ellipse(width/2, height/2, size, size);\n}\n\n</code></div>"
                  ]
                },
                'p5.FFT': {
                  name: 'p5.FFT',
                  shortname: 'p5.FFT',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 3458,
                  description:
                    '<p>FFT (Fast Fourier Transform) is an analysis algorithm that\nisolates individual\n<a href="https://en.wikipedia.org/wiki/Audio_frequency">\naudio frequencies</a> within a waveform.</p>\n\n<p>Once instantiated, a p5.FFT object can return an array based on\ntwo types of analyses: <br> • <code>FFT.waveform()</code> computes\namplitude values along the time domain. The array indices correspond\nto samples across a brief moment in time. Each value represents\namplitude of the waveform at that sample of time.<br>\n• <code>FFT.analyze() </code> computes amplitude values along the\nfrequency domain. The array indices correspond to frequencies (i.e.\npitches), from the lowest to the highest that humans can hear. Each\nvalue represents amplitude at that slice of the frequency spectrum.\nUse with <code>getEnergy()</code> to measure amplitude at specific\nfrequencies, or within a range of frequencies. </p>\n\n<p>FFT analyzes a very short snapshot of sound called a sample\nbuffer. It returns an array of amplitude measurements, referred\nto as <code>bins</code>. The array is 1024 bins long by default.\nYou can change the bin array length, but it must be a power of 2\nbetween 16 and 1024 in order for the FFT algorithm to function\ncorrectly. The actual size of the FFT buffer is twice the\nnumber of bins, so given a standard sample rate, the buffer is\n2048/44100 seconds long.</p>',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'smoothing',
                      description:
                        '<p>Smooth results of Freq Spectrum.\n                              0.0 &lt; smoothing &lt; 1.0.\n                              Defaults to 0.8.</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'bins',
                      description:
                        '<p>Length of resulting array.\n                          Must be a power of two between\n                          16 and 1024. Defaults to 1024.</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  example: [
                    "\n<div><code>\nfunction preload(){\n  sound = loadSound('assets/Damscray_DancingTiger.mp3');\n}\n\nfunction setup(){\n  let cnv = createCanvas(100,100);\n  cnv.mouseClicked(togglePlay);\n  fft = new p5.FFT();\n  sound.amp(0.2);\n}\n\nfunction draw(){\n  background(0);\n\n  let spectrum = fft.analyze();\n  noStroke();\n  fill(0,255,0); // spectrum is green\n  for (var i = 0; i< spectrum.length; i++){\n    let x = map(i, 0, spectrum.length, 0, width);\n    let h = -height + map(spectrum[i], 0, 255, height, 0);\n    rect(x, height, width / spectrum.length, h )\n  }\n\n  let waveform = fft.waveform();\n  noFill();\n  beginShape();\n  stroke(255,0,0); // waveform is red\n  strokeWeight(1);\n  for (var i = 0; i< waveform.length; i++){\n    let x = map(i, 0, waveform.length, 0, width);\n    let y = map( waveform[i], -1, 1, 0, height);\n    vertex(x,y);\n  }\n  endShape();\n\n  text('click to play/pause', 4, 10);\n}\n\n// fade sound if mouse is over canvas\nfunction togglePlay() {\n  if (sound.isPlaying()) {\n    sound.pause();\n  } else {\n    sound.loop();\n  }\n}\n</code></div>"
                  ]
                },
                'p5.Signal': {
                  name: 'p5.Signal',
                  shortname: 'p5.Signal',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 5223,
                  description:
                    "<p>p5.Signal is a constant audio-rate signal used by p5.Oscillator\nand p5.Envelope for modulation math.</p>\n\n<p>This is necessary because Web Audio is processed on a seprate clock.\nFor example, the p5 draw loop runs about 60 times per second. But\nthe audio clock must process samples 44100 times per second. If we\nwant to add a value to each of those samples, we can't do it in the\ndraw loop, but we can do it by adding a constant-rate audio signal.</p.\n\n<p>This class mostly functions behind the scenes in p5.sound, and returns\na Tone.Signal from the Tone.js library by Yotam Mann.\nIf you want to work directly with audio signals for modular\nsynthesis, check out\n<a href='http://bit.ly/1oIoEng' target=_'blank'>tone.js.</a></p>",
                  is_constructor: 1,
                  return: {
                    description: 'A Signal object from the Tone.js library',
                    type: 'Tone.Signal'
                  },
                  example: [
                    "\n<div><code>\nfunction setup() {\n  carrier = new p5.Oscillator('sine');\n  carrier.amp(1); // set amplitude\n  carrier.freq(220); // set frequency\n  carrier.start(); // start oscillating\n\n  modulator = new p5.Oscillator('sawtooth');\n  modulator.disconnect();\n  modulator.amp(1);\n  modulator.freq(4);\n  modulator.start();\n\n  // Modulator's default amplitude range is -1 to 1.\n  // Multiply it by -200, so the range is -200 to 200\n  // then add 220 so the range is 20 to 420\n  carrier.freq( modulator.mult(-200).add(220) );\n}\n</code></div>"
                  ]
                },
                'p5.Oscillator': {
                  name: 'p5.Oscillator',
                  shortname: 'p5.Oscillator',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 5369,
                  description:
                    "<p>Creates a signal that oscillates between -1.0 and 1.0.\nBy default, the oscillation takes the form of a sinusoidal\nshape ('sine'). Additional types include 'triangle',\n'sawtooth' and 'square'. The frequency defaults to\n440 oscillations per second (440Hz, equal to the pitch of an\n'A' note).</p>\n\n<p>Set the type of oscillation with setType(), or by instantiating a\nspecific oscillator: <a href=\"/reference/#/p5.SinOsc\">p5.SinOsc</a>, <a\nhref=\"/reference/#/p5.TriOsc\">p5.TriOsc</a>, <a\nhref=\"/reference/#/p5.SqrOsc\">p5.SqrOsc</a>, or <a\nhref=\"/reference/#/p5.SawOsc\">p5.SawOsc</a>.\n</p>",
                  is_constructor: 1,
                  params: [
                    {
                      name: 'freq',
                      description: '<p>frequency defaults to 440Hz</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'type',
                      description:
                        '<p>type of oscillator. Options:\n                       &#39;sine&#39; (default), &#39;triangle&#39;,\n                       &#39;sawtooth&#39;, &#39;square&#39;</p>\n',
                      type: 'String',
                      optional: true
                    }
                  ],
                  example: [
                    "\n<div><code>\nlet osc;\nlet playing = false;\n\nfunction setup() {\n  backgroundColor = color(255,0,255);\n  textAlign(CENTER);\n\n  osc = new p5.Oscillator();\n  osc.setType('sine');\n  osc.freq(240);\n  osc.amp(0);\n  osc.start();\n}\n\nfunction draw() {\n  background(backgroundColor)\n  text('click to play', width/2, height/2);\n}\n\nfunction mouseClicked() {\n  if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {\n    if (!playing) {\n      // ramp amplitude to 0.5 over 0.05 seconds\n      osc.amp(0.5, 0.05);\n      playing = true;\n      backgroundColor = color(0,255,255);\n    } else {\n      // ramp amplitude to 0 over 0.5 seconds\n      osc.amp(0, 0.5);\n      playing = false;\n      backgroundColor = color(255,0,255);\n    }\n  }\n}\n</code> </div>"
                  ]
                },
                'p5.SinOsc': {
                  name: 'p5.SinOsc',
                  shortname: 'p5.SinOsc',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 5810,
                  description:
                    "<p>Constructor: <code>new p5.SinOsc()</code>.\nThis creates a Sine Wave Oscillator and is\nequivalent to <code> new p5.Oscillator('sine')\n</code> or creating a p5.Oscillator and then calling\nits method <code>setType('sine')</code>.\nSee p5.Oscillator for methods.</p>\n",
                  is_constructor: 1,
                  extends: 'p5.Oscillator',
                  params: [
                    {
                      name: 'freq',
                      description: '<p>Set the frequency</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ]
                },
                'p5.TriOsc': {
                  name: 'p5.TriOsc',
                  shortname: 'p5.TriOsc',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 5827,
                  description:
                    "<p>Constructor: <code>new p5.TriOsc()</code>.\nThis creates a Triangle Wave Oscillator and is\nequivalent to <code>new p5.Oscillator('triangle')\n</code> or creating a p5.Oscillator and then calling\nits method <code>setType('triangle')</code>.\nSee p5.Oscillator for methods.</p>\n",
                  is_constructor: 1,
                  extends: 'p5.Oscillator',
                  params: [
                    {
                      name: 'freq',
                      description: '<p>Set the frequency</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ]
                },
                'p5.SawOsc': {
                  name: 'p5.SawOsc',
                  shortname: 'p5.SawOsc',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 5844,
                  description:
                    "<p>Constructor: <code>new p5.SawOsc()</code>.\nThis creates a SawTooth Wave Oscillator and is\nequivalent to <code> new p5.Oscillator('sawtooth')\n</code> or creating a p5.Oscillator and then calling\nits method <code>setType('sawtooth')</code>.\nSee p5.Oscillator for methods.</p>\n",
                  is_constructor: 1,
                  extends: 'p5.Oscillator',
                  params: [
                    {
                      name: 'freq',
                      description: '<p>Set the frequency</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ]
                },
                'p5.SqrOsc': {
                  name: 'p5.SqrOsc',
                  shortname: 'p5.SqrOsc',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 5861,
                  description:
                    "<p>Constructor: <code>new p5.SqrOsc()</code>.\nThis creates a Square Wave Oscillator and is\nequivalent to <code> new p5.Oscillator('square')\n</code> or creating a p5.Oscillator and then calling\nits method <code>setType('square')</code>.\nSee p5.Oscillator for methods.</p>\n",
                  is_constructor: 1,
                  extends: 'p5.Oscillator',
                  params: [
                    {
                      name: 'freq',
                      description: '<p>Set the frequency</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ]
                },
                'p5.Envelope': {
                  name: 'p5.Envelope',
                  shortname: 'p5.Envelope',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 6316,
                  description:
                    '<p>Envelopes are pre-defined amplitude distribution over time.\nTypically, envelopes are used to control the output volume\nof an object, a series of fades referred to as Attack, Decay,\nSustain and Release (\n<a href="https://upload.wikimedia.org/wikipedia/commons/e/ea/ADSR_parameter.svg">ADSR</a>\n). Envelopes can also control other Web Audio Parameters—for example, a p5.Envelope can\ncontrol an Oscillator\'s frequency like this: <code>osc.freq(env)</code>.</p>\n<p>Use <code><a href="#/p5.Envelope/setRange">setRange</a></code> to change the attack/release level.\nUse <code><a href="#/p5.Envelope/setADSR">setADSR</a></code> to change attackTime, decayTime, sustainPercent and releaseTime.</p>\n<p>Use the <code><a href="#/p5.Envelope/play">play</a></code> method to play the entire envelope,\nthe <code><a href="#/p5.Envelope/ramp">ramp</a></code> method for a pingable trigger,\nor <code><a href="#/p5.Envelope/triggerAttack">triggerAttack</a></code>/\n<code><a href="#/p5.Envelope/triggerRelease">triggerRelease</a></code> to trigger noteOn/noteOff.</p>',
                  is_constructor: 1,
                  example: [
                    "\n<div><code>\nlet attackLevel = 1.0;\nlet releaseLevel = 0;\n\nlet attackTime = 0.001;\nlet decayTime = 0.2;\nlet susPercent = 0.2;\nlet releaseTime = 0.5;\n\nlet env, triOsc;\n\nfunction setup() {\n  let cnv = createCanvas(100, 100);\n\n  textAlign(CENTER);\n  text('click to play', width/2, height/2);\n\n  env = new p5.Envelope();\n  env.setADSR(attackTime, decayTime, susPercent, releaseTime);\n  env.setRange(attackLevel, releaseLevel);\n\n  triOsc = new p5.Oscillator('triangle');\n  triOsc.amp(env);\n  triOsc.start();\n  triOsc.freq(220);\n\n  cnv.mousePressed(playEnv);\n}\n\nfunction playEnv()  {\n  env.play();\n}\n</code></div>"
                  ]
                },
                'p5.Pulse': {
                  name: 'p5.Pulse',
                  shortname: 'p5.Pulse',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 7114,
                  description:
                    '<p>Creates a Pulse object, an oscillator that implements\nPulse Width Modulation.\nThe pulse is created with two oscillators.\nAccepts a parameter for frequency, and to set the\nwidth between the pulses. See <a href="\nhttp://p5js.org/reference/#/p5.Oscillator">\n<code>p5.Oscillator</code> for a full list of methods.</p>\n',
                  extends: 'p5.Oscillator',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'freq',
                      description: '<p>Frequency in oscillations per second (Hz)</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'w',
                      description:
                        '<p>Width between the pulses (0 to 1.0,\n                       defaults to 0)</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  example: [
                    '\n<div><code>\nlet pulse;\nfunction setup() {\n  background(0);\n\n  // Create and start the pulse wave oscillator\n  pulse = new p5.Pulse();\n  pulse.amp(0.5);\n  pulse.freq(220);\n  pulse.start();\n}\n\nfunction draw() {\n  let w = map(mouseX, 0, width, 0, 1);\n  w = constrain(w, 0, 1);\n  pulse.width(w)\n}\n</code></div>'
                  ]
                },
                'p5.Noise': {
                  name: 'p5.Noise',
                  shortname: 'p5.Noise',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 7293,
                  description:
                    '<p>Noise is a type of oscillator that generates a buffer with random values.</p>\n',
                  extends: 'p5.Oscillator',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'type',
                      description:
                        '<p>Type of noise can be &#39;white&#39; (default),\n                     &#39;brown&#39; or &#39;pink&#39;.</p>\n',
                      type: 'String'
                    }
                  ]
                },
                'p5.AudioIn': {
                  name: 'p5.AudioIn',
                  shortname: 'p5.AudioIn',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 7441,
                  description:
                    '<p>Get audio from an input, i.e. your computer\'s microphone.</p>\n\n<p>Turn the mic on/off with the start() and stop() methods. When the mic\nis on, its volume can be measured with getLevel or by connecting an\nFFT object.</p>\n\n<p>If you want to hear the AudioIn, use the .connect() method.\nAudioIn does not connect to p5.sound output by default to prevent\nfeedback.</p>\n\n<p><em>Note: This uses the <a href="http://caniuse.com/stream">getUserMedia/\nStream</a> API, which is not supported by certain browsers. Access in Chrome browser\nis limited to localhost and https, but access over http may be limited.</em></p>',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'errorCallback',
                      description:
                        '<p>A function to call if there is an error\n                                  accessing the AudioIn. For example,\n                                  Safari and iOS devices do not\n                                  currently allow microphone access.</p>\n',
                      type: 'Function',
                      optional: true
                    }
                  ],
                  example: [
                    '\n<div><code>\nlet mic;\nfunction setup(){\n  mic = new p5.AudioIn()\n  mic.start();\n}\nfunction draw(){\n  background(0);\n  micLevel = mic.getLevel();\n  ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 10, 10);\n}\n</code></div>'
                  ]
                },
                'p5.Effect': {
                  name: 'p5.Effect',
                  shortname: 'p5.Effect',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 8357,
                  description:
                    '<p>Effect is a base class for audio effects in p5. <br>\nThis module handles the nodes and methods that are \ncommon and useful for current and future effects.</p>\n<p>This class is extended by <a href="/reference/#/p5.Distortion">p5.Distortion</a>, \n<a href="/reference/#/p5.Compressor">p5.Compressor</a>,\n<a href="/reference/#/p5.Delay">p5.Delay</a>, \n<a href="/reference/#/p5.Filter">p5.Filter</a>, \n<a href="/reference/#/p5.Reverb">p5.Reverb</a>.</p>\n',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'ac',
                      description: '<p>Reference to the audio context of the p5 object</p>\n',
                      type: 'Object',
                      optional: true
                    },
                    {
                      name: 'input',
                      description: '<p>Gain Node effect wrapper</p>\n',
                      type: 'AudioNode',
                      optional: true
                    },
                    {
                      name: 'output',
                      description: '<p>Gain Node effect wrapper</p>\n',
                      type: 'AudioNode',
                      optional: true
                    },
                    {
                      name: '_drywet',
                      description: '<p>Tone.JS CrossFade node (defaults to value: 1)</p>\n',
                      type: 'Object',
                      optional: true
                    },
                    {
                      name: 'wet',
                      description:
                        '<p>Effects that extend this class should connect\n                             to the wet signal to this gain node, so that dry and wet \n                             signals are mixed properly.</p>\n',
                      type: 'AudioNode',
                      optional: true
                    }
                  ]
                },
                'p5.Filter': {
                  name: 'p5.Filter',
                  shortname: 'p5.Filter',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 8499,
                  description:
                    '<p>A p5.Filter uses a Web Audio Biquad Filter to filter\nthe frequency response of an input source. Subclasses\ninclude:</p>\n* <a href="/reference/#/p5.LowPass"><code>p5.LowPass</code></a>:\nAllows frequencies below the cutoff frequency to pass through,\nand attenuates frequencies above the cutoff.<br/>\n* <a href="/reference/#/p5.HighPass"><code>p5.HighPass</code></a>:\nThe opposite of a lowpass filter. <br/>\n* <a href="/reference/#/p5.BandPass"><code>p5.BandPass</code></a>:\nAllows a range of frequencies to pass through and attenuates\nthe frequencies below and above this frequency range.<br/>\n\n<p>The <code>.res()</code> method controls either width of the\nbandpass, or resonance of the low/highpass cutoff frequency.</p>\n<p>This class extends <a href = "/reference/#/p5.Effect">p5.Effect</a>.  \nMethods <a href = "/reference/#/p5.Effect/amp">amp()</a>, <a href = "/reference/#/p5.Effect/chain">chain()</a>, \n<a href = "/reference/#/p5.Effect/drywet">drywet()</a>, <a href = "/reference/#/p5.Effect/connect">connect()</a>, and \n<a href = "/reference/#/p5.Effect/disconnect">disconnect()</a> are available.</p>\n',
                  extends: 'p5.Effect',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'type',
                      description:
                        '<p>&#39;lowpass&#39; (default), &#39;highpass&#39;, &#39;bandpass&#39;</p>\n',
                      type: 'String',
                      optional: true
                    }
                  ],
                  example: [
                    '\n<div><code>\nlet fft, noise, filter;\n\nfunction setup() {\n  fill(255, 40, 255);\n\n  filter = new p5.BandPass();\n\n  noise = new p5.Noise();\n  // disconnect unfiltered noise,\n  // and connect to filter\n  noise.disconnect();\n  noise.connect(filter);\n  noise.start();\n\n  fft = new p5.FFT();\n}\n\nfunction draw() {\n  background(30);\n\n  // set the BandPass frequency based on mouseX\n  let freq = map(mouseX, 0, width, 20, 10000);\n  filter.freq(freq);\n  // give the filter a narrow band (lower res = wider bandpass)\n  filter.res(50);\n\n  // draw filtered spectrum\n  let spectrum = fft.analyze();\n  noStroke();\n  for (let i = 0; i < spectrum.length; i++) {\n    let x = map(i, 0, spectrum.length, 0, width);\n    let h = -height + map(spectrum[i], 0, 255, height, 0);\n    rect(x, height, width/spectrum.length, h);\n  }\n\n  isMouseOverCanvas();\n}\n\nfunction isMouseOverCanvas() {\n  let mX = mouseX, mY = mouseY;\n  if (mX > 0 && mX < width && mY < height && mY > 0) {\n    noise.amp(0.5, 0.2);\n  } else {\n    noise.amp(0, 0.2);\n  }\n}\n</code></div>'
                  ]
                },
                'p5.LowPass': {
                  name: 'p5.LowPass',
                  shortname: 'p5.LowPass',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 8730,
                  description:
                    "<p>Constructor: <code>new p5.LowPass()</code> Filter.\nThis is the same as creating a p5.Filter and then calling\nits method <code>setType('lowpass')</code>.\nSee p5.Filter for methods.</p>\n",
                  is_constructor: 1,
                  extends: 'p5.Filter'
                },
                'p5.HighPass': {
                  name: 'p5.HighPass',
                  shortname: 'p5.HighPass',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 8744,
                  description:
                    "<p>Constructor: <code>new p5.HighPass()</code> Filter.\nThis is the same as creating a p5.Filter and then calling\nits method <code>setType('highpass')</code>.\nSee p5.Filter for methods.</p>\n",
                  is_constructor: 1,
                  extends: 'p5.Filter'
                },
                'p5.BandPass': {
                  name: 'p5.BandPass',
                  shortname: 'p5.BandPass',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 8758,
                  description:
                    "<p>Constructor: <code>new p5.BandPass()</code> Filter.\nThis is the same as creating a p5.Filter and then calling\nits method <code>setType('bandpass')</code>.\nSee p5.Filter for methods.</p>\n",
                  is_constructor: 1,
                  extends: 'p5.Filter'
                },
                'p5.EQ': {
                  name: 'p5.EQ',
                  shortname: 'p5.EQ',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 8829,
                  description:
                    '<p>p5.EQ is an audio effect that performs the function of a multiband\naudio equalizer. Equalization is used to adjust the balance of\nfrequency compoenents of an audio signal. This process is commonly used\nin sound production and recording to change the waveform before it reaches\na sound output device. EQ can also be used as an audio effect to create\ninteresting distortions by filtering out parts of the spectrum. p5.EQ is\nbuilt using a chain of Web Audio Biquad Filter Nodes and can be\ninstantiated with 3 or 8 bands. Bands can be added or removed from\nthe EQ by directly modifying p5.EQ.bands (the array that stores filters).</p>\n<p>This class extends <a href = "/reference/#/p5.Effect">p5.Effect</a>.\nMethods <a href = "/reference/#/p5.Effect/amp">amp()</a>, <a href = "/reference/#/p5.Effect/chain">chain()</a>,\n<a href = "/reference/#/p5.Effect/drywet">drywet()</a>, <a href = "/reference/#/p5.Effect/connect">connect()</a>, and\n<a href = "/reference/#/p5.Effect/disconnect">disconnect()</a> are available.</p>\n',
                  is_constructor: 1,
                  extends: 'p5.Effect',
                  params: [
                    {
                      name: '_eqsize',
                      description: '<p>Constructor will accept 3 or 8, defaults to 3</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  return: {
                    description: 'p5.EQ object',
                    type: 'Object'
                  },
                  example: [
                    "\n<div><code>\nlet eq;\nlet band_names;\nlet band_index;\n\nlet soundFile, play;\n\nfunction preload() {\n  soundFormats('mp3', 'ogg');\n  soundFile = loadSound('assets/beat');\n}\n\nfunction setup() {\n  eq = new p5.EQ(3);\n  soundFile.disconnect();\n  eq.process(soundFile);\n\n  band_names = ['lows','mids','highs'];\n  band_index = 0;\n  play = false;\n  textAlign(CENTER);\n}\n\nfunction draw() {\n  background(30);\n  noStroke();\n  fill(255);\n  text('click to kill',50,25);\n\n  fill(255, 40, 255);\n  textSize(26);\n  text(band_names[band_index],50,55);\n\n  fill(255);\n  textSize(9);\n  text('space = play/pause',50,80);\n}\n\n//If mouse is over canvas, cycle to the next band and kill the frequency\nfunction mouseClicked() {\n  for (let i = 0; i < eq.bands.length; i++) {\n    eq.bands[i].gain(0);\n  }\n  eq.bands[band_index].gain(-40);\n  if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {\n    band_index === 2 ? band_index = 0 : band_index++;\n  }\n}\n\n//use space bar to trigger play / pause\nfunction keyPressed() {\n  if (key===' ') {\n    play = !play\n    play ? soundFile.loop() : soundFile.pause();\n  }\n}\n</code></div>"
                  ]
                },
                'p5.Panner3D': {
                  name: 'p5.Panner3D',
                  shortname: 'p5.Panner3D',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 9021,
                  description:
                    '<p>Panner3D is based on the <a title="Web Audio Panner docs"  href=\n"https://developer.mozilla.org/en-US/docs/Web/API/PannerNode">\nWeb Audio Spatial Panner Node</a>.\nThis panner is a spatial processing node that allows audio to be positioned\nand oriented in 3D space.</p>\n<p>The position is relative to an <a title="Web Audio Listener docs" href=\n"https://developer.mozilla.org/en-US/docs/Web/API/AudioListener">\nAudio Context Listener</a>, which can be accessed\nby <code>p5.soundOut.audiocontext.listener</code></p>\n',
                  is_constructor: 1
                },
                'p5.Delay': {
                  name: 'p5.Delay',
                  shortname: 'p5.Delay',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 9472,
                  description:
                    '<p>Delay is an echo effect. It processes an existing sound source,\nand outputs a delayed version of that sound. The p5.Delay can\nproduce different effects depending on the delayTime, feedback,\nfilter, and type. In the example below, a feedback of 0.5 (the\ndefaul value) will produce a looping delay that decreases in\nvolume by 50% each repeat. A filter will cut out the high\nfrequencies so that the delay does not sound as piercing as the\noriginal source.</p>\n<p>This class extends <a href = "/reference/#/p5.Effect">p5.Effect</a>.\nMethods <a href = "/reference/#/p5.Effect/amp">amp()</a>, <a href = "/reference/#/p5.Effect/chain">chain()</a>,\n<a href = "/reference/#/p5.Effect/drywet">drywet()</a>, <a href = "/reference/#/p5.Effect/connect">connect()</a>, and\n<a href = "/reference/#/p5.Effect/disconnect">disconnect()</a> are available.</p>\n',
                  extends: 'p5.Effect',
                  is_constructor: 1,
                  example: [
                    "\n<div><code>\nlet noise, env, delay;\n\nfunction setup() {\n  background(0);\n  noStroke();\n  fill(255);\n  textAlign(CENTER);\n  text('click to play', width/2, height/2);\n\n  noise = new p5.Noise('brown');\n  noise.amp(0);\n  noise.start();\n\n  delay = new p5.Delay();\n\n  // delay.process() accepts 4 parameters:\n  // source, delayTime, feedback, filter frequency\n  // play with these numbers!!\n  delay.process(noise, .12, .7, 2300);\n\n  // play the noise with an envelope,\n  // a series of fades ( time / value pairs )\n  env = new p5.Envelope(.01, 0.2, .2, .1);\n}\n\n// mouseClick triggers envelope\nfunction mouseClicked() {\n  // is mouse over canvas?\n  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {\n    env.play(noise);\n  }\n}\n</code></div>"
                  ]
                },
                'p5.Reverb': {
                  name: 'p5.Reverb',
                  shortname: 'p5.Reverb',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 9749,
                  description:
                    '<p>Reverb adds depth to a sound through a large number of decaying\nechoes. It creates the perception that sound is occurring in a\nphysical space. The p5.Reverb has paramters for Time (how long does the\nreverb last) and decayRate (how much the sound decays with each echo)\nthat can be set with the .set() or .process() methods. The p5.Convolver\nextends p5.Reverb allowing you to recreate the sound of actual physical\nspaces through convolution.</p>\n<p>This class extends <a href = "/reference/#/p5.Effect">p5.Effect</a>.\nMethods <a href = "/reference/#/p5.Effect/amp">amp()</a>, <a href = "/reference/#/p5.Effect/chain">chain()</a>,\n<a href = "/reference/#/p5.Effect/drywet">drywet()</a>, <a href = "/reference/#/p5.Effect/connect">connect()</a>, and\n<a href = "/reference/#/p5.Effect/disconnect">disconnect()</a> are available.</p>\n',
                  extends: 'p5.Effect',
                  is_constructor: 1,
                  example: [
                    "\n<div><code>\nlet soundFile, reverb;\nfunction preload() {\n  soundFile = loadSound('assets/Damscray_DancingTiger.mp3');\n}\n\nfunction setup() {\n  reverb = new p5.Reverb();\n  soundFile.disconnect(); // so we'll only hear reverb...\n\n  // connect soundFile to reverb, process w/\n  // 3 second reverbTime, decayRate of 2%\n  reverb.process(soundFile, 3, 2);\n  soundFile.play();\n}\n</code></div>"
                  ]
                },
                'p5.Convolver': {
                  name: 'p5.Convolver',
                  shortname: 'p5.Convolver',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 9920,
                  description:
                    '<p>p5.Convolver extends p5.Reverb. It can emulate the sound of real\nphysical spaces through a process called <a href="\nhttps://en.wikipedia.org/wiki/Convolution_reverb#Real_space_simulation">\nconvolution</a>.</p>\n\n<p>Convolution multiplies any audio input by an "impulse response"\nto simulate the dispersion of sound over time. The impulse response is\ngenerated from an audio file that you provide. One way to\ngenerate an impulse response is to pop a balloon in a reverberant space\nand record the echo. Convolution can also be used to experiment with\nsound.</p>\n\n<p>Use the method <code>createConvolution(path)</code> to instantiate a\np5.Convolver with a path to your impulse response audio file.</p>',
                  extends: 'p5.Effect',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'path',
                      description: '<p>path to a sound file</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'callback',
                      description: '<p>function to call when loading succeeds</p>\n',
                      type: 'Function',
                      optional: true
                    },
                    {
                      name: 'errorCallback',
                      description:
                        '<p>function to call if loading fails.\n                                   This function will receive an error or\n                                   XMLHttpRequest object with information\n                                   about what went wrong.</p>\n',
                      type: 'Function',
                      optional: true
                    }
                  ],
                  example: [
                    "\n<div><code>\nlet cVerb, sound;\nfunction preload() {\n  // We have both MP3 and OGG versions of all sound assets\n  soundFormats('ogg', 'mp3');\n\n  // Try replacing 'bx-spring' with other soundfiles like\n  // 'concrete-tunnel' 'small-plate' 'drum' 'beatbox'\n  cVerb = createConvolver('assets/bx-spring.mp3');\n\n  // Try replacing 'Damscray_DancingTiger' with\n  // 'beat', 'doorbell', lucky_dragons_-_power_melody'\n  sound = loadSound('assets/Damscray_DancingTiger.mp3');\n}\n\nfunction setup() {\n  // disconnect from master output...\n  sound.disconnect();\n\n  // ...and process with cVerb\n  // so that we only hear the convolution\n  cVerb.process(sound);\n\n  sound.play();\n}\n</code></div>"
                  ]
                },
                'p5.Phrase': {
                  name: 'p5.Phrase',
                  shortname: 'p5.Phrase',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 10476,
                  description:
                    "<p>A phrase is a pattern of musical events over time, i.e.\na series of notes and rests.</p>\n\n<p>Phrases must be added to a p5.Part for playback, and\neach part can play multiple phrases at the same time.\nFor example, one Phrase might be a kick drum, another\ncould be a snare, and another could be the bassline.</p>\n\n<p>The first parameter is a name so that the phrase can be\nmodified or deleted later. The callback is a a function that\nthis phrase will call at every step—for example it might be\ncalled <code>playNote(value){}</code>. The array determines\nwhich value is passed into the callback at each step of the\nphrase. It can be numbers, an object with multiple numbers,\nor a zero (0) indicates a rest so the callback won't be called).</p>",
                  is_constructor: 1,
                  params: [
                    {
                      name: 'name',
                      description: '<p>Name so that you can access the Phrase.</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'callback',
                      description:
                        '<p>The name of a function that this phrase\n                           will call. Typically it will play a sound,\n                           and accept two parameters: a time at which\n                           to play the sound (in seconds from now),\n                           and a value from the sequence array. The\n                           time should be passed into the play() or\n                           start() method to ensure precision.</p>\n',
                      type: 'Function'
                    },
                    {
                      name: 'sequence',
                      description:
                        '<p>Array of values to pass into the callback\n                          at each step of the phrase.</p>\n',
                      type: 'Array'
                    }
                  ],
                  example: [
                    "\n<div><code>\nlet mySound, myPhrase, myPart;\nlet pattern = [1,0,0,2,0,2,0,0];\nlet msg = 'click to play';\n\nfunction preload() {\n  mySound = loadSound('assets/beatbox.mp3');\n}\n\nfunction setup() {\n  noStroke();\n  fill(255);\n  textAlign(CENTER);\n  masterVolume(0.1);\n\n  myPhrase = new p5.Phrase('bbox', makeSound, pattern);\n  myPart = new p5.Part();\n  myPart.addPhrase(myPhrase);\n  myPart.setBPM(60);\n}\n\nfunction draw() {\n  background(0);\n  text(msg, width/2, height/2);\n}\n\nfunction makeSound(time, playbackRate) {\n  mySound.rate(playbackRate);\n  mySound.play(time);\n}\n\nfunction mouseClicked() {\n  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {\n    myPart.start();\n    msg = 'playing pattern';\n  }\n}\n\n</code></div>"
                  ]
                },
                'p5.Part': {
                  name: 'p5.Part',
                  shortname: 'p5.Part',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 10561,
                  description:
                    '<p>A p5.Part plays back one or more p5.Phrases. Instantiate a part\nwith steps and tatums. By default, each step represents a 1/16th note.</p>\n\n<p>See p5.Phrase for more about musical timing.</p>',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'steps',
                      description: '<p>Steps in the part</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'tatums',
                      description:
                        '<p>Divisions of a beat, e.g. use 1/4, or 0.25 for a quater note (default is 1/16, a sixteenth note)</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  example: [
                    "\n<div><code>\nlet box, drum, myPart;\nlet boxPat = [1,0,0,2,0,2,0,0];\nlet drumPat = [0,1,1,0,2,0,1,0];\nlet msg = 'click to play';\n\nfunction preload() {\n  box = loadSound('assets/beatbox.mp3');\n  drum = loadSound('assets/drum.mp3');\n}\n\nfunction setup() {\n  noStroke();\n  fill(255);\n  textAlign(CENTER);\n  masterVolume(0.1);\n\n  let boxPhrase = new p5.Phrase('box', playBox, boxPat);\n  let drumPhrase = new p5.Phrase('drum', playDrum, drumPat);\n  myPart = new p5.Part();\n  myPart.addPhrase(boxPhrase);\n  myPart.addPhrase(drumPhrase);\n  myPart.setBPM(60);\n  masterVolume(0.1);\n}\n\nfunction draw() {\n  background(0);\n  text(msg, width/2, height/2);\n}\n\nfunction playBox(time, playbackRate) {\n  box.rate(playbackRate);\n  box.play(time);\n}\n\nfunction playDrum(time, playbackRate) {\n  drum.rate(playbackRate);\n  drum.play(time);\n}\n\nfunction mouseClicked() {\n  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {\n    myPart.start();\n    msg = 'playing part';\n  }\n}\n</code></div>"
                  ]
                },
                'p5.Score': {
                  name: 'p5.Score',
                  shortname: 'p5.Score',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 10814,
                  description:
                    '<p>A Score consists of a series of Parts. The parts will\nbe played back in order. For example, you could have an\nA part, a B part, and a C part, and play them back in this order\n<code>new p5.Score(a, a, b, a, c)</code></p>\n',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'parts',
                      description:
                        '<p>One or multiple parts, to be played in sequence.</p>\n',
                      type: 'p5.Part',
                      optional: true,
                      multiple: true
                    }
                  ]
                },
                'p5.SoundLoop': {
                  name: 'p5.SoundLoop',
                  shortname: 'p5.SoundLoop',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 10945,
                  description: '<p>SoundLoop</p>\n',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'callback',
                      description:
                        '<p>this function will be called on each iteration of theloop</p>\n',
                      type: 'Function'
                    },
                    {
                      name: 'interval',
                      description:
                        '<p>amount of time or beats for each iteration of the loop\n                                      defaults to 1</p>\n',
                      type: 'Number|String',
                      optional: true
                    }
                  ],
                  example: [
                    "\n<div><code>\nlet click;\nlet looper1;\n\nfunction preload() {\n  click = loadSound('assets/drum.mp3');\n}\n\nfunction setup() {\n  //the looper's callback is passed the timeFromNow\n  //this value should be used as a reference point from\n  //which to schedule sounds\n  looper1 = new p5.SoundLoop(function(timeFromNow){\n    click.play(timeFromNow);\n    background(255 * (looper1.iterations % 2));\n    }, 2);\n\n  //stop after 10 iteratios;\n  looper1.maxIterations = 10;\n  //start the loop\n  looper1.start();\n}\n</code></div>"
                  ]
                },
                'p5.Compressor': {
                  name: 'p5.Compressor',
                  shortname: 'p5.Compressor',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 11205,
                  description:
                    '<p>Compressor is an audio effect class that performs dynamics compression\non an audio input source. This is a very commonly used technique in music\nand sound production. Compression creates an overall louder, richer, \nand fuller sound by lowering the volume of louds and raising that of softs.\nCompression can be used to avoid clipping (sound distortion due to \npeaks in volume) and is especially useful when many sounds are played \nat once. Compression can be used on indivudal sound sources in addition\nto the master output.  </p>\n<p>This class extends <a href = "/reference/#/p5.Effect">p5.Effect</a>.  \nMethods <a href = "/reference/#/p5.Effect/amp">amp()</a>, <a href = "/reference/#/p5.Effect/chain">chain()</a>, \n<a href = "/reference/#/p5.Effect/drywet">drywet()</a>, <a href = "/reference/#/p5.Effect/connect">connect()</a>, and \n<a href = "/reference/#/p5.Effect/disconnect">disconnect()</a> are available.</p>\n',
                  is_constructor: 1,
                  extends: 'p5.Effect'
                },
                'p5.SoundRecorder': {
                  name: 'p5.SoundRecorder',
                  shortname: 'p5.SoundRecorder',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 11417,
                  description:
                    '<p>Record sounds for playback and/or to save as a .wav file.\nThe p5.SoundRecorder records all sound output from your sketch,\nor can be assigned a specific source with setInput().</p>\n<p>The record() method accepts a p5.SoundFile as a parameter.\nWhen playback is stopped (either after the given amount of time,\nor with the stop() method), the p5.SoundRecorder will send its\nrecording to that p5.SoundFile for playback.</p>',
                  is_constructor: 1,
                  example: [
                    "\n<div><code>\nlet mic, recorder, soundFile;\nlet state = 0;\n\nfunction setup() {\n  background(200);\n  // create an audio in\n  mic = new p5.AudioIn();\n\n  // prompts user to enable their browser mic\n  mic.start();\n\n  // create a sound recorder\n  recorder = new p5.SoundRecorder();\n\n  // connect the mic to the recorder\n  recorder.setInput(mic);\n\n  // this sound file will be used to\n  // playback & save the recording\n  soundFile = new p5.SoundFile();\n\n  text('keyPress to record', 20, 20);\n}\n\nfunction keyPressed() {\n  // make sure user enabled the mic\n  if (state === 0 && mic.enabled) {\n\n    // record to our p5.SoundFile\n    recorder.record(soundFile);\n\n    background(255,0,0);\n    text('Recording!', 20, 20);\n    state++;\n  }\n  else if (state === 1) {\n    background(0,255,0);\n\n    // stop recorder and\n    // send result to soundFile\n    recorder.stop();\n\n    text('Stopped', 20, 20);\n    state++;\n  }\n\n  else if (state === 2) {\n    soundFile.play(); // play the result!\n    save(soundFile, 'mySound.wav');\n    state++;\n  }\n}\n</div></code>"
                  ]
                },
                'p5.PeakDetect': {
                  name: 'p5.PeakDetect',
                  shortname: 'p5.PeakDetect',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 11655,
                  description:
                    '<p>PeakDetect works in conjunction with p5.FFT to\nlook for onsets in some or all of the frequency spectrum.\n</p>\n<p>\nTo use p5.PeakDetect, call <code>update</code> in the draw loop\nand pass in a p5.FFT object.\n</p>\n<p>\nYou can listen for a specific part of the frequency spectrum by\nsetting the range between <code>freq1</code> and <code>freq2</code>.\n</p>\n\n<p><code>threshold</code> is the threshold for detecting a peak,\nscaled between 0 and 1. It is logarithmic, so 0.1 is half as loud\nas 1.0.</p>\n\n<p>\nThe update method is meant to be run in the draw loop, and\n<b>frames</b> determines how many loops must pass before\nanother peak can be detected.\nFor example, if the frameRate() = 60, you could detect the beat of a\n120 beat-per-minute song with this equation:\n<code> framesPerPeak = 60 / (estimatedBPM / 60 );</code>\n</p>\n\n<p>\nBased on example contribtued by @b2renger, and a simple beat detection\nexplanation by <a\nhref="http://www.airtightinteractive.com/2013/10/making-audio-reactive-visuals/"\ntarget="_blank">Felix Turner</a>.\n</p>',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'freq1',
                      description: '<p>lowFrequency - defaults to 20Hz</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'freq2',
                      description: '<p>highFrequency - defaults to 20000 Hz</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'threshold',
                      description:
                        '<p>Threshold for detecting a beat between 0 and 1\n                          scaled logarithmically where 0.1 is 1/2 the loudness\n                          of 1.0. Defaults to 0.35.</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'framesPerPeak',
                      description: '<p>Defaults to 20.</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  example: [
                    "\n<div><code>\n\nlet cnv, soundFile, fft, peakDetect;\nlet ellipseWidth = 10;\n\nfunction preload() {\n  soundFile = loadSound('assets/beat.mp3');\n}\n\nfunction setup() {\n  background(0);\n  noStroke();\n  fill(255);\n  textAlign(CENTER);\n\n  // p5.PeakDetect requires a p5.FFT\n  fft = new p5.FFT();\n  peakDetect = new p5.PeakDetect();\n}\n\nfunction draw() {\n  background(0);\n  text('click to play/pause', width/2, height/2);\n\n  // peakDetect accepts an fft post-analysis\n  fft.analyze();\n  peakDetect.update(fft);\n\n  if ( peakDetect.isDetected ) {\n    ellipseWidth = 50;\n  } else {\n    ellipseWidth *= 0.95;\n  }\n\n  ellipse(width/2, height/2, ellipseWidth, ellipseWidth);\n}\n\n// toggle play/stop when canvas is clicked\nfunction mouseClicked() {\n  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {\n    if (soundFile.isPlaying() ) {\n      soundFile.stop();\n    } else {\n      soundFile.play();\n    }\n  }\n}\n</code></div>"
                  ]
                },
                'p5.Gain': {
                  name: 'p5.Gain',
                  shortname: 'p5.Gain',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 11879,
                  description:
                    '<p>A gain node is usefull to set the relative volume of sound.\nIt&#39;s typically used to build mixers.</p>\n',
                  is_constructor: 1,
                  example: [
                    "\n<div><code>\n\n // load two soundfile and crossfade beetween them\n let sound1,sound2;\n let gain1, gain2, gain3;\n\n function preload(){\n soundFormats('ogg', 'mp3');\n sound1 = loadSound('assets/Damscray_-_Dancing_Tiger_01');\n sound2 = loadSound('assets/beat.mp3');\n }\n\n function setup() {\n createCanvas(400,200);\n\n // create a 'master' gain to which we will connect both soundfiles\n gain3 = new p5.Gain();\n gain3.connect();\n\n // setup first sound for playing\n sound1.rate(1);\n sound1.loop();\n sound1.disconnect(); // diconnect from p5 output\n\n gain1 = new p5.Gain(); // setup a gain node\n gain1.setInput(sound1); // connect the first sound to its input\n gain1.connect(gain3); // connect its output to the 'master'\n\n sound2.rate(1);\n sound2.disconnect();\n sound2.loop();\n\n gain2 = new p5.Gain();\n gain2.setInput(sound2);\n gain2.connect(gain3);\n\n }\n\n function draw(){\n background(180);\n\n // calculate the horizontal distance beetween the mouse and the right of the screen\n let d = dist(mouseX,0,width,0);\n\n // map the horizontal position of the mouse to values useable for volume control of sound1\n let vol1 = map(mouseX,0,width,0,1);\n let vol2 = 1-vol1; // when sound1 is loud, sound2 is quiet and vice versa\n\n gain1.amp(vol1,0.5,0);\n gain2.amp(vol2,0.5,0);\n\n // map the vertical position of the mouse to values useable for 'master volume control'\n let vol3 = map(mouseY,0,height,0,1);\n gain3.amp(vol3,0.5,0);\n }\n</code></div>\n"
                  ]
                },
                'p5.AudioVoice': {
                  name: 'p5.AudioVoice',
                  shortname: 'p5.AudioVoice',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 12020,
                  description:
                    '<p>Base class for monophonic synthesizers. Any extensions of this class\nshould follow the API and implement the methods below in order to \nremain compatible with p5.PolySynth();</p>\n',
                  is_constructor: 1
                },
                'p5.MonoSynth': {
                  name: 'p5.MonoSynth',
                  shortname: 'p5.MonoSynth',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 12073,
                  description:
                    '<p>A MonoSynth is used as a single voice for sound synthesis.\nThis is a class to be used in conjunction with the PolySynth\nclass. Custom synthetisers should be built inheriting from\nthis class.</p>\n',
                  is_constructor: 1,
                  example: [
                    '\n<div><code>\nlet monoSynth;\n\nfunction setup() {\n  let cnv = createCanvas(100, 100);\n  cnv.mousePressed(playSynth);\n\n  monoSynth = new p5.MonoSynth();\n\n  textAlign(CENTER);\n  text(\'click to play\', width/2, height/2);\n}\n\nfunction playSynth() {\n  // time from now (in seconds)\n  let time = 0;\n  // note duration (in seconds)\n  let dur = 0.25;\n  // velocity (volume, from 0 to 1)\n  let v = 0.2;\n\n  monoSynth.play("G3", v, time, dur);\n  monoSynth.play("C4", v, time += dur, dur);\n\n  background(random(255), random(255), 255);\n  text(\'click to play\', width/2, height/2);\n}\n</code></div>'
                  ]
                },
                'p5.PolySynth': {
                  name: 'p5.PolySynth',
                  shortname: 'p5.PolySynth',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 12362,
                  description:
                    '<p>An AudioVoice is used as a single voice for sound synthesis.\nThe PolySynth class holds an array of AudioVoice, and deals\nwith voices allocations, with setting notes to be played, and\nparameters to be set.</p>\n',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'synthVoice',
                      description:
                        '<p>A monophonic synth voice inheriting\n                               the AudioVoice class. Defaults to p5.MonoSynth</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'maxVoices',
                      description: '<p>Number of voices, defaults to 8;</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  example: [
                    '\n<div><code>\nlet polySynth;\n\nfunction setup() {\n  let cnv = createCanvas(100, 100);\n  cnv.mousePressed(playSynth);\n\n  polySynth = new p5.PolySynth();\n\n  textAlign(CENTER);\n  text(\'click to play\', width/2, height/2);\n}\n\nfunction playSynth() {\n  // note duration (in seconds)\n  let dur = 1.5;\n\n  // time from now (in seconds)\n  let time = 0;\n\n  // velocity (volume, from 0 to 1)\n  let vel = 0.1;\n\n  // notes can overlap with each other\n  polySynth.play("G2", vel, 0, dur);\n  polySynth.play("C3", vel, time += 1/3, dur);\n  polySynth.play("G3", vel, time += 1/3, dur);\n\n  background(random(255), random(255), 255);\n  text(\'click to play\', width/2, height/2);\n}\n</code></div>'
                  ]
                },
                'p5.Distortion': {
                  name: 'p5.Distortion',
                  shortname: 'p5.Distortion',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 12767,
                  description:
                    '<p>A Distortion effect created with a Waveshaper Node,\nwith an approach adapted from\n<a href="http://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion">Kevin Ennis</a></p>\n<p>This class extends <a href = "/reference/#/p5.Effect">p5.Effect</a>.  \nMethods <a href = "/reference/#/p5.Effect/amp">amp()</a>, <a href = "/reference/#/p5.Effect/chain">chain()</a>, \n<a href = "/reference/#/p5.Effect/drywet">drywet()</a>, <a href = "/reference/#/p5.Effect/connect">connect()</a>, and \n<a href = "/reference/#/p5.Effect/disconnect">disconnect()</a> are available.</p>\n',
                  extends: 'p5.Effect',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'amount',
                      description:
                        '<p>Unbounded distortion amount.\n                               Normal values range from 0-1.</p>\n',
                      type: 'Number',
                      optional: true,
                      optdefault: '0.25'
                    },
                    {
                      name: 'oversample',
                      description: '<p>&#39;none&#39;, &#39;2x&#39;, or &#39;4x&#39;.</p>\n',
                      type: 'String',
                      optional: true,
                      optdefault: "'none'"
                    }
                  ]
                }
              },
              elements: {},
              classitems: [
                {
                  file: 'src/color/color_conversion.js',
                  line: 8,
                  description:
                    '<p>Conversions adapted from <a href="http://www.easyrgb.com/en/math.php">http://www.easyrgb.com/en/math.php</a>.</p>\n<p>In these functions, hue is always in the range [0, 1], just like all other\ncomponents are in the range [0, 1]. &#39;Brightness&#39; and &#39;value&#39; are used\ninterchangeably.</p>\n',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Color Conversion'
                },
                {
                  file: 'src/color/color_conversion.js',
                  line: 19,
                  description: '<p>Convert an HSBA array to HSLA.</p>\n',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Color Conversion'
                },
                {
                  file: 'src/color/color_conversion.js',
                  line: 45,
                  description: '<p>Convert an HSBA array to RGBA.</p>\n',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Color Conversion'
                },
                {
                  file: 'src/color/color_conversion.js',
                  line: 100,
                  description: '<p>Convert an HSLA array to HSBA.</p>\n',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Color Conversion'
                },
                {
                  file: 'src/color/color_conversion.js',
                  line: 123,
                  description:
                    '<p>Convert an HSLA array to RGBA.</p>\n<p>We need to change basis from HSLA to something that can be more easily be\nprojected onto RGBA. We will choose hue and brightness as our first two\ncomponents, and pick a convenient third one (&#39;zest&#39;) so that we don&#39;t need\nto calculate formal HSBA saturation.</p>\n',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Color Conversion'
                },
                {
                  file: 'src/color/color_conversion.js',
                  line: 187,
                  description: '<p>Convert an RGBA array to HSBA.</p>\n',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Color Conversion'
                },
                {
                  file: 'src/color/color_conversion.js',
                  line: 226,
                  description: '<p>Convert an RGBA array to HSLA.</p>\n',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Color Conversion'
                },
                {
                  file: 'src/color/creating_reading.js',
                  line: 14,
                  description:
                    '<p>Extracts the alpha value from a color or pixel array.</p>\n',
                  itemtype: 'method',
                  name: 'alpha',
                  params: [
                    {
                      name: 'color',
                      description:
                        '<p><a href="#/p5.Color">p5.Color</a> object, color components,\n                                        or CSS color</p>\n',
                      type: 'p5.Color|Number[]|String'
                    }
                  ],
                  return: {
                    description: 'the alpha value',
                    type: 'Number'
                  },
                  example: [
                    "\n<div>\n<code>\nnoStroke();\nlet c = color(0, 126, 255, 102);\nfill(c);\nrect(15, 15, 35, 70);\nlet value = alpha(c); // Sets 'value' to 102\nfill(value);\nrect(50, 15, 35, 70);\n</code>\n</div>"
                  ],
                  alt:
                    'Left half of canvas light blue and right half light charcoal grey.\nLeft half of canvas light purple and right half a royal blue.\nLeft half of canvas salmon pink and the right half white.\nYellow rect in middle right of canvas, with 55 pixel width and height.\nYellow ellipse in top left canvas, black ellipse in bottom right,both 80x80.\nBright fuchsia rect in middle of canvas, 60 pixel width and height.\nTwo bright green rects on opposite sides of the canvas, both 45x80.\nFour blue rects in each corner of the canvas, each are 35x35.\nBright sea green rect on left and darker rect on right of canvas, both 45x80.\nDark green rect on left and light green rect on right of canvas, both 45x80.\nDark blue rect on left and light teal rect on right of canvas, both 45x80.\nblue rect on left and green on right, both with black outlines & 35x60.\nsalmon pink rect on left and black on right, both 35x60.\n4 rects, tan, brown, brownish purple and purple, with white outlines & 20x60.\nlight pastel green rect on left and dark grey rect on right, both 35x60.\nyellow rect on left and red rect on right, both with black outlines & 35x60.\ngrey canvas\ndeep pink rect on left and grey rect on right, both 35x60.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/creating_reading.js',
                  line: 59,
                  description:
                    '<p>Extracts the blue value from a color or pixel array.</p>\n',
                  itemtype: 'method',
                  name: 'blue',
                  params: [
                    {
                      name: 'color',
                      description:
                        '<p><a href="#/p5.Color">p5.Color</a> object, color components,\n                                        or CSS color</p>\n',
                      type: 'p5.Color|Number[]|String'
                    }
                  ],
                  return: {
                    description: 'the blue value',
                    type: 'Number'
                  },
                  example: [
                    "\n<div>\n<code>\nlet c = color(175, 100, 220); // Define color 'c'\nfill(c); // Use color variable 'c' as fill color\nrect(15, 20, 35, 60); // Draw left rectangle\n\nlet blueValue = blue(c); // Get blue in 'c'\nprint(blueValue); // Prints \"220.0\"\nfill(0, 0, blueValue); // Use 'blueValue' in new fill\nrect(50, 20, 35, 60); // Draw right rectangle\n</code>\n</div>"
                  ],
                  alt: 'Left half of canvas light purple and right half a royal blue.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/creating_reading.js',
                  line: 89,
                  description:
                    '<p>Extracts the HSB brightness value from a color or pixel array.</p>\n',
                  itemtype: 'method',
                  name: 'brightness',
                  params: [
                    {
                      name: 'color',
                      description:
                        '<p><a href="#/p5.Color">p5.Color</a> object, color components,\n                                        or CSS color</p>\n',
                      type: 'p5.Color|Number[]|String'
                    }
                  ],
                  return: {
                    description: 'the brightness value',
                    type: 'Number'
                  },
                  example: [
                    "\n<div>\n<code>\nnoStroke();\ncolorMode(HSB, 255);\nlet c = color(0, 126, 255);\nfill(c);\nrect(15, 20, 35, 60);\nlet value = brightness(c); // Sets 'value' to 255\nfill(value);\nrect(50, 20, 35, 60);\n</code>\n</div>\n<div>\n<code>\nnoStroke();\ncolorMode(HSB, 255);\nlet c = color('hsb(60, 100%, 50%)');\nfill(c);\nrect(15, 20, 35, 60);\nlet value = brightness(c); // A 'value' of 50% is 127.5\nfill(value);\nrect(50, 20, 35, 60);\n</code>\n</div>"
                  ],
                  alt:
                    'Left half of canvas salmon pink and the right half white.\nLeft half of canvas yellow at half brightness and the right gray .',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/creating_reading.js',
                  line: 132,
                  description:
                    '<p>Creates colors for storing in variables of the color datatype. The\nparameters are interpreted as RGB or HSB values depending on the\ncurrent <a href="#/p5/colorMode">colorMode()</a>. The default mode is RGB values from 0 to 255\nand, therefore, the function call color(255, 204, 0) will return a\nbright yellow color.\n<br><br>\nNote that if only one value is provided to <a href="#/p5/color">color()</a>, it will be interpreted\nas a grayscale value. Add a second value, and it will be used for alpha\ntransparency. When three values are specified, they are interpreted as\neither RGB or HSB values. Adding a fourth value applies alpha\ntransparency.\n<br><br>\nIf a single string argument is provided, RGB, RGBA and Hex CSS color\nstrings and all named color strings are supported. In this case, an alpha\nnumber value as a second argument is not supported, the RGBA form should be\nused.</p>\n',
                  itemtype: 'method',
                  name: 'color',
                  return: {
                    description: 'resulting color',
                    type: 'p5.Color'
                  },
                  example: [
                    "\n<div>\n<code>\nlet c = color(255, 204, 0); // Define color 'c'\nfill(c); // Use color variable 'c' as fill color\nnoStroke(); // Don't draw a stroke around shapes\nrect(30, 20, 55, 55); // Draw rectangle\n</code>\n</div>\n\n<div>\n<code>\nlet c = color(255, 204, 0); // Define color 'c'\nfill(c); // Use color variable 'c' as fill color\nnoStroke(); // Don't draw a stroke around shapes\nellipse(25, 25, 80, 80); // Draw left circle\n\n// Using only one value with color()\n// generates a grayscale value.\nc = color(65); // Update 'c' with grayscale value\nfill(c); // Use updated 'c' as fill color\nellipse(75, 75, 80, 80); // Draw right circle\n</code>\n</div>\n\n<div>\n<code>\n// Named SVG & CSS colors may be used,\nlet c = color('magenta');\nfill(c); // Use 'c' as fill color\nnoStroke(); // Don't draw a stroke around shapes\nrect(20, 20, 60, 60); // Draw rectangle\n</code>\n</div>\n\n<div>\n<code>\n// as can hex color codes:\nnoStroke(); // Don't draw a stroke around shapes\nlet c = color('#0f0');\nfill(c); // Use 'c' as fill color\nrect(0, 10, 45, 80); // Draw rectangle\n\nc = color('#00ff00');\nfill(c); // Use updated 'c' as fill color\nrect(55, 10, 45, 80); // Draw rectangle\n</code>\n</div>\n\n<div>\n<code>\n// RGB and RGBA color strings are also supported:\n// these all set to the same color (solid blue)\nlet c;\nnoStroke(); // Don't draw a stroke around shapes\nc = color('rgb(0,0,255)');\nfill(c); // Use 'c' as fill color\nrect(10, 10, 35, 35); // Draw rectangle\n\nc = color('rgb(0%, 0%, 100%)');\nfill(c); // Use updated 'c' as fill color\nrect(55, 10, 35, 35); // Draw rectangle\n\nc = color('rgba(0, 0, 255, 1)');\nfill(c); // Use updated 'c' as fill color\nrect(10, 55, 35, 35); // Draw rectangle\n\nc = color('rgba(0%, 0%, 100%, 1)');\nfill(c); // Use updated 'c' as fill color\nrect(55, 55, 35, 35); // Draw rectangle\n</code>\n</div>\n\n<div>\n<code>\n// HSL color is also supported and can be specified\n// by value\nlet c;\nnoStroke(); // Don't draw a stroke around shapes\nc = color('hsl(160, 100%, 50%)');\nfill(c); // Use 'c' as fill color\nrect(0, 10, 45, 80); // Draw rectangle\n\nc = color('hsla(160, 100%, 50%, 0.5)');\nfill(c); // Use updated 'c' as fill color\nrect(55, 10, 45, 80); // Draw rectangle\n</code>\n</div>\n\n<div>\n<code>\n// HSB color is also supported and can be specified\n// by value\nlet c;\nnoStroke(); // Don't draw a stroke around shapes\nc = color('hsb(160, 100%, 50%)');\nfill(c); // Use 'c' as fill color\nrect(0, 10, 45, 80); // Draw rectangle\n\nc = color('hsba(160, 100%, 50%, 0.5)');\nfill(c); // Use updated 'c' as fill color\nrect(55, 10, 45, 80); // Draw rectangle\n</code>\n</div>\n\n<div>\n<code>\nlet c; // Declare color 'c'\nnoStroke(); // Don't draw a stroke around shapes\n\n// If no colorMode is specified, then the\n// default of RGB with scale of 0-255 is used.\nc = color(50, 55, 100); // Create a color for 'c'\nfill(c); // Use color variable 'c' as fill color\nrect(0, 10, 45, 80); // Draw left rect\n\ncolorMode(HSB, 100); // Use HSB with scale of 0-100\nc = color(50, 55, 100); // Update 'c' with new color\nfill(c); // Use updated 'c' as fill color\nrect(55, 10, 45, 80); // Draw right rect\n</code>\n</div>"
                  ],
                  alt:
                    'Yellow rect in middle right of canvas, with 55 pixel width and height.\nYellow ellipse in top left of canvas, black ellipse in bottom right,both 80x80.\nBright fuchsia rect in middle of canvas, 60 pixel width and height.\nTwo bright green rects on opposite sides of the canvas, both 45x80.\nFour blue rects in each corner of the canvas, each are 35x35.\nBright sea green rect on left and darker rect on right of canvas, both 45x80.\nDark green rect on left and lighter green rect on right of canvas, both 45x80.\nDark blue rect on left and light teal rect on right of canvas, both 45x80.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Creating & Reading',
                  overloads: [
                    {
                      line: 132,
                      params: [
                        {
                          name: 'gray',
                          description:
                            '<p>number specifying value between white\n                                and black.</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'alpha',
                          description:
                            '<p>alpha value relative to current color range\n                                (default is 0-255)</p>\n',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      return: {
                        description: 'resulting color',
                        type: 'p5.Color'
                      }
                    },
                    {
                      line: 291,
                      params: [
                        {
                          name: 'v1',
                          description:
                            '<p>red or hue value relative to\n                                the current color range</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'v2',
                          description:
                            '<p>green or saturation value\n                                relative to the current color range</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'v3',
                          description:
                            '<p>blue or brightness value\n                                relative to the current color range</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'alpha',
                          description: '',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      return: {
                        description: '',
                        type: 'p5.Color'
                      }
                    },
                    {
                      line: 303,
                      params: [
                        {
                          name: 'value',
                          description: '<p>a color string</p>\n',
                          type: 'String'
                        }
                      ],
                      return: {
                        description: '',
                        type: 'p5.Color'
                      }
                    },
                    {
                      line: 308,
                      params: [
                        {
                          name: 'values',
                          description:
                            '<p>an array containing the red,green,blue &amp;\n                                and alpha components of the color</p>\n',
                          type: 'Number[]'
                        }
                      ],
                      return: {
                        description: '',
                        type: 'p5.Color'
                      }
                    },
                    {
                      line: 314,
                      params: [
                        {
                          name: 'color',
                          description: '',
                          type: 'p5.Color'
                        }
                      ],
                      return: {
                        description: '',
                        type: 'p5.Color'
                      }
                    }
                  ]
                },
                {
                  file: 'src/color/creating_reading.js',
                  line: 330,
                  description:
                    '<p>Extracts the green value from a color or pixel array.</p>\n',
                  itemtype: 'method',
                  name: 'green',
                  params: [
                    {
                      name: 'color',
                      description:
                        '<p><a href="#/p5.Color">p5.Color</a> object, color components,\n                                        or CSS color</p>\n',
                      type: 'p5.Color|Number[]|String'
                    }
                  ],
                  return: {
                    description: 'the green value',
                    type: 'Number'
                  },
                  example: [
                    "\n<div>\n<code>\nlet c = color(20, 75, 200); // Define color 'c'\nfill(c); // Use color variable 'c' as fill color\nrect(15, 20, 35, 60); // Draw left rectangle\n\nlet greenValue = green(c); // Get green in 'c'\nprint(greenValue); // Print \"75.0\"\nfill(0, greenValue, 0); // Use 'greenValue' in new fill\nrect(50, 20, 35, 60); // Draw right rectangle\n</code>\n</div>"
                  ],
                  alt:
                    'blue rect on left and green on right, both with black outlines & 35x60.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/creating_reading.js',
                  line: 361,
                  description:
                    '<p>Extracts the hue value from a color or pixel array.</p>\n<p>Hue exists in both HSB and HSL. This function will return the\nHSB-normalized hue when supplied with an HSB color object (or when supplied\nwith a pixel array while the color mode is HSB), but will default to the\nHSL-normalized hue otherwise. (The values will only be different if the\nmaximum hue setting for each system is different.)</p>\n',
                  itemtype: 'method',
                  name: 'hue',
                  params: [
                    {
                      name: 'color',
                      description:
                        '<p><a href="#/p5.Color">p5.Color</a> object, color components,\n                                        or CSS color</p>\n',
                      type: 'p5.Color|Number[]|String'
                    }
                  ],
                  return: {
                    description: 'the hue',
                    type: 'Number'
                  },
                  example: [
                    '\n<div>\n<code>\nnoStroke();\ncolorMode(HSB, 255);\nlet c = color(0, 126, 255);\nfill(c);\nrect(15, 20, 35, 60);\nlet value = hue(c); // Sets \'value\' to "0"\nfill(value);\nrect(50, 20, 35, 60);\n</code>\n</div>'
                  ],
                  alt: 'salmon pink rect on left and black on right, both 35x60.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/creating_reading.js',
                  line: 398,
                  description:
                    '<p>Blends two colors to find a third color somewhere between them. The amt\nparameter is the amount to interpolate between the two values where 0.0\nequal to the first color, 0.1 is very near the first color, 0.5 is halfway\nin between, etc. An amount below 0 will be treated as 0. Likewise, amounts\nabove 1 will be capped at 1. This is different from the behavior of <a href="#/p5/lerp">lerp()</a>,\nbut necessary because otherwise numbers outside the range will produce\nstrange and unexpected colors.\n<br><br>\nThe way that colours are interpolated depends on the current color mode.</p>\n',
                  itemtype: 'method',
                  name: 'lerpColor',
                  params: [
                    {
                      name: 'c1',
                      description: '<p>interpolate from this color</p>\n',
                      type: 'p5.Color'
                    },
                    {
                      name: 'c2',
                      description: '<p>interpolate to this color</p>\n',
                      type: 'p5.Color'
                    },
                    {
                      name: 'amt',
                      description: '<p>number between 0 and 1</p>\n',
                      type: 'Number'
                    }
                  ],
                  return: {
                    description: 'interpolated color',
                    type: 'p5.Color'
                  },
                  example: [
                    '\n<div>\n<code>\ncolorMode(RGB);\nstroke(255);\nbackground(51);\nlet from = color(218, 165, 32);\nlet to = color(72, 61, 139);\ncolorMode(RGB); // Try changing to HSB.\nlet interA = lerpColor(from, to, 0.33);\nlet interB = lerpColor(from, to, 0.66);\nfill(from);\nrect(10, 20, 20, 60);\nfill(interA);\nrect(30, 20, 20, 60);\nfill(interB);\nrect(50, 20, 20, 60);\nfill(to);\nrect(70, 20, 20, 60);\n</code>\n</div>'
                  ],
                  alt:
                    '4 rects one tan, brown, brownish purple, purple, with white outlines & 20x60',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/creating_reading.js',
                  line: 489,
                  description:
                    '<p>Extracts the HSL lightness value from a color or pixel array.</p>\n',
                  itemtype: 'method',
                  name: 'lightness',
                  params: [
                    {
                      name: 'color',
                      description:
                        '<p><a href="#/p5.Color">p5.Color</a> object, color components,\n                                        or CSS color</p>\n',
                      type: 'p5.Color|Number[]|String'
                    }
                  ],
                  return: {
                    description: 'the lightness',
                    type: 'Number'
                  },
                  example: [
                    "\n<div>\n<code>\nnoStroke();\ncolorMode(HSL);\nlet c = color(156, 100, 50, 1);\nfill(c);\nrect(15, 20, 35, 60);\nlet value = lightness(c); // Sets 'value' to 50\nfill(value);\nrect(50, 20, 35, 60);\n</code>\n</div>"
                  ],
                  alt:
                    'light pastel green rect on left and dark grey rect on right, both 35x60.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/creating_reading.js',
                  line: 519,
                  description: '<p>Extracts the red value from a color or pixel array.</p>\n',
                  itemtype: 'method',
                  name: 'red',
                  params: [
                    {
                      name: 'color',
                      description:
                        '<p><a href="#/p5.Color">p5.Color</a> object, color components,\n                                        or CSS color</p>\n',
                      type: 'p5.Color|Number[]|String'
                    }
                  ],
                  return: {
                    description: 'the red value',
                    type: 'Number'
                  },
                  example: [
                    "\n<div>\n<code>\nlet c = color(255, 204, 0); // Define color 'c'\nfill(c); // Use color variable 'c' as fill color\nrect(15, 20, 35, 60); // Draw left rectangle\n\nlet redValue = red(c); // Get red in 'c'\nprint(redValue); // Print \"255.0\"\nfill(redValue, 0, 0); // Use 'redValue' in new fill\nrect(50, 20, 35, 60); // Draw right rectangle\n</code>\n</div>\n\n<div class=\"norender\">\n<code>\ncolorMode(RGB, 255); // Sets the range for red, green, and blue to 255\nlet c = color(127, 255, 0);\ncolorMode(RGB, 1); // Sets the range for red, green, and blue to 1\nlet myColor = red(c);\nprint(myColor); // 0.4980392156862745\n</code>\n</div>"
                  ],
                  alt:
                    'yellow rect on left and red rect on right, both with black outlines and 35x60.\ngrey canvas',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/creating_reading.js',
                  line: 559,
                  description:
                    '<p>Extracts the saturation value from a color or pixel array.</p>\n<p>Saturation is scaled differently in HSB and HSL. This function will return\nthe HSB saturation when supplied with an HSB color object (or when supplied\nwith a pixel array while the color mode is HSB), but will default to the\nHSL saturation otherwise.</p>\n',
                  itemtype: 'method',
                  name: 'saturation',
                  params: [
                    {
                      name: 'color',
                      description:
                        '<p><a href="#/p5.Color">p5.Color</a> object, color components,\n                                        or CSS color</p>\n',
                      type: 'p5.Color|Number[]|String'
                    }
                  ],
                  return: {
                    description: 'the saturation value',
                    type: 'Number'
                  },
                  example: [
                    "\n<div>\n<code>\nnoStroke();\ncolorMode(HSB, 255);\nlet c = color(0, 126, 255);\nfill(c);\nrect(15, 20, 35, 60);\nlet value = saturation(c); // Sets 'value' to 126\nfill(value);\nrect(50, 20, 35, 60);\n</code>\n</div>"
                  ],
                  alt: 'deep pink rect on left and grey rect on right, both 35x60.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/p5.Color.js',
                  line: 50,
                  description:
                    '<p>This function returns the color formatted as a string. This can be useful\nfor debugging, or for using p5.js with other libraries.</p>\n',
                  itemtype: 'method',
                  name: 'toString',
                  params: [
                    {
                      name: 'format',
                      description:
                        '<p>How the color string will be formatted.\nLeaving this empty formats the string as rgba(r, g, b, a).\n&#39;#rgb&#39; &#39;#rgba&#39; &#39;#rrggbb&#39; and &#39;#rrggbbaa&#39; format as hexadecimal color codes.\n&#39;rgb&#39; &#39;hsb&#39; and &#39;hsl&#39; return the color formatted in the specified color mode.\n&#39;rgba&#39; &#39;hsba&#39; and &#39;hsla&#39; are the same as above but with alpha channels.\n&#39;rgb%&#39; &#39;hsb%&#39; &#39;hsl%&#39; &#39;rgba%&#39; &#39;hsba%&#39; and &#39;hsla%&#39; format as percentages.</p>\n',
                      type: 'String',
                      optional: true
                    }
                  ],
                  return: {
                    description: 'the formatted string',
                    type: 'String'
                  },
                  example: [
                    "\n<div>\n<code>\nlet myColor;\nfunction setup() {\n  createCanvas(200, 200);\n  stroke(255);\n  myColor = color(100, 100, 250);\n  fill(myColor);\n}\n\nfunction draw() {\n  rotate(HALF_PI);\n  text(myColor.toString(), 0, -5);\n  text(myColor.toString('#rrggbb'), 0, -30);\n  text(myColor.toString('rgba%'), 0, -55);\n}\n</code>\n</div>"
                  ],
                  alt: 'canvas with text representation of color',
                  class: 'p5.Color',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/p5.Color.js',
                  line: 251,
                  description:
                    '<p>The setRed function sets the red component of a color.\nThe range depends on your color mode, in the default RGB mode it&#39;s between 0 and 255.</p>\n',
                  itemtype: 'method',
                  name: 'setRed',
                  params: [
                    {
                      name: 'red',
                      description: '<p>the new red value</p>\n',
                      type: 'Number'
                    }
                  ],
                  example: [
                    '\n<div>\n<code>\nlet backgroundColor;\n\nfunction setup() {\n  backgroundColor = color(100, 50, 150);\n}\n\nfunction draw() {\n  backgroundColor.setRed(128 + 128 * sin(millis() / 1000));\n  background(backgroundColor);\n}\n</code>\n</div>'
                  ],
                  alt: 'canvas with gradually changing background color',
                  class: 'p5.Color',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/p5.Color.js',
                  line: 280,
                  description:
                    '<p>The setGreen function sets the green component of a color.\nThe range depends on your color mode, in the default RGB mode it&#39;s between 0 and 255.</p>\n',
                  itemtype: 'method',
                  name: 'setGreen',
                  params: [
                    {
                      name: 'green',
                      description: '<p>the new green value</p>\n',
                      type: 'Number'
                    }
                  ],
                  example: [
                    '\n<div>\n<code>\nlet backgroundColor;\n\nfunction setup() {\n  backgroundColor = color(100, 50, 150);\n}\n\nfunction draw() {\n  backgroundColor.setGreen(128 + 128 * sin(millis() / 1000));\n  background(backgroundColor);\n}\n</code>\n</div>'
                  ],
                  alt: 'canvas with gradually changing background color',
                  class: 'p5.Color',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/p5.Color.js',
                  line: 309,
                  description:
                    '<p>The setBlue function sets the blue component of a color.\nThe range depends on your color mode, in the default RGB mode it&#39;s between 0 and 255.</p>\n',
                  itemtype: 'method',
                  name: 'setBlue',
                  params: [
                    {
                      name: 'blue',
                      description: '<p>the new blue value</p>\n',
                      type: 'Number'
                    }
                  ],
                  example: [
                    '\n<div>\n<code>\nlet backgroundColor;\n\nfunction setup() {\n  backgroundColor = color(100, 50, 150);\n}\n\nfunction draw() {\n  backgroundColor.setBlue(128 + 128 * sin(millis() / 1000));\n  background(backgroundColor);\n}\n</code>\n</div>'
                  ],
                  alt: 'canvas with gradually changing background color',
                  class: 'p5.Color',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/p5.Color.js',
                  line: 338,
                  description:
                    '<p>The setAlpha function sets the transparency (alpha) value of a color.\nThe range depends on your color mode, in the default RGB mode it&#39;s between 0 and 255.</p>\n',
                  itemtype: 'method',
                  name: 'setAlpha',
                  params: [
                    {
                      name: 'alpha',
                      description: '<p>the new alpha value</p>\n',
                      type: 'Number'
                    }
                  ],
                  example: [
                    '\n<div>\n<code>\nlet squareColor;\n\nfunction setup() {\n  ellipseMode(CORNERS);\n  strokeWeight(4);\n  squareColor = color(100, 50, 150);\n}\n\nfunction draw() {\n  background(255);\n\n  noFill();\n  stroke(0);\n  ellipse(10, 10, width - 10, height - 10);\n\n  squareColor.setAlpha(128 + 128 * sin(millis() / 1000));\n  fill(squareColor);\n  noStroke();\n  rect(13, 13, width - 26, height - 26);\n}\n</code>\n</div>'
                  ],
                  alt: 'circle behind a square with gradually changing opacity',
                  class: 'p5.Color',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/p5.Color.js',
                  line: 421,
                  description:
                    '<p>Hue is the same in HSB and HSL, but the maximum value may be different.\nThis function will return the HSB-normalized saturation when supplied with\nan HSB color object, but will default to the HSL-normalized saturation\notherwise.</p>\n',
                  class: 'p5.Color',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/p5.Color.js',
                  line: 452,
                  description:
                    '<p>Saturation is scaled differently in HSB and HSL. This function will return\nthe HSB saturation when supplied with an HSB color object, but will default\nto the HSL saturation otherwise.</p>\n',
                  class: 'p5.Color',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/p5.Color.js',
                  line: 471,
                  description: '<p>CSS named colors.</p>\n',
                  class: 'p5.Color',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/p5.Color.js',
                  line: 625,
                  description:
                    '<p>These regular expressions are used to build up the patterns for matching\nviable CSS color strings: fragmenting the regexes in this way increases the\nlegibility and comprehensibility of the code.</p>\n<p>Note that RGB values of .9 are not parsed by IE, but are supported here for\ncolor string consistency.</p>\n',
                  class: 'p5.Color',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/p5.Color.js',
                  line: 638,
                  description:
                    '<p>Full color string patterns. The capture groups are necessary.</p>\n',
                  class: 'p5.Color',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/p5.Color.js',
                  line: 987,
                  description:
                    '<p>For HSB and HSL, interpret the gray level as a brightness/lightness\nvalue (they are equivalent when chroma is zero). For RGB, normalize the\ngray level according to the blue maximum.</p>\n',
                  class: 'p5.Color',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/setting.js',
                  line: 13,
                  description:
                    '<p>The <a href="#/p5/background">background()</a> function sets the color used for the background of the\np5.js canvas. The default background is transparent. This function is\ntypically used within <a href="#/p5/draw">draw()</a> to clear the display window at the beginning\nof each frame, but it can be used inside <a href="#/p5/setup">setup()</a> to set the background on\nthe first frame of animation or if the background need only be set once.\n<br><br>\nThe color is either specified in terms of the RGB, HSB, or HSL color\ndepending on the current <a href="#/p5/colorMode">colorMode</a>. (The default color space is RGB, with\neach value in the range from 0 to 255). The alpha range by default is also 0 to 255.\n<br><br>\nIf a single string argument is provided, RGB, RGBA and Hex CSS color strings\nand all named color strings are supported. In this case, an alpha number\nvalue as a second argument is not supported, the RGBA form should be used.\n<br><br>\nA <a href="#/p5.Color">p5.Color</a> object can also be provided to set the background color.\n<br><br>\nA <a href="#/p5.Image">p5.Image</a> can also be provided to set the background image.</p>\n',
                  itemtype: 'method',
                  name: 'background',
                  chainable: 1,
                  example: [
                    "\n<div>\n<code>\n// Grayscale integer value\nbackground(51);\n</code>\n</div>\n\n<div>\n<code>\n// R, G & B integer values\nbackground(255, 204, 0);\n</code>\n</div>\n\n<div>\n<code>\n// H, S & B integer values\ncolorMode(HSB);\nbackground(255, 204, 100);\n</code>\n</div>\n\n<div>\n<code>\n// Named SVG/CSS color string\nbackground('red');\n</code>\n</div>\n\n<div>\n<code>\n// three-digit hexadecimal RGB notation\nbackground('#fae');\n</code>\n</div>\n\n<div>\n<code>\n// six-digit hexadecimal RGB notation\nbackground('#222222');\n</code>\n</div>\n\n<div>\n<code>\n// integer RGB notation\nbackground('rgb(0,255,0)');\n</code>\n</div>\n\n<div>\n<code>\n// integer RGBA notation\nbackground('rgba(0,255,0, 0.25)');\n</code>\n</div>\n\n<div>\n<code>\n// percentage RGB notation\nbackground('rgb(100%,0%,10%)');\n</code>\n</div>\n\n<div>\n<code>\n// percentage RGBA notation\nbackground('rgba(100%,0%,100%,0.5)');\n</code>\n</div>\n\n<div>\n<code>\n// p5 Color object\nbackground(color(0, 0, 255));\n</code>\n</div>"
                  ],
                  alt:
                    'canvas with darkest charcoal grey background.\ncanvas with yellow background.\ncanvas with royal blue background.\ncanvas with red background.\ncanvas with pink background.\ncanvas with black background.\ncanvas with bright green background.\ncanvas with soft green background.\ncanvas with red background.\ncanvas with light purple background.\ncanvas with blue background.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Setting',
                  overloads: [
                    {
                      line: 13,
                      params: [
                        {
                          name: 'color',
                          description:
                            '<p>any value created by the <a href="#/p5/color">color()</a> function</p>\n',
                          type: 'p5.Color'
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 129,
                      params: [
                        {
                          name: 'colorstring',
                          description:
                            '<p>color string, possible formats include: integer\n                        rgb() or rgba(), percentage rgb() or rgba(),\n                        3-digit hex, 6-digit hex</p>\n',
                          type: 'String'
                        },
                        {
                          name: 'a',
                          description:
                            '<p>opacity of the background relative to current\n                            color range (default is 0-255)</p>\n',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 139,
                      params: [
                        {
                          name: 'gray',
                          description: '<p>specifies a value between white and black</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'a',
                          description: '',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 146,
                      params: [
                        {
                          name: 'v1',
                          description:
                            '<p>red or hue value (depending on the current color\n                       mode)</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'v2',
                          description:
                            '<p>green or saturation value (depending on the current\n                       color mode)</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'v3',
                          description:
                            '<p>blue or brightness value (depending on the current\n                       color mode)</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'a',
                          description: '',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 158,
                      params: [
                        {
                          name: 'values',
                          description:
                            '<p>an array containing the red, green, blue\n                                and alpha components of the color</p>\n',
                          type: 'Number[]'
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 165,
                      params: [
                        {
                          name: 'image',
                          description:
                            '<p>image created with <a href="#/p5/loadImage">loadImage()</a> or <a href="#/p5/createImage">createImage()</a>,\n                            to set as background\n                            (must be same size as the sketch window)</p>\n',
                          type: 'p5.Image'
                        },
                        {
                          name: 'a',
                          description: '',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/color/setting.js',
                  line: 179,
                  description:
                    '<p>Clears the pixels within a buffer. This function only clears the canvas.\nIt will not clear objects created by createX() methods such as\n<a href="#/p5/createVideo">createVideo()</a> or <a href="#/p5/createDiv">createDiv()</a>.\nUnlike the main graphics context, pixels in additional graphics areas created\nwith <a href="#/p5/createGraphics">createGraphics()</a> can be entirely\nor partially transparent. This function clears everything to make all of\nthe pixels 100% transparent.</p>\n',
                  itemtype: 'method',
                  name: 'clear',
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\n// Clear the screen on mouse press.\nfunction setup() {\n  createCanvas(100, 100);\n}\n\nfunction draw() {\n  ellipse(mouseX, mouseY, 20, 20);\n}\n\nfunction mousePressed() {\n  clear();\n}\n</code>\n</div>'
                  ],
                  alt:
                    '20x20 white ellipses are continually drawn at mouse x and y coordinates.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Setting'
                },
                {
                  file: 'src/color/setting.js',
                  line: 218,
                  description:
                    '<p><a href="#/p5/colorMode">colorMode()</a> changes the way p5.js interprets color data. By default, the\nparameters for <a href="#/p5/fill">fill()</a>, <a href="#/p5/stroke">stroke()</a>, <a href="#/p5/background">background()</a>, and <a href="#/p5/color">color()</a> are defined by\nvalues between 0 and 255 using the RGB color model. This is equivalent to\nsetting colorMode(RGB, 255). Setting colorMode(HSB) lets you use the HSB\nsystem instead. By default, this is colorMode(HSB, 360, 100, 100, 1). You\ncan also use HSL.\n<br><br>\nNote: existing color objects remember the mode that they were created in,\nso you can change modes as you like without affecting their appearance.</p>\n',
                  itemtype: 'method',
                  name: 'colorMode',
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\nnoStroke();\ncolorMode(RGB, 100);\nfor (let i = 0; i < 100; i++) {\n  for (let j = 0; j < 100; j++) {\n    stroke(i, j, 0);\n    point(i, j);\n  }\n}\n</code>\n</div>\n\n<div>\n<code>\nnoStroke();\ncolorMode(HSB, 100);\nfor (let i = 0; i < 100; i++) {\n  for (let j = 0; j < 100; j++) {\n    stroke(i, j, 100);\n    point(i, j);\n  }\n}\n</code>\n</div>\n\n<div>\n<code>\ncolorMode(RGB, 255);\nlet c = color(127, 255, 0);\n\ncolorMode(RGB, 1);\nlet myColor = c._getRed();\ntext(myColor, 10, 10, 80, 80);\n</code>\n</div>\n\n<div>\n<code>\nnoFill();\ncolorMode(RGB, 255, 255, 255, 1);\nbackground(255);\n\nstrokeWeight(4);\nstroke(255, 0, 10, 0.3);\nellipse(40, 40, 50, 50);\nellipse(50, 50, 40, 40);\n</code>\n</div>'
                  ],
                  alt:
                    'Green to red gradient from bottom L to top R. shading originates from top left.\nRainbow gradient from left to right. Brightness increasing to white at top.\nunknown image.\n50x50 ellipse at middle L & 40x40 ellipse at center. Translucent pink outlines.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Setting',
                  overloads: [
                    {
                      line: 218,
                      params: [
                        {
                          name: 'mode',
                          description:
                            '<p>either RGB, HSB or HSL, corresponding to\n                         Red/Green/Blue and Hue/Saturation/Brightness\n                         (or Lightness)</p>\n',
                          type: 'Constant'
                        },
                        {
                          name: 'max',
                          description: '<p>range for all values</p>\n',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 295,
                      params: [
                        {
                          name: 'mode',
                          description: '',
                          type: 'Constant'
                        },
                        {
                          name: 'max1',
                          description:
                            '<p>range for the red or hue depending on the\n                             current color mode</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'max2',
                          description:
                            '<p>range for the green or saturation depending\n                             on the current color mode</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'max3',
                          description:
                            '<p>range for the blue or brightness/lightness\n                             depending on the current color mode</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'maxA',
                          description: '<p>range for the alpha</p>\n',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/color/setting.js',
                  line: 339,
                  description:
                    '<p>Sets the color used to fill shapes. For example, if you run\nfill(204, 102, 0), all shapes drawn after the fill command will be filled with the color orange. This\ncolor is either specified in terms of the RGB or HSB color depending on\nthe current <a href="#/p5/colorMode">colorMode()</a>. (The default color space is RGB, with each value\nin the range from 0 to 255). The alpha range by default is also 0 to 255.\n<br><br>\nIf a single string argument is provided, RGB, RGBA and Hex CSS color strings\nand all named color strings are supported. In this case, an alpha number\nvalue as a second argument is not supported, the RGBA form should be used.\n<br><br>\nA p5 <a href="#/p5.Color">Color</a> object can also be provided to set the fill color.</p>\n',
                  itemtype: 'method',
                  name: 'fill',
                  chainable: 1,
                  example: [
                    "\n<div>\n<code>\n// Grayscale integer value\nfill(51);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// R, G & B integer values\nfill(255, 204, 0);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// H, S & B integer values\ncolorMode(HSB);\nfill(255, 204, 100);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// Named SVG/CSS color string\nfill('red');\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// three-digit hexadecimal RGB notation\nfill('#fae');\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// six-digit hexadecimal RGB notation\nfill('#222222');\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// integer RGB notation\nfill('rgb(0,255,0)');\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// integer RGBA notation\nfill('rgba(0,255,0, 0.25)');\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// percentage RGB notation\nfill('rgb(100%,0%,10%)');\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// percentage RGBA notation\nfill('rgba(100%,0%,100%,0.5)');\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// p5 Color object\nfill(color(0, 0, 255));\nrect(20, 20, 60, 60);\n</code>\n</div>"
                  ],
                  alt:
                    '60x60 dark charcoal grey rect with black outline in center of canvas.\n60x60 yellow rect with black outline in center of canvas.\n60x60 royal blue rect with black outline in center of canvas.\n60x60 red rect with black outline in center of canvas.\n60x60 pink rect with black outline in center of canvas.\n60x60 black rect with black outline in center of canvas.\n60x60 light green rect with black outline in center of canvas.\n60x60 soft green rect with black outline in center of canvas.\n60x60 red rect with black outline in center of canvas.\n60x60 dark fuchsia rect with black outline in center of canvas.\n60x60 blue rect with black outline in center of canvas.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Setting',
                  overloads: [
                    {
                      line: 339,
                      params: [
                        {
                          name: 'v1',
                          description:
                            '<p>red or hue value relative to\n                                the current color range</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'v2',
                          description:
                            '<p>green or saturation value\n                                relative to the current color range</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'v3',
                          description:
                            '<p>blue or brightness value\n                                relative to the current color range</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'alpha',
                          description: '',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 464,
                      params: [
                        {
                          name: 'value',
                          description: '<p>a color string</p>\n',
                          type: 'String'
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 470,
                      params: [
                        {
                          name: 'gray',
                          description: '<p>a gray value</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'alpha',
                          description: '',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 477,
                      params: [
                        {
                          name: 'values',
                          description:
                            '<p>an array containing the red,green,blue &amp;\n                                and alpha components of the color</p>\n',
                          type: 'Number[]'
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 484,
                      params: [
                        {
                          name: 'color',
                          description: '<p>the fill color</p>\n',
                          type: 'p5.Color'
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/color/setting.js',
                  line: 496,
                  description:
                    '<p>Disables filling geometry. If both <a href="#/p5/noStroke">noStroke()</a> and <a href="#/p5/noFill">noFill()</a> are called,\nnothing will be drawn to the screen.</p>\n',
                  itemtype: 'method',
                  name: 'noFill',
                  chainable: 1,
                  example: [
                    "\n<div>\n<code>\nrect(15, 10, 55, 55);\nnoFill();\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div modernizr='webgl'>\n<code>\nfunction setup() {\n  createCanvas(100, 100, WEBGL);\n}\n\nfunction draw() {\n  background(0);\n  noFill();\n  stroke(100, 100, 240);\n  rotateX(frameCount * 0.01);\n  rotateY(frameCount * 0.01);\n  box(45, 45, 45);\n}\n</code>\n</div>"
                  ],
                  alt:
                    'white rect top middle and noFill rect center. Both 60x60 with black outlines.\nblack canvas with purple cube wireframe spinning',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Setting'
                },
                {
                  file: 'src/color/setting.js',
                  line: 537,
                  description:
                    '<p>Disables drawing the stroke (outline). If both <a href="#/p5/noStroke">noStroke()</a> and <a href="#/p5/noFill">noFill()</a>\nare called, nothing will be drawn to the screen.</p>\n',
                  itemtype: 'method',
                  name: 'noStroke',
                  chainable: 1,
                  example: [
                    "\n<div>\n<code>\nnoStroke();\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div modernizr='webgl'>\n<code>\nfunction setup() {\n  createCanvas(100, 100, WEBGL);\n}\n\nfunction draw() {\n  background(0);\n  noStroke();\n  fill(240, 150, 150);\n  rotateX(frameCount * 0.01);\n  rotateY(frameCount * 0.01);\n  box(45, 45, 45);\n}\n</code>\n</div>"
                  ],
                  alt:
                    '60x60 white rect at center. no outline.\nblack canvas with pink cube spinning',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Setting'
                },
                {
                  file: 'src/color/setting.js',
                  line: 577,
                  description:
                    '<p>Sets the color used to draw lines and borders around shapes. This color\nis either specified in terms of the RGB or HSB color depending on the\ncurrent <a href="#/p5/colorMode">colorMode()</a> (the default color space is RGB, with each value in\nthe range from 0 to 255). The alpha range by default is also 0 to 255.\n<br><br>\nIf a single string argument is provided, RGB, RGBA and Hex CSS color\nstrings and all named color strings are supported. In this case, an alpha\nnumber value as a second argument is not supported, the RGBA form should be\nused.\n<br><br>\nA p5 <a href="#/p5.Color">Color</a> object can also be provided to set the stroke color.</p>\n',
                  itemtype: 'method',
                  name: 'stroke',
                  chainable: 1,
                  example: [
                    "\n<div>\n<code>\n// Grayscale integer value\nstrokeWeight(4);\nstroke(51);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// R, G & B integer values\nstroke(255, 204, 0);\nstrokeWeight(4);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// H, S & B integer values\ncolorMode(HSB);\nstrokeWeight(4);\nstroke(255, 204, 100);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// Named SVG/CSS color string\nstroke('red');\nstrokeWeight(4);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// three-digit hexadecimal RGB notation\nstroke('#fae');\nstrokeWeight(4);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// six-digit hexadecimal RGB notation\nstroke('#222222');\nstrokeWeight(4);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// integer RGB notation\nstroke('rgb(0,255,0)');\nstrokeWeight(4);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// integer RGBA notation\nstroke('rgba(0,255,0,0.25)');\nstrokeWeight(4);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// percentage RGB notation\nstroke('rgb(100%,0%,10%)');\nstrokeWeight(4);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// percentage RGBA notation\nstroke('rgba(100%,0%,100%,0.5)');\nstrokeWeight(4);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// p5 Color object\nstroke(color(0, 0, 255));\nstrokeWeight(4);\nrect(20, 20, 60, 60);\n</code>\n</div>"
                  ],
                  alt:
                    '60x60 white rect at center. Dark charcoal grey outline.\n60x60 white rect at center. Yellow outline.\n60x60 white rect at center. Royal blue outline.\n60x60 white rect at center. Red outline.\n60x60 white rect at center. Pink outline.\n60x60 white rect at center. Black outline.\n60x60 white rect at center. Bright green outline.\n60x60 white rect at center. Soft green outline.\n60x60 white rect at center. Red outline.\n60x60 white rect at center. Dark fuchsia outline.\n60x60 white rect at center. Blue outline.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Setting',
                  overloads: [
                    {
                      line: 577,
                      params: [
                        {
                          name: 'v1',
                          description:
                            '<p>red or hue value relative to\n                                the current color range</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'v2',
                          description:
                            '<p>green or saturation value\n                                relative to the current color range</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'v3',
                          description:
                            '<p>blue or brightness value\n                                relative to the current color range</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'alpha',
                          description: '',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 716,
                      params: [
                        {
                          name: 'value',
                          description: '<p>a color string</p>\n',
                          type: 'String'
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 722,
                      params: [
                        {
                          name: 'gray',
                          description: '<p>a gray value</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'alpha',
                          description: '',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 729,
                      params: [
                        {
                          name: 'values',
                          description:
                            '<p>an array containing the red,green,blue &amp;\n                                and alpha components of the color</p>\n',
                          type: 'Number[]'
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 736,
                      params: [
                        {
                          name: 'color',
                          description: '<p>the stroke color</p>\n',
                          type: 'p5.Color'
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/color/setting.js',
                  line: 749,
                  description:
                    '<p>All drawing that follows <a href="#/p5/erase">erase()</a> will subtract from the canvas.\nErased areas will reveal the web page underneath the canvas.\nErasing can be canceled with <a href="#/p5/noErase">noErase()</a>.\n<br><br>\nDrawing done with <a href="#/p5/image">image()</a>\nand <a href="#/p5/background">background()</a> will not be affected by <a href="#/p5/erase">erase()</a>\n<br><br></p>\n',
                  itemtype: 'method',
                  name: 'erase',
                  params: [
                    {
                      name: 'strengthFill',
                      description:
                        '<p>A number (0-255) for the strength of erasing for a shape&#39;s fill.\n                                       This will default to 255 when no argument is given, which\n                                       is full strength.</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'strengthStroke',
                      description:
                        '<p>A number (0-255) for the strength of erasing for a shape&#39;s stroke.\n                                       This will default to 255 when no argument is given, which\n                                       is full strength.</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n<div>\n<code>\nbackground(100, 100, 250);\nfill(250, 100, 100);\nrect(20, 20, 60, 60);\nerase();\nellipse(25, 30, 30);\nnoErase();\n</code>\n</div>\n\n<div>\n<code>\nbackground(150, 250, 150);\nfill(100, 100, 250);\nrect(20, 20, 60, 60);\nstrokeWeight(5);\nerase(150, 255);\ntriangle(50, 10, 70, 50, 90, 10);\nnoErase();\n</code>\n</div>\n\n<div>\n<code>\nfunction setup() {\n  smooth();\n  createCanvas(100, 100, WEBGL);\n  // Make a &lt;p&gt; element and put it behind the canvas\n  let p = createP('I am a dom element');\n  p.center();\n  p.style('font-size', '20px');\n  p.style('text-align', 'center');\n  p.style('z-index', '-9999');\n}\n\nfunction draw() {\n  background(250, 250, 150);\n  fill(15, 195, 185);\n  noStroke();\n  sphere(30);\n  erase();\n  rotateY(frameCount * 0.02);\n  translate(0, 0, 40);\n  torus(15, 5);\n  noErase();\n}\n</code>\n</div>"
                  ],
                  alt:
                    '60x60 centered pink rect, purple background. Elliptical area in top-left of rect is erased white.\n60x60 centered purple rect, mint green background. Triangle in top-right is partially erased with fully erased outline.\n60x60 centered teal sphere, yellow background. Torus rotating around sphere erases to reveal black text underneath.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Setting'
                },
                {
                  file: 'src/color/setting.js',
                  line: 829,
                  description:
                    '<p>Ends erasing that was started with <a href="#/p5/erase">erase()</a>.\nThe <a href="#/p5/fill">fill()</a>, <a href="#/p5/stroke">stroke()</a>, and\n<a href="#/p5/blendMode">blendMode()</a> settings will return to what they were\nprior to calling <a href="#/p5/erase">erase()</a>.</p>\n',
                  itemtype: 'method',
                  name: 'noErase',
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\nbackground(235, 145, 15);\nnoStroke();\nfill(30, 45, 220);\nrect(30, 10, 10, 80);\nerase();\nellipse(50, 50, 60);\nnoErase();\nrect(70, 10, 10, 80);\n</code>\n</div>'
                  ],
                  alt:
                    'Orange background, with two tall blue rectangles. A centered ellipse erased the first blue rect but not the second.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Setting'
                },
                {
                  file: 'src/core/shape/2d_primitives.js',
                  line: 14,
                  description:
                    '<p>This function does 3 things:</p>\n<ol>\n<li><p>Bounds the desired start/stop angles for an arc (in radians) so that:</p>\n<pre><code>0 &lt;= start &lt; TWO_PI ;    start &lt;= stop &lt; start + TWO_PI</code></pre><p>This means that the arc rendering functions don&#39;t have to be concerned\nwith what happens if stop is smaller than start, or if the arc &#39;goes\nround more than once&#39;, etc.: they can just start at start and increase\nuntil stop and the correct arc will be drawn.</p>\n</li>\n<li><p>Optionally adjusts the angles within each quadrant to counter the naive\nscaling of the underlying ellipse up from the unit circle.  Without\nthis, the angles become arbitrary when width != height: 45 degrees\nmight be drawn at 5 degrees on a &#39;wide&#39; ellipse, or at 85 degrees on\na &#39;tall&#39; ellipse.</p>\n</li>\n<li><p>Flags up when start and stop correspond to the same place on the\nunderlying ellipse.  This is useful if you want to do something special\nthere (like rendering a whole ellipse instead).</p>\n</li>\n</ol>\n',
                  class: 'p5',
                  module: 'Shape',
                  submodule: '2D Primitives'
                },
                {
                  file: 'src/core/shape/2d_primitives.js',
                  line: 100,
                  description:
                    '<p>Draw an arc to the screen. If called with only x, y, w, h, start, and\nstop, the arc will be drawn and filled as an open pie segment. If a mode parameter is provided, the arc\nwill be filled like an open semi-circle (OPEN) , a closed semi-circle (CHORD), or as a closed pie segment (PIE). The\norigin may be changed with the <a href="#/p5/ellipseMode">ellipseMode()</a> function.<br><br>\nThe arc is always drawn clockwise from wherever start falls to wherever stop falls on the ellipse.\nAdding or subtracting TWO_PI to either angle does not change where they fall.\nIf both start and stop fall at the same place, a full ellipse will be drawn. Be aware that the the\ny-axis increases in the downward direction, therefore angles are measured clockwise from the positive\nx-direction (&quot;3 o&#39;clock&quot;).</p>\n',
                  itemtype: 'method',
                  name: 'arc',
                  params: [
                    {
                      name: 'x',
                      description: '<p>x-coordinate of the arc&#39;s ellipse</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'y',
                      description: '<p>y-coordinate of the arc&#39;s ellipse</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'w',
                      description: '<p>width of the arc&#39;s ellipse by default</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'h',
                      description: '<p>height of the arc&#39;s ellipse by default</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'start',
                      description: '<p>angle to start the arc, specified in radians</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'stop',
                      description: '<p>angle to stop the arc, specified in radians</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'mode',
                      description:
                        '<p>optional parameter to determine the way of drawing\n                        the arc. either CHORD, PIE or OPEN</p>\n',
                      type: 'Constant',
                      optional: true
                    },
                    {
                      name: 'detail',
                      description:
                        '<p>optional parameter for WebGL mode only. This is to\n                        specify the number of vertices that makes up the\n                        perimeter of the arc. Default value is 25.</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\narc(50, 55, 50, 50, 0, HALF_PI);\nnoFill();\narc(50, 55, 60, 60, HALF_PI, PI);\narc(50, 55, 70, 70, PI, PI + QUARTER_PI);\narc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);\n</code>\n</div>\n\n<div>\n<code>\narc(50, 50, 80, 80, 0, PI + QUARTER_PI);\n</code>\n</div>\n\n<div>\n<code>\narc(50, 50, 80, 80, 0, PI + QUARTER_PI, OPEN);\n</code>\n</div>\n\n<div>\n<code>\narc(50, 50, 80, 80, 0, PI + QUARTER_PI, CHORD);\n</code>\n</div>\n\n<div>\n<code>\narc(50, 50, 80, 80, 0, PI + QUARTER_PI, PIE);\n</code>\n</div>'
                  ],
                  alt:
                    'shattered outline of an ellipse with a quarter of a white circle bottom-right.\nwhite ellipse with top right quarter missing.\nwhite ellipse with black outline with top right missing.\nwhite ellipse with top right missing with black outline around shape.\nwhite ellipse with top right quarter missing with black outline around the shape.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: '2D Primitives'
                },
                {
                  file: 'src/core/shape/2d_primitives.js',
                  line: 211,
                  description:
                    '<p>Draws an ellipse (oval) to the screen. An ellipse with equal width and\nheight is a circle. By default, the first two parameters set the location,\nand the third and fourth parameters set the shape&#39;s width and height. If\nno height is specified, the value of width is used for both the width and\nheight. If a negative height or width is specified, the absolute value is taken.\nThe origin may be changed with the <a href="#/p5/ellipseMode">ellipseMode()</a> function.</p>\n',
                  itemtype: 'method',
                  name: 'ellipse',
                  chainable: 1,
                  example: ['\n<div>\n<code>\nellipse(56, 46, 55, 55);\n</code>\n</div>'],
                  alt:
                    'white ellipse with black outline in middle-right of canvas that is 55x55.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: '2D Primitives',
                  overloads: [
                    {
                      line: 211,
                      params: [
                        {
                          name: 'x',
                          description: '<p>x-coordinate of the ellipse.</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y',
                          description: '<p>y-coordinate of the ellipse.</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'w',
                          description: '<p>width of the ellipse.</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'h',
                          description: '<p>height of the ellipse.</p>\n',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 236,
                      params: [
                        {
                          name: 'x',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'w',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'h',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'detail',
                          description:
                            '<p>number of radial sectors to draw (for WebGL mode)</p>\n',
                          type: 'Integer'
                        }
                      ]
                    }
                  ]
                },
                {
                  file: 'src/core/shape/2d_primitives.js',
                  line: 271,
                  description:
                    '<p>Draws a circle to the screen. A circle is a simple closed shape.\nIt is the set of all points in a plane that are at a given distance from a given point, the centre.\nThis function is a special case of the ellipse() function, where the width and height of the ellipse are the same.\nHeight and width of the ellipse correspond to the diameter of the circle.\nBy default, the first two parameters set the location of the centre of the circle, the third sets the diameter of the circle.</p>\n',
                  itemtype: 'method',
                  name: 'circle',
                  params: [
                    {
                      name: 'x',
                      description: '<p>x-coordinate of the centre of the circle.</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'y',
                      description: '<p>y-coordinate of the centre of the circle.</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'd',
                      description: '<p>diameter of the circle.</p>\n',
                      type: 'Number'
                    }
                  ],
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\n// Draw a circle at location (30, 30) with a diameter of 20.\ncircle(30, 30, 20);\n</code>\n</div>'
                  ],
                  alt: 'white circle with black outline in mid of canvas that is 55x55.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: '2D Primitives'
                },
                {
                  file: 'src/core/shape/2d_primitives.js',
                  line: 301,
                  description:
                    '<p>Draws a line (a direct path between two points) to the screen. The version\nof <a href="#/p5/line">line()</a> with four parameters draws the line in 2D. To color a line, use\nthe <a href="#/p5/stroke">stroke()</a> function. A line cannot be filled, therefore the <a href="#/p5/fill">fill()</a>\nfunction will not affect the color of a line. 2D lines are drawn with a\nwidth of one pixel by default, but this can be changed with the\n<a href="#/p5/strokeWeight">strokeWeight()</a> function.</p>\n',
                  itemtype: 'method',
                  name: 'line',
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\nline(30, 20, 85, 75);\n</code>\n</div>\n\n<div>\n<code>\nline(30, 20, 85, 20);\nstroke(126);\nline(85, 20, 85, 75);\nstroke(255);\nline(85, 75, 30, 75);\n</code>\n</div>'
                  ],
                  alt:
                    'line 78 pixels long running from mid-top to bottom-right of canvas.\n3 lines of various stroke sizes. Form top, bottom and right sides of a square.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: '2D Primitives',
                  overloads: [
                    {
                      line: 301,
                      params: [
                        {
                          name: 'x1',
                          description: '<p>the x-coordinate of the first point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y1',
                          description: '<p>the y-coordinate of the first point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x2',
                          description: '<p>the x-coordinate of the second point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y2',
                          description: '<p>the y-coordinate of the second point</p>\n',
                          type: 'Number'
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 337,
                      params: [
                        {
                          name: 'x1',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y1',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z1',
                          description: '<p>the z-coordinate of the first point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x2',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y2',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z2',
                          description: '<p>the z-coordinate of the second point</p>\n',
                          type: 'Number'
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/core/shape/2d_primitives.js',
                  line: 357,
                  description:
                    '<p>Draws a point, a coordinate in space at the dimension of one pixel.\nThe first parameter is the horizontal value for the point, the second\nvalue is the vertical value for the point. The color of the point is\nchanged with the <a href="#/p5/stroke">stroke()</a> function. The size of the point\nis changed with the <a href="#/p5/strokeWeight">strokeWeight()</a> function.</p>\n',
                  itemtype: 'method',
                  name: 'point',
                  chainable: 1,
                  example: [
                    "\n<div>\n<code>\npoint(30, 20);\npoint(85, 20);\npoint(85, 75);\npoint(30, 75);\n</code>\n</div>\n\n<div>\n<code>\nstroke('purple'); // Change the color\nstrokeWeight(10); // Make the points 10 pixels in size\npoint(30, 20);\npoint(85, 20);\npoint(85, 75);\npoint(30, 75);\n</code>\n</div>\n\n<div>\n<code>\nlet a = createVector(10, 10);\npoint(a);\nlet b = createVector(10, 20);\npoint(b);\npoint(createVector(20, 10));\npoint(createVector(20, 20));\n</code>\n</div>"
                  ],
                  alt:
                    '4 points centered in the middle-right of the canvas.\n4 large purple points centered in the middle-right of the canvas.\nVertices of a square of length 10 pixels towards the top-left of the canvas.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: '2D Primitives',
                  overloads: [
                    {
                      line: 357,
                      params: [
                        {
                          name: 'x',
                          description: '<p>the x-coordinate</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y',
                          description: '<p>the y-coordinate</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'z',
                          description: '<p>the z-coordinate (for WebGL mode)</p>\n',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 407,
                      params: [
                        {
                          name: 'coordinate_vector',
                          description: '<p>the coordinate vector</p>\n',
                          type: 'p5.Vector'
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/core/shape/2d_primitives.js',
                  line: 432,
                  description:
                    '<p>Draw a quad. A quad is a quadrilateral, a four sided polygon. It is\nsimilar to a rectangle, but the angles between its edges are not\nconstrained to ninety degrees. The first pair of parameters (x1,y1)\nsets the first vertex and the subsequent pairs should proceed\nclockwise or counter-clockwise around the defined shape.\nz-arguments only work when quad() is used in WEBGL mode.</p>\n',
                  itemtype: 'method',
                  name: 'quad',
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\nquad(38, 31, 86, 20, 69, 63, 30, 76);\n</code>\n</div>'
                  ],
                  alt:
                    'irregular white quadrilateral shape with black outline mid-right of canvas.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: '2D Primitives',
                  overloads: [
                    {
                      line: 432,
                      params: [
                        {
                          name: 'x1',
                          description: '<p>the x-coordinate of the first point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y1',
                          description: '<p>the y-coordinate of the first point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x2',
                          description: '<p>the x-coordinate of the second point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y2',
                          description: '<p>the y-coordinate of the second point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x3',
                          description: '<p>the x-coordinate of the third point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y3',
                          description: '<p>the y-coordinate of the third point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x4',
                          description: '<p>the x-coordinate of the fourth point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y4',
                          description: '<p>the y-coordinate of the fourth point</p>\n',
                          type: 'Number'
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 462,
                      params: [
                        {
                          name: 'x1',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y1',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z1',
                          description: '<p>the z-coordinate of the first point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x2',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y2',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z2',
                          description: '<p>the z-coordinate of the second point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x3',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y3',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z3',
                          description: '<p>the z-coordinate of the third point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x4',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y4',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z4',
                          description: '<p>the z-coordinate of the fourth point</p>\n',
                          type: 'Number'
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/core/shape/2d_primitives.js',
                  line: 499,
                  description:
                    '<p>Draws a rectangle to the screen. A rectangle is a four-sided shape with\nevery angle at ninety degrees. By default, the first two parameters set\nthe location of the upper-left corner, the third sets the width, and the\nfourth sets the height. The way these parameters are interpreted, however,\nmay be changed with the <a href="#/p5/rectMode">rectMode()</a> function.\n<br><br>\nThe fifth, sixth, seventh and eighth parameters, if specified,\ndetermine corner radius for the top-left, top-right, lower-right and\nlower-left corners, respectively. An omitted corner radius parameter is set\nto the value of the previously specified radius value in the parameter list.</p>\n',
                  itemtype: 'method',
                  name: 'rect',
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\n// Draw a rectangle at location (30, 20) with a width and height of 55.\nrect(30, 20, 55, 55);\n</code>\n</div>\n\n<div>\n<code>\n// Draw a rectangle with rounded corners, each having a radius of 20.\nrect(30, 20, 55, 55, 20);\n</code>\n</div>\n\n<div>\n<code>\n// Draw a rectangle with rounded corners having the following radii:\n// top-left = 20, top-right = 15, bottom-right = 10, bottom-left = 5.\nrect(30, 20, 55, 55, 20, 15, 10, 5);\n</code>\n</div>'
                  ],
                  alt:
                    '55x55 white rect with black outline in mid-right of canvas.\n55x55 white rect with black outline and rounded edges in mid-right of canvas.\n55x55 white rect with black outline and rounded edges of different radii.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: '2D Primitives',
                  overloads: [
                    {
                      line: 499,
                      params: [
                        {
                          name: 'x',
                          description: '<p>x-coordinate of the rectangle.</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y',
                          description: '<p>y-coordinate of the rectangle.</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'w',
                          description: '<p>width of the rectangle.</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'h',
                          description: '<p>height of the rectangle.</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'tl',
                          description: '<p>optional radius of top-left corner.</p>\n',
                          type: 'Number',
                          optional: true
                        },
                        {
                          name: 'tr',
                          description: '<p>optional radius of top-right corner.</p>\n',
                          type: 'Number',
                          optional: true
                        },
                        {
                          name: 'br',
                          description: '<p>optional radius of bottom-right corner.</p>\n',
                          type: 'Number',
                          optional: true
                        },
                        {
                          name: 'bl',
                          description: '<p>optional radius of bottom-left corner.</p>\n',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 549,
                      params: [
                        {
                          name: 'x',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'w',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'h',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'detailX',
                          description:
                            '<p>number of segments in the x-direction (for WebGL mode)</p>\n',
                          type: 'Integer',
                          optional: true
                        },
                        {
                          name: 'detailY',
                          description:
                            '<p>number of segments in the y-direction (for WebGL mode)</p>\n',
                          type: 'Integer',
                          optional: true
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/core/shape/2d_primitives.js',
                  line: 582,
                  description:
                    '<p>Draws a square to the screen. A square is a four-sided shape with\nevery angle at ninety degrees, and equal side size.\nThis function is a special case of the rect() function, where the width and height are the same, and the parameter is called &quot;s&quot; for side size.\nBy default, the first two parameters set the location of the upper-left corner, the third sets the side size of the square.\nThe way these parameters are interpreted, however,\nmay be changed with the <a href="#/p5/rectMode">rectMode()</a> function.\n<br><br>\nThe fourth, fifth, sixth and seventh parameters, if specified,\ndetermine corner radius for the top-left, top-right, lower-right and\nlower-left corners, respectively. An omitted corner radius parameter is set\nto the value of the previously specified radius value in the parameter list.</p>\n',
                  itemtype: 'method',
                  name: 'square',
                  params: [
                    {
                      name: 'x',
                      description: '<p>x-coordinate of the square.</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'y',
                      description: '<p>y-coordinate of the square.</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 's',
                      description: '<p>side size of the square.</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'tl',
                      description: '<p>optional radius of top-left corner.</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'tr',
                      description: '<p>optional radius of top-right corner.</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'br',
                      description: '<p>optional radius of bottom-right corner.</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'bl',
                      description: '<p>optional radius of bottom-left corner.</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\n// Draw a square at location (30, 20) with a side size of 55.\nsquare(30, 20, 55);\n</code>\n</div>\n\n<div>\n<code>\n// Draw a square with rounded corners, each having a radius of 20.\nsquare(30, 20, 55, 20);\n</code>\n</div>\n\n<div>\n<code>\n// Draw a square with rounded corners having the following radii:\n// top-left = 20, top-right = 15, bottom-right = 10, bottom-left = 5.\nsquare(30, 20, 55, 20, 15, 10, 5);\n</code>\n</div>'
                  ],
                  alt:
                    '55x55 white square with black outline in mid-right of canvas.\n55x55 white square with black outline and rounded edges in mid-right of canvas.\n55x55 white square with black outline and rounded edges of different radii.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: '2D Primitives'
                },
                {
                  file: 'src/core/shape/2d_primitives.js',
                  line: 636,
                  description:
                    '<p>A triangle is a plane created by connecting three points. The first two\narguments specify the first point, the middle two arguments specify the\nsecond point, and the last two arguments specify the third point.</p>\n',
                  itemtype: 'method',
                  name: 'triangle',
                  params: [
                    {
                      name: 'x1',
                      description: '<p>x-coordinate of the first point</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'y1',
                      description: '<p>y-coordinate of the first point</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'x2',
                      description: '<p>x-coordinate of the second point</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'y2',
                      description: '<p>y-coordinate of the second point</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'x3',
                      description: '<p>x-coordinate of the third point</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'y3',
                      description: '<p>y-coordinate of the third point</p>\n',
                      type: 'Number'
                    }
                  ],
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\ntriangle(30, 75, 58, 20, 86, 75);\n</code>\n</div>'
                  ],
                  alt: 'white triangle with black outline in mid-right of canvas.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: '2D Primitives'
                },
                {
                  file: 'src/core/shape/attributes.js',
                  line: 12,
                  description:
                    '<p>Modifies the location from which ellipses are drawn by changing the way\nin which parameters given to <a href="#/p5/ellipse">ellipse()</a>,\n<a href="#/p5/circle">circle()</a> and <a href="#/p5/arc">arc()</a> are interpreted.\n<br><br>\nThe default mode is ellipseMode(CENTER), which interprets the first two\nparameters of <a href="#/p5/ellipse">ellipse()</a> as the shape&#39;s center point, while the third and\nfourth parameters are its width and height.\n<br><br>\nellipseMode(RADIUS) also uses the first two parameters of <a href="#/p5/ellipse">ellipse()</a> as\nthe shape&#39;s center point, but uses the third and fourth parameters to\nspecify half of the shapes&#39;s width and height.\n<br><br>\nellipseMode(CORNER) interprets the first two parameters of <a href="#/p5/ellipse">ellipse()</a> as\nthe upper-left corner of the shape, while the third and fourth parameters\nare its width and height.\n<br><br>\nellipseMode(CORNERS) interprets the first two parameters of <a href="#/p5/ellipse">ellipse()</a> as\nthe location of one corner of the ellipse&#39;s bounding box, and the third\nand fourth parameters as the location of the opposite corner.\n<br><br>\nThe parameter must be written in ALL CAPS because Javascript is a\ncase-sensitive language.</p>\n',
                  itemtype: 'method',
                  name: 'ellipseMode',
                  params: [
                    {
                      name: 'mode',
                      description: '<p>either CENTER, RADIUS, CORNER, or CORNERS</p>\n',
                      type: 'Constant'
                    }
                  ],
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\nellipseMode(RADIUS); // Set ellipseMode to RADIUS\nfill(255); // Set fill to white\nellipse(50, 50, 30, 30); // Draw white ellipse using RADIUS mode\n\nellipseMode(CENTER); // Set ellipseMode to CENTER\nfill(100); // Set fill to gray\nellipse(50, 50, 30, 30); // Draw gray ellipse using CENTER mode\n</code>\n</div>\n\n<div>\n<code>\nellipseMode(CORNER); // Set ellipseMode is CORNER\nfill(255); // Set fill to white\nellipse(25, 25, 50, 50); // Draw white ellipse using CORNER mode\n\nellipseMode(CORNERS); // Set ellipseMode to CORNERS\nfill(100); // Set fill to gray\nellipse(25, 25, 50, 50); // Draw gray ellipse using CORNERS mode\n</code>\n</div>'
                  ],
                  alt:
                    '60x60 white ellipse and 30x30 grey ellipse with black outlines at center.\n60x60 white ellipse @center and 30x30 grey ellipse top-right, black outlines.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: 'Attributes'
                },
                {
                  file: 'src/core/shape/attributes.js',
                  line: 82,
                  description:
                    '<p>Draws all geometry with jagged (aliased) edges. Note that <a href="#/p5/smooth">smooth()</a> is\nactive by default in 2D mode, so it is necessary to call <a href="#/p5/noSmooth">noSmooth()</a> to disable\nsmoothing of geometry, images, and fonts. In 3D mode, <a href="#/p5/noSmooth">noSmooth()</a> is enabled\nby default, so it is necessary to call <a href="#/p5/smooth">smooth()</a> if you would like\nsmooth (antialiased) edges on your geometry.</p>\n',
                  itemtype: 'method',
                  name: 'noSmooth',
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\nbackground(0);\nnoStroke();\nsmooth();\nellipse(30, 48, 36, 36);\nnoSmooth();\nellipse(70, 48, 36, 36);\n</code>\n</div>'
                  ],
                  alt:
                    '2 pixelated 36x36 white ellipses to left & right of center, black background',
                  class: 'p5',
                  module: 'Shape',
                  submodule: 'Attributes'
                },
                {
                  file: 'src/core/shape/attributes.js',
                  line: 117,
                  description:
                    '<p>Modifies the location from which rectangles are drawn by changing the way\nin which parameters given to <a href="#/p5/rect">rect()</a> are interpreted.\n<br><br>\nThe default mode is rectMode(CORNER), which interprets the first two\nparameters of <a href="#/p5/rect">rect()</a> as the upper-left corner of the shape, while the\nthird and fourth parameters are its width and height.\n<br><br>\nrectMode(CORNERS) interprets the first two parameters of <a href="#/p5/rect">rect()</a> as the\nlocation of one corner, and the third and fourth parameters as the\nlocation of the opposite corner.\n<br><br>\nrectMode(CENTER) interprets the first two parameters of <a href="#/p5/rect">rect()</a> as the\nshape&#39;s center point, while the third and fourth parameters are its\nwidth and height.\n<br><br>\nrectMode(RADIUS) also uses the first two parameters of <a href="#/p5/rect">rect()</a> as the\nshape&#39;s center point, but uses the third and fourth parameters to specify\nhalf of the shapes&#39;s width and height.\n<br><br>\nThe parameter must be written in ALL CAPS because Javascript is a\ncase-sensitive language.</p>\n',
                  itemtype: 'method',
                  name: 'rectMode',
                  params: [
                    {
                      name: 'mode',
                      description: '<p>either CORNER, CORNERS, CENTER, or RADIUS</p>\n',
                      type: 'Constant'
                    }
                  ],
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\nrectMode(CORNER); // Default rectMode is CORNER\nfill(255); // Set fill to white\nrect(25, 25, 50, 50); // Draw white rect using CORNER mode\n\nrectMode(CORNERS); // Set rectMode to CORNERS\nfill(100); // Set fill to gray\nrect(25, 25, 50, 50); // Draw gray rect using CORNERS mode\n</code>\n</div>\n\n<div>\n<code>\nrectMode(RADIUS); // Set rectMode to RADIUS\nfill(255); // Set fill to white\nrect(50, 50, 30, 30); // Draw white rect using RADIUS mode\n\nrectMode(CENTER); // Set rectMode to CENTER\nfill(100); // Set fill to gray\nrect(50, 50, 30, 30); // Draw gray rect using CENTER mode\n</code>\n</div>'
                  ],
                  alt:
                    '50x50 white rect at center and 25x25 grey rect in the top left of the other.\n50x50 white rect at center and 25x25 grey rect in the center of the other.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: 'Attributes'
                },
                {
                  file: 'src/core/shape/attributes.js',
                  line: 186,
                  description:
                    '<p>Draws all geometry with smooth (anti-aliased) edges. <a href="#/p5/smooth">smooth()</a> will also\nimprove image quality of resized images. Note that <a href="#/p5/smooth">smooth()</a> is active by\ndefault in 2D mode; <a href="#/p5/noSmooth">noSmooth()</a> can be used to disable smoothing of geometry,\nimages, and fonts. In 3D mode, <a href="#/p5/noSmooth">noSmooth()</a> is enabled\nby default, so it is necessary to call <a href="#/p5/smooth">smooth()</a> if you would like\nsmooth (antialiased) edges on your geometry.</p>\n',
                  itemtype: 'method',
                  name: 'smooth',
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\nbackground(0);\nnoStroke();\nsmooth();\nellipse(30, 48, 36, 36);\nnoSmooth();\nellipse(70, 48, 36, 36);\n</code>\n</div>'
                  ],
                  alt:
                    '2 pixelated 36x36 white ellipses one left one right of center. On black.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: 'Attributes'
                },
                {
                  file: 'src/core/shape/attributes.js',
                  line: 222,
                  description:
                    '<p>Sets the style for rendering line endings. These ends are either squared,\nextended, or rounded, each of which specified with the corresponding\nparameters: SQUARE, PROJECT, and ROUND. The default cap is ROUND.</p>\n',
                  itemtype: 'method',
                  name: 'strokeCap',
                  params: [
                    {
                      name: 'cap',
                      description: '<p>either SQUARE, PROJECT, or ROUND</p>\n',
                      type: 'Constant'
                    }
                  ],
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\nstrokeWeight(12.0);\nstrokeCap(ROUND);\nline(20, 30, 80, 30);\nstrokeCap(SQUARE);\nline(20, 50, 80, 50);\nstrokeCap(PROJECT);\nline(20, 70, 80, 70);\n</code>\n</div>'
                  ],
                  alt:
                    '3 lines. Top line: rounded ends, mid: squared, bottom:longer squared ends.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: 'Attributes'
                },
                {
                  file: 'src/core/shape/attributes.js',
                  line: 259,
                  description:
                    '<p>Sets the style of the joints which connect line segments. These joints\nare either mitered, beveled, or rounded and specified with the\ncorresponding parameters MITER, BEVEL, and ROUND. The default joint is\nMITER.</p>\n',
                  itemtype: 'method',
                  name: 'strokeJoin',
                  params: [
                    {
                      name: 'join',
                      description: '<p>either MITER, BEVEL, ROUND</p>\n',
                      type: 'Constant'
                    }
                  ],
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\nnoFill();\nstrokeWeight(10.0);\nstrokeJoin(MITER);\nbeginShape();\nvertex(35, 20);\nvertex(65, 50);\nvertex(35, 80);\nendShape();\n</code>\n</div>\n\n<div>\n<code>\nnoFill();\nstrokeWeight(10.0);\nstrokeJoin(BEVEL);\nbeginShape();\nvertex(35, 20);\nvertex(65, 50);\nvertex(35, 80);\nendShape();\n</code>\n</div>\n\n<div>\n<code>\nnoFill();\nstrokeWeight(10.0);\nstrokeJoin(ROUND);\nbeginShape();\nvertex(35, 20);\nvertex(65, 50);\nvertex(35, 80);\nendShape();\n</code>\n</div>'
                  ],
                  alt:
                    'Right-facing arrowhead shape with pointed tip in center of canvas.\nRight-facing arrowhead shape with flat tip in center of canvas.\nRight-facing arrowhead shape with rounded tip in center of canvas.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: 'Attributes'
                },
                {
                  file: 'src/core/shape/attributes.js',
                  line: 326,
                  description:
                    '<p>Sets the width of the stroke used for lines, points, and the border\naround shapes. All widths are set in units of pixels.</p>\n',
                  itemtype: 'method',
                  name: 'strokeWeight',
                  params: [
                    {
                      name: 'weight',
                      description: '<p>the weight (in pixels) of the stroke</p>\n',
                      type: 'Number'
                    }
                  ],
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\nstrokeWeight(1); // Default\nline(20, 20, 80, 20);\nstrokeWeight(4); // Thicker\nline(20, 40, 80, 40);\nstrokeWeight(10); // Beastly\nline(20, 70, 80, 70);\n</code>\n</div>'
                  ],
                  alt: '3 horizontal black lines. Top line: thin, mid: medium, bottom:thick.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: 'Attributes'
                },
                {
                  file: 'src/core/shape/curves.js',
                  line: 11,
                  description:
                    '<p>Draws a cubic Bezier curve on the screen. These curves are defined by a\nseries of anchor and control points. The first two parameters specify\nthe first anchor point and the last two parameters specify the other\nanchor point, which become the first and last points on the curve. The\nmiddle parameters specify the two control points which define the shape\nof the curve. Approximately speaking, control points &quot;pull&quot; the curve\ntowards them.<br /><br />Bezier curves were developed by French\nautomotive engineer Pierre Bezier, and are commonly used in computer\ngraphics to define gently sloping curves. See also <a href="#/p5/curve">curve()</a>.</p>\n',
                  itemtype: 'method',
                  name: 'bezier',
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\nnoFill();\nstroke(255, 102, 0);\nline(85, 20, 10, 10);\nline(90, 90, 15, 80);\nstroke(0, 0, 0);\nbezier(85, 20, 10, 10, 90, 90, 15, 80);\n</code>\n</div>\n\n<div>\n<code>\nbackground(0, 0, 0);\nnoFill();\nstroke(255);\nbezier(250, 250, 0, 100, 100, 0, 100, 0, 0, 0, 100, 0);\n</code>\n</div>'
                  ],
                  alt:
                    'stretched black s-shape in center with orange lines extending from end points.\nstretched black s-shape with 10 5x5 white ellipses along the shape.\nstretched black s-shape with 7 5x5 ellipses and orange lines along the shape.\nstretched black s-shape with 17 small orange lines extending from under shape.\nhorseshoe shape with orange ends facing left and black curved center.\nhorseshoe shape with orange ends facing left and black curved center.\nLine shaped like right-facing arrow,points move with mouse-x and warp shape.\nhorizontal line that hooks downward on the right and 13 5x5 ellipses along it.\nright curving line mid-right of canvas with 7 short lines radiating from it.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: 'Curves',
                  overloads: [
                    {
                      line: 11,
                      params: [
                        {
                          name: 'x1',
                          description: '<p>x-coordinate for the first anchor point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y1',
                          description: '<p>y-coordinate for the first anchor point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x2',
                          description: '<p>x-coordinate for the first control point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y2',
                          description: '<p>y-coordinate for the first control point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x3',
                          description: '<p>x-coordinate for the second control point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y3',
                          description: '<p>y-coordinate for the second control point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x4',
                          description: '<p>x-coordinate for the second anchor point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y4',
                          description: '<p>y-coordinate for the second anchor point</p>\n',
                          type: 'Number'
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 64,
                      params: [
                        {
                          name: 'x1',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y1',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z1',
                          description: '<p>z-coordinate for the first anchor point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x2',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y2',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z2',
                          description: '<p>z-coordinate for the first control point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x3',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y3',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z3',
                          description: '<p>z-coordinate for the second control point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x4',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y4',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z4',
                          description: '<p>z-coordinate for the second anchor point</p>\n',
                          type: 'Number'
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/core/shape/curves.js',
                  line: 94,
                  description:
                    '<p>Sets the resolution at which Beziers display.</p>\n<p>The default value is 20.</p>\n<p>This function is only useful when using the WEBGL renderer\nas the default canvas renderer does not use this information.</p>\n',
                  itemtype: 'method',
                  name: 'bezierDetail',
                  params: [
                    {
                      name: 'detail',
                      description: '<p>resolution of the curves</p>\n',
                      type: 'Number'
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n<div modernizr='webgl'>\n<code>\nfunction setup() {\n  createCanvas(100, 100, WEBGL);\n  noFill();\n\n  bezierDetail(5);\n}\n\nfunction draw() {\n  background(200);\n\n  bezier(-40, -40, 0,\n          90, -40, 0,\n         -90,  40, 0,\n          40,  40, 0);\n}\n</code>\n</div>"
                  ],
                  alt: 'stretched black s-shape with a low level of bezier detail',
                  class: 'p5',
                  module: 'Shape',
                  submodule: 'Curves'
                },
                {
                  file: 'src/core/shape/curves.js',
                  line: 137,
                  description:
                    '<p>Evaluates the Bezier at position t for points a, b, c, d.\nThe parameters a and d are the first and last points\non the curve, and b and c are the control points.\nThe final parameter t varies between 0 and 1.\nThis can be done once with the x coordinates and a second time\nwith the y coordinates to get the location of a bezier curve at t.</p>\n',
                  itemtype: 'method',
                  name: 'bezierPoint',
                  params: [
                    {
                      name: 'a',
                      description: '<p>coordinate of first point on the curve</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'b',
                      description: '<p>coordinate of first control point</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'c',
                      description: '<p>coordinate of second control point</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'd',
                      description: '<p>coordinate of second point on the curve</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 't',
                      description: '<p>value between 0 and 1</p>\n',
                      type: 'Number'
                    }
                  ],
                  return: {
                    description: 'the value of the Bezier at position t',
                    type: 'Number'
                  },
                  example: [
                    '\n<div>\n<code>\nnoFill();\nlet x1 = 85,\n x2 = 10,\n x3 = 90,\n x4 = 15;\nlet y1 = 20,\n y2 = 10,\n y3 = 90,\n y4 = 80;\nbezier(x1, y1, x2, y2, x3, y3, x4, y4);\nfill(255);\nlet steps = 10;\nfor (let i = 0; i <= steps; i++) {\n  let t = i / steps;\n  let x = bezierPoint(x1, x2, x3, x4, t);\n  let y = bezierPoint(y1, y2, y3, y4, t);\n  ellipse(x, y, 5, 5);\n}\n</code>\n</div>'
                  ],
                  alt:
                    'stretched black s-shape with 17 small orange lines extending from under shape.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: 'Curves'
                },
                {
                  file: 'src/core/shape/curves.js',
                  line: 192,
                  description:
                    '<p>Evaluates the tangent to the Bezier at position t for points a, b, c, d.\nThe parameters a and d are the first and last points\non the curve, and b and c are the control points.\nThe final parameter t varies between 0 and 1.</p>\n',
                  itemtype: 'method',
                  name: 'bezierTangent',
                  params: [
                    {
                      name: 'a',
                      description: '<p>coordinate of first point on the curve</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'b',
                      description: '<p>coordinate of first control point</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'c',
                      description: '<p>coordinate of second control point</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'd',
                      description: '<p>coordinate of second point on the curve</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 't',
                      description: '<p>value between 0 and 1</p>\n',
                      type: 'Number'
                    }
                  ],
                  return: {
                    description: 'the tangent at position t',
                    type: 'Number'
                  },
                  example: [
                    '\n<div>\n<code>\nnoFill();\nbezier(85, 20, 10, 10, 90, 90, 15, 80);\nlet steps = 6;\nfill(255);\nfor (let i = 0; i <= steps; i++) {\n  let t = i / steps;\n  // Get the location of the point\n  let x = bezierPoint(85, 10, 90, 15, t);\n  let y = bezierPoint(20, 10, 90, 80, t);\n  // Get the tangent points\n  let tx = bezierTangent(85, 10, 90, 15, t);\n  let ty = bezierTangent(20, 10, 90, 80, t);\n  // Calculate an angle from the tangent points\n  let a = atan2(ty, tx);\n  a += PI;\n  stroke(255, 102, 0);\n  line(x, y, cos(a) * 30 + x, sin(a) * 30 + y);\n  // The following line of code makes a line\n  // inverse of the above line\n  //line(x, y, cos(a)*-30 + x, sin(a)*-30 + y);\n  stroke(0);\n  ellipse(x, y, 5, 5);\n}\n</code>\n</div>\n\n<div>\n<code>\nnoFill();\nbezier(85, 20, 10, 10, 90, 90, 15, 80);\nstroke(255, 102, 0);\nlet steps = 16;\nfor (let i = 0; i <= steps; i++) {\n  let t = i / steps;\n  let x = bezierPoint(85, 10, 90, 15, t);\n  let y = bezierPoint(20, 10, 90, 80, t);\n  let tx = bezierTangent(85, 10, 90, 15, t);\n  let ty = bezierTangent(20, 10, 90, 80, t);\n  let a = atan2(ty, tx);\n  a -= HALF_PI;\n  line(x, y, cos(a) * 8 + x, sin(a) * 8 + y);\n}\n</code>\n</div>'
                  ],
                  alt:
                    's-shaped line with 17 short orange lines extending from underside of shape',
                  class: 'p5',
                  module: 'Shape',
                  submodule: 'Curves'
                },
                {
                  file: 'src/core/shape/curves.js',
                  line: 271,
                  description:
                    '<p>Draws a curved line on the screen between two points, given as the\nmiddle four parameters. The first two parameters are a control point, as\nif the curve came from this point even though it&#39;s not drawn. The last\ntwo parameters similarly describe the other control point. <br /><br />\nLonger curves can be created by putting a series of <a href="#/p5/curve">curve()</a> functions\ntogether or using <a href="#/p5/curveVertex">curveVertex()</a>. An additional function called\n<a href="#/p5/curveTightness">curveTightness()</a> provides control for the visual quality of the curve.\nThe <a href="#/p5/curve">curve()</a> function is an implementation of Catmull-Rom splines.</p>\n',
                  itemtype: 'method',
                  name: 'curve',
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\nnoFill();\nstroke(255, 102, 0);\ncurve(5, 26, 5, 26, 73, 24, 73, 61);\nstroke(0);\ncurve(5, 26, 73, 24, 73, 61, 15, 65);\nstroke(255, 102, 0);\ncurve(73, 24, 73, 61, 15, 65, 15, 65);\n</code>\n</div>\n<div>\n<code>\n// Define the curve points as JavaScript objects\nlet p1 = { x: 5, y: 26 },\n p2 = { x: 73, y: 24 };\nlet p3 = { x: 73, y: 61 },\n p4 = { x: 15, y: 65 };\nnoFill();\nstroke(255, 102, 0);\ncurve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);\nstroke(0);\ncurve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);\nstroke(255, 102, 0);\ncurve(p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, p4.x, p4.y);\n</code>\n</div>\n<div>\n<code>\nnoFill();\nstroke(255, 102, 0);\ncurve(5, 26, 0, 5, 26, 0, 73, 24, 0, 73, 61, 0);\nstroke(0);\ncurve(5, 26, 0, 73, 24, 0, 73, 61, 0, 15, 65, 0);\nstroke(255, 102, 0);\ncurve(73, 24, 0, 73, 61, 0, 15, 65, 0, 15, 65, 0);\n</code>\n</div>'
                  ],
                  alt:
                    'horseshoe shape with orange ends facing left and black curved center.\nhorseshoe shape with orange ends facing left and black curved center.\ncurving black and orange lines.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: 'Curves',
                  overloads: [
                    {
                      line: 271,
                      params: [
                        {
                          name: 'x1',
                          description:
                            '<p>x-coordinate for the beginning control point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y1',
                          description:
                            '<p>y-coordinate for the beginning control point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x2',
                          description: '<p>x-coordinate for the first point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y2',
                          description: '<p>y-coordinate for the first point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x3',
                          description: '<p>x-coordinate for the second point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y3',
                          description: '<p>y-coordinate for the second point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x4',
                          description: '<p>x-coordinate for the ending control point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y4',
                          description: '<p>y-coordinate for the ending control point</p>\n',
                          type: 'Number'
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 336,
                      params: [
                        {
                          name: 'x1',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y1',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z1',
                          description:
                            '<p>z-coordinate for the beginning control point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x2',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y2',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z2',
                          description: '<p>z-coordinate for the first point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x3',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y3',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z3',
                          description: '<p>z-coordinate for the second point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x4',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y4',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z4',
                          description: '<p>z-coordinate for the ending control point</p>\n',
                          type: 'Number'
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/core/shape/curves.js',
                  line: 362,
                  description:
                    '<p>Sets the resolution at which curves display.</p>\n<p>The default value is 20 while the minimum value is 3.</p>\n<p>This function is only useful when using the WEBGL renderer\nas the default canvas renderer does not use this\ninformation.</p>\n',
                  itemtype: 'method',
                  name: 'curveDetail',
                  params: [
                    {
                      name: 'resolution',
                      description: '<p>resolution of the curves</p>\n',
                      type: 'Number'
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n<div modernizr='webgl'>\n<code>\nfunction setup() {\n  createCanvas(100, 100, WEBGL);\n\n  curveDetail(5);\n}\nfunction draw() {\n  background(200);\n\n  curve(250, 600, 0, -30, 40, 0, 30, 30, 0, -250, 600, 0);\n}\n</code>\n</div>"
                  ],
                  alt: 'white arch shape with a low level of curve detail.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: 'Curves'
                },
                {
                  file: 'src/core/shape/curves.js',
                  line: 404,
                  description:
                    '<p>Modifies the quality of forms created with <a href="#/p5/curve">curve()</a> and <a href="#/p5/curveVertex">curveVertex()</a>.\nThe parameter tightness determines how the curve fits to the vertex\npoints. The value 0.0 is the default value for tightness (this value\ndefines the curves to be Catmull-Rom splines) and the value 1.0 connects\nall the points with straight lines. Values within the range -5.0 and 5.0\nwill deform the curves but will leave them recognizable and as values\nincrease in magnitude, they will continue to deform.</p>\n',
                  itemtype: 'method',
                  name: 'curveTightness',
                  params: [
                    {
                      name: 'amount',
                      description:
                        '<p>amount of deformation from the original vertices</p>\n',
                      type: 'Number'
                    }
                  ],
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\n// Move the mouse left and right to see the curve change\n\nfunction setup() {\n  createCanvas(100, 100);\n  noFill();\n}\n\nfunction draw() {\n  background(204);\n  let t = map(mouseX, 0, width, -5, 5);\n  curveTightness(t);\n  beginShape();\n  curveVertex(10, 26);\n  curveVertex(10, 26);\n  curveVertex(83, 24);\n  curveVertex(83, 61);\n  curveVertex(25, 65);\n  curveVertex(25, 65);\n  endShape();\n}\n</code>\n</div>'
                  ],
                  alt:
                    'Line shaped like right-facing arrow,points move with mouse-x and warp shape.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: 'Curves'
                },
                {
                  file: 'src/core/shape/curves.js',
                  line: 451,
                  description:
                    '<p>Evaluates the curve at position t for points a, b, c, d.\nThe parameter t varies between 0 and 1, a and d are control points\nof the curve, and b and c are the start and end points of the curve.\nThis can be done once with the x coordinates and a second time\nwith the y coordinates to get the location of a curve at t.</p>\n',
                  itemtype: 'method',
                  name: 'curvePoint',
                  params: [
                    {
                      name: 'a',
                      description: '<p>coordinate of first control point of the curve</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'b',
                      description: '<p>coordinate of first point</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'c',
                      description: '<p>coordinate of second point</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'd',
                      description: '<p>coordinate of second control point</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 't',
                      description: '<p>value between 0 and 1</p>\n',
                      type: 'Number'
                    }
                  ],
                  return: {
                    description: 'bezier value at position t',
                    type: 'Number'
                  },
                  example: [
                    '\n<div>\n<code>\nnoFill();\ncurve(5, 26, 5, 26, 73, 24, 73, 61);\ncurve(5, 26, 73, 24, 73, 61, 15, 65);\nfill(255);\nellipseMode(CENTER);\nlet steps = 6;\nfor (let i = 0; i <= steps; i++) {\n  let t = i / steps;\n  let x = curvePoint(5, 5, 73, 73, t);\n  let y = curvePoint(26, 26, 24, 61, t);\n  ellipse(x, y, 5, 5);\n  x = curvePoint(5, 73, 73, 15, t);\n  y = curvePoint(26, 24, 61, 65, t);\n  ellipse(x, y, 5, 5);\n}\n</code>\n</div>\n\nline hooking down to right-bottom with 13 5x5 white ellipse points'
                  ],
                  class: 'p5',
                  module: 'Shape',
                  submodule: 'Curves'
                },
                {
                  file: 'src/core/shape/curves.js',
                  line: 500,
                  description:
                    '<p>Evaluates the tangent to the curve at position t for points a, b, c, d.\nThe parameter t varies between 0 and 1, a and d are points on the curve,\nand b and c are the control points.</p>\n',
                  itemtype: 'method',
                  name: 'curveTangent',
                  params: [
                    {
                      name: 'a',
                      description: '<p>coordinate of first point on the curve</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'b',
                      description: '<p>coordinate of first control point</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'c',
                      description: '<p>coordinate of second control point</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'd',
                      description: '<p>coordinate of second point on the curve</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 't',
                      description: '<p>value between 0 and 1</p>\n',
                      type: 'Number'
                    }
                  ],
                  return: {
                    description: 'the tangent at position t',
                    type: 'Number'
                  },
                  example: [
                    '\n<div>\n<code>\nnoFill();\ncurve(5, 26, 73, 24, 73, 61, 15, 65);\nlet steps = 6;\nfor (let i = 0; i <= steps; i++) {\n  let t = i / steps;\n  let x = curvePoint(5, 73, 73, 15, t);\n  let y = curvePoint(26, 24, 61, 65, t);\n  //ellipse(x, y, 5, 5);\n  let tx = curveTangent(5, 73, 73, 15, t);\n  let ty = curveTangent(26, 24, 61, 65, t);\n  let a = atan2(ty, tx);\n  a -= PI / 2.0;\n  line(x, y, cos(a) * 8 + x, sin(a) * 8 + y);\n}\n</code>\n</div>'
                  ],
                  alt:
                    'right curving line mid-right of canvas with 7 short lines radiating from it.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: 'Curves'
                },
                {
                  file: 'src/core/shape/vertex.js',
                  line: 20,
                  description:
                    '<p>Use the <a href="#/p5/beginContour">beginContour()</a> and <a href="#/p5/endContour">endContour()</a> functions to create negative\nshapes within shapes such as the center of the letter &#39;O&#39;. <a href="#/p5/beginContour">beginContour()</a>\nbegins recording vertices for the shape and <a href="#/p5/endContour">endContour()</a> stops recording.\nThe vertices that define a negative shape must &quot;wind&quot; in the opposite\ndirection from the exterior shape. First draw vertices for the exterior\nclockwise order, then for internal shapes, draw vertices\nshape in counter-clockwise.\n<br><br>\nThese functions can only be used within a <a href="#/p5/beginShape">beginShape()</a>/<a href="#/p5/endShape">endShape()</a> pair and\ntransformations such as <a href="#/p5/translate">translate()</a>, <a href="#/p5/rotate">rotate()</a>, and <a href="#/p5/scale">scale()</a> do not work\nwithin a <a href="#/p5/beginContour">beginContour()</a>/<a href="#/p5/endContour">endContour()</a> pair. It is also not possible to use\nother shapes, such as <a href="#/p5/ellipse">ellipse()</a> or <a href="#/p5/rect">rect()</a> within.</p>\n',
                  itemtype: 'method',
                  name: 'beginContour',
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\ntranslate(50, 50);\nstroke(255, 0, 0);\nbeginShape();\n// Exterior part of shape, clockwise winding\nvertex(-40, -40);\nvertex(40, -40);\nvertex(40, 40);\nvertex(-40, 40);\n// Interior part of shape, counter-clockwise winding\nbeginContour();\nvertex(-20, -20);\nvertex(-20, 20);\nvertex(20, 20);\nvertex(20, -20);\nendContour();\nendShape(CLOSE);\n</code>\n</div>'
                  ],
                  alt:
                    'white rect and smaller grey rect with red outlines in center of canvas.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: 'Vertex'
                },
                {
                  file: 'src/core/shape/vertex.js',
                  line: 68,
                  description:
                    '<p>Using the <a href="#/p5/beginShape">beginShape()</a> and <a href="#/p5/endShape">endShape()</a> functions allow creating more\ncomplex forms. <a href="#/p5/beginShape">beginShape()</a> begins recording vertices for a shape and\n<a href="#/p5/endShape">endShape()</a> stops recording. The value of the kind parameter tells it which\ntypes of shapes to create from the provided vertices. With no mode\nspecified, the shape can be any irregular polygon.\n<br><br>\nThe parameters available for <a href="#/p5/beginShape">beginShape()</a> are POINTS, LINES, TRIANGLES,\nTRIANGLE_FAN, TRIANGLE_STRIP, QUADS, and QUAD_STRIP. After calling the\n<a href="#/p5/beginShape">beginShape()</a> function, a series of <a href="#/p5/vertex">vertex()</a> commands must follow. To stop\ndrawing the shape, call <a href="#/p5/endShape">endShape()</a>. Each shape will be outlined with the\ncurrent stroke color and filled with the fill color.\n<br><br>\nTransformations such as <a href="#/p5/translate">translate()</a>, <a href="#/p5/rotate">rotate()</a>, and <a href="#/p5/scale">scale()</a> do not work\nwithin <a href="#/p5/beginShape">beginShape()</a>. It is also not possible to use other shapes, such as\n<a href="#/p5/ellipse">ellipse()</a> or <a href="#/p5/rect">rect()</a> within <a href="#/p5/beginShape">beginShape()</a>.</p>\n',
                  itemtype: 'method',
                  name: 'beginShape',
                  params: [
                    {
                      name: 'kind',
                      description:
                        '<p>either POINTS, LINES, TRIANGLES, TRIANGLE_FAN\n                               TRIANGLE_STRIP, QUADS, or QUAD_STRIP</p>\n',
                      type: 'Constant',
                      optional: true
                    }
                  ],
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\nbeginShape();\nvertex(30, 20);\nvertex(85, 20);\nvertex(85, 75);\nvertex(30, 75);\nendShape(CLOSE);\n</code>\n</div>\n\n<div>\n<code>\nbeginShape(POINTS);\nvertex(30, 20);\nvertex(85, 20);\nvertex(85, 75);\nvertex(30, 75);\nendShape();\n</code>\n</div>\n\n<div>\n<code>\nbeginShape(LINES);\nvertex(30, 20);\nvertex(85, 20);\nvertex(85, 75);\nvertex(30, 75);\nendShape();\n</code>\n</div>\n\n<div>\n<code>\nnoFill();\nbeginShape();\nvertex(30, 20);\nvertex(85, 20);\nvertex(85, 75);\nvertex(30, 75);\nendShape();\n</code>\n</div>\n\n<div>\n<code>\nnoFill();\nbeginShape();\nvertex(30, 20);\nvertex(85, 20);\nvertex(85, 75);\nvertex(30, 75);\nendShape(CLOSE);\n</code>\n</div>\n\n<div>\n<code>\nbeginShape(TRIANGLES);\nvertex(30, 75);\nvertex(40, 20);\nvertex(50, 75);\nvertex(60, 20);\nvertex(70, 75);\nvertex(80, 20);\nendShape();\n</code>\n</div>\n\n<div>\n<code>\nbeginShape(TRIANGLE_STRIP);\nvertex(30, 75);\nvertex(40, 20);\nvertex(50, 75);\nvertex(60, 20);\nvertex(70, 75);\nvertex(80, 20);\nvertex(90, 75);\nendShape();\n</code>\n</div>\n\n<div>\n<code>\nbeginShape(TRIANGLE_FAN);\nvertex(57.5, 50);\nvertex(57.5, 15);\nvertex(92, 50);\nvertex(57.5, 85);\nvertex(22, 50);\nvertex(57.5, 15);\nendShape();\n</code>\n</div>\n\n<div>\n<code>\nbeginShape(QUADS);\nvertex(30, 20);\nvertex(30, 75);\nvertex(50, 75);\nvertex(50, 20);\nvertex(65, 20);\nvertex(65, 75);\nvertex(85, 75);\nvertex(85, 20);\nendShape();\n</code>\n</div>\n\n<div>\n<code>\nbeginShape(QUAD_STRIP);\nvertex(30, 20);\nvertex(30, 75);\nvertex(50, 20);\nvertex(50, 75);\nvertex(65, 20);\nvertex(65, 75);\nvertex(85, 20);\nvertex(85, 75);\nendShape();\n</code>\n</div>\n\n<div>\n<code>\nbeginShape();\nvertex(20, 20);\nvertex(40, 20);\nvertex(40, 40);\nvertex(60, 40);\nvertex(60, 60);\nvertex(20, 60);\nendShape(CLOSE);\n</code>\n</div>'
                  ],
                  alt:
                    'white square-shape with black outline in middle-right of canvas.\n4 black points in a square shape in middle-right of canvas.\n2 horizontal black lines. In the top-right and bottom-right of canvas.\n3 line shape with horizontal on top, vertical in middle and horizontal bottom.\nsquare line shape in middle-right of canvas.\n2 white triangle shapes mid-right canvas. left one pointing up and right down.\n5 horizontal interlocking and alternating white triangles in mid-right canvas.\n4 interlocking white triangles in 45 degree rotated square-shape.\n2 white rectangle shapes in mid-right canvas. Both 20x55.\n3 side-by-side white rectangles center rect is smaller in mid-right canvas.\nThick white l-shape with black outline mid-top-left of canvas.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: 'Vertex'
                },
                {
                  file: 'src/core/shape/vertex.js',
                  line: 268,
                  description:
                    '<p>Specifies vertex coordinates for Bezier curves. Each call to\nbezierVertex() defines the position of two control points and\none anchor point of a Bezier curve, adding a new segment to a\nline or shape. For WebGL mode bezierVertex() can be used in 2D\nas well as 3D mode. 2D mode expects 6 parameters, while 3D mode\nexpects 9 parameters (including z coordinates).\n<br><br>\nThe first time bezierVertex() is used within a <a href="#/p5/beginShape">beginShape()</a>\ncall, it must be prefaced with a call to <a href="#/p5/vertex">vertex()</a> to set the first anchor\npoint. This function must be used between <a href="#/p5/beginShape">beginShape()</a> and <a href="#/p5/endShape">endShape()</a>\nand only when there is no MODE or POINTS parameter specified to\n<a href="#/p5/beginShape">beginShape()</a>.</p>\n',
                  itemtype: 'method',
                  name: 'bezierVertex',
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\nnoFill();\nbeginShape();\nvertex(30, 20);\nbezierVertex(80, 0, 80, 75, 30, 75);\nendShape();\n</code>\n</div>',
                    '\n<div>\n<code>\nbeginShape();\nvertex(30, 20);\nbezierVertex(80, 0, 80, 75, 30, 75);\nbezierVertex(50, 80, 60, 25, 30, 20);\nendShape();\n</code>\n</div>',
                    "\n<div>\n<code>\nfunction setup() {\n  createCanvas(100, 100, WEBGL);\n  setAttributes('antialias', true);\n}\nfunction draw() {\n  orbitControl();\n  background(50);\n  strokeWeight(4);\n  stroke(255);\n  point(-25, 30);\n  point(25, 30);\n  point(25, -30);\n  point(-25, -30);\n\n  strokeWeight(1);\n  noFill();\n\n  beginShape();\n  vertex(-25, 30);\n  bezierVertex(25, 30, 25, -30, -25, -30);\n  endShape();\n\n  beginShape();\n  vertex(-25, 30, 20);\n  bezierVertex(25, 30, 20, 25, -30, 20, -25, -30, 20);\n  endShape();\n}\n</code>\n</div>"
                  ],
                  alt:
                    'crescent shape in middle of canvas with another crescent shape on positive z-axis.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: 'Vertex',
                  overloads: [
                    {
                      line: 268,
                      params: [
                        {
                          name: 'x2',
                          description: '<p>x-coordinate for the first control point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y2',
                          description: '<p>y-coordinate for the first control point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x3',
                          description: '<p>x-coordinate for the second control point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y3',
                          description: '<p>y-coordinate for the second control point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x4',
                          description: '<p>x-coordinate for the anchor point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y4',
                          description: '<p>y-coordinate for the anchor point</p>\n',
                          type: 'Number'
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 356,
                      params: [
                        {
                          name: 'x2',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y2',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z2',
                          description:
                            '<p>z-coordinate for the first control point (for WebGL mode)</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x3',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y3',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z3',
                          description:
                            '<p>z-coordinate for the second control point (for WebGL mode)</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x4',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y4',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z4',
                          description:
                            '<p>z-coordinate for the anchor point (for WebGL mode)</p>\n',
                          type: 'Number'
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/core/shape/vertex.js',
                  line: 396,
                  description:
                    '<p>Specifies vertex coordinates for curves. This function may only\nbe used between <a href="#/p5/beginShape">beginShape()</a> and <a href="#/p5/endShape">endShape()</a> and only when there\nis no MODE parameter specified to <a href="#/p5/beginShape">beginShape()</a>.\nFor WebGL mode curveVertex() can be used in 2D as well as 3D mode.\n2D mode expects 2 parameters, while 3D mode expects 3 parameters.\n<br><br>\nThe first and last points in a series of curveVertex() lines will be used to\nguide the beginning and end of a the curve. A minimum of four\npoints is required to draw a tiny curve between the second and\nthird points. Adding a fifth point with curveVertex() will draw\nthe curve between the second, third, and fourth points. The\ncurveVertex() function is an implementation of Catmull-Rom\nsplines.</p>\n',
                  itemtype: 'method',
                  name: 'curveVertex',
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\nstrokeWeight(5);\npoint(84, 91);\npoint(68, 19);\npoint(21, 17);\npoint(32, 91);\nstrokeWeight(1);\n\nnoFill();\nbeginShape();\ncurveVertex(84, 91);\ncurveVertex(84, 91);\ncurveVertex(68, 19);\ncurveVertex(21, 17);\ncurveVertex(32, 91);\ncurveVertex(32, 91);\nendShape();\n</code>\n</div>'
                  ],
                  alt:
                    'Upside-down u-shape line, mid canvas. left point extends beyond canvas view.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: 'Vertex',
                  overloads: [
                    {
                      line: 396,
                      params: [
                        {
                          name: 'x',
                          description: '<p>x-coordinate of the vertex</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y',
                          description: '<p>y-coordinate of the vertex</p>\n',
                          type: 'Number'
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 441,
                      params: [
                        {
                          name: 'x',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z',
                          description: '<p>z-coordinate of the vertex (for WebGL mode)</p>\n',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/core/shape/vertex.js',
                  line: 506,
                  description:
                    '<p>Use the <a href="#/p5/beginContour">beginContour()</a> and <a href="#/p5/endContour">endContour()</a> functions to create negative\nshapes within shapes such as the center of the letter &#39;O&#39;. <a href="#/p5/beginContour">beginContour()</a>\nbegins recording vertices for the shape and <a href="#/p5/endContour">endContour()</a> stops recording.\nThe vertices that define a negative shape must &quot;wind&quot; in the opposite\ndirection from the exterior shape. First draw vertices for the exterior\nclockwise order, then for internal shapes, draw vertices\nshape in counter-clockwise.\n<br><br>\nThese functions can only be used within a <a href="#/p5/beginShape">beginShape()</a>/<a href="#/p5/endShape">endShape()</a> pair and\ntransformations such as <a href="#/p5/translate">translate()</a>, <a href="#/p5/rotate">rotate()</a>, and <a href="#/p5/scale">scale()</a> do not work\nwithin a <a href="#/p5/beginContour">beginContour()</a>/<a href="#/p5/endContour">endContour()</a> pair. It is also not possible to use\nother shapes, such as <a href="#/p5/ellipse">ellipse()</a> or <a href="#/p5/rect">rect()</a> within.</p>\n',
                  itemtype: 'method',
                  name: 'endContour',
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\ntranslate(50, 50);\nstroke(255, 0, 0);\nbeginShape();\n// Exterior part of shape, clockwise winding\nvertex(-40, -40);\nvertex(40, -40);\nvertex(40, 40);\nvertex(-40, 40);\n// Interior part of shape, counter-clockwise winding\nbeginContour();\nvertex(-20, -20);\nvertex(-20, 20);\nvertex(20, 20);\nvertex(20, -20);\nendContour();\nendShape(CLOSE);\n</code>\n</div>'
                  ],
                  alt:
                    'white rect and smaller grey rect with red outlines in center of canvas.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: 'Vertex'
                },
                {
                  file: 'src/core/shape/vertex.js',
                  line: 566,
                  description:
                    '<p>The <a href="#/p5/endShape">endShape()</a> function is the companion to <a href="#/p5/beginShape">beginShape()</a> and may only be\ncalled after <a href="#/p5/beginShape">beginShape()</a>. When <a href="#/p5/endshape">endShape()</a> is called, all of image data\ndefined since the previous call to <a href="#/p5/beginShape">beginShape()</a> is written into the image\nbuffer. The constant CLOSE as the value for the MODE parameter to close\nthe shape (to connect the beginning and the end).</p>\n',
                  itemtype: 'method',
                  name: 'endShape',
                  params: [
                    {
                      name: 'mode',
                      description: '<p>use CLOSE to close the shape</p>\n',
                      type: 'Constant',
                      optional: true
                    }
                  ],
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\nnoFill();\n\nbeginShape();\nvertex(20, 20);\nvertex(45, 20);\nvertex(45, 80);\nendShape(CLOSE);\n\nbeginShape();\nvertex(50, 20);\nvertex(75, 20);\nvertex(75, 80);\nendShape();\n</code>\n</div>'
                  ],
                  alt:
                    'Triangle line shape with smallest interior angle on bottom and upside-down L.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: 'Vertex'
                },
                {
                  file: 'src/core/shape/vertex.js',
                  line: 652,
                  description:
                    '<p>Specifies vertex coordinates for quadratic Bezier curves. Each call to\nquadraticVertex() defines the position of one control points and one\nanchor point of a Bezier curve, adding a new segment to a line or shape.\nThe first time quadraticVertex() is used within a <a href="#/p5/beginShape">beginShape()</a> call, it\nmust be prefaced with a call to <a href="#/p5/vertex">vertex()</a> to set the first anchor point.\nFor WebGL mode quadraticVertex() can be used in 2D as well as 3D mode.\n2D mode expects 4 parameters, while 3D mode expects 6 parameters\n(including z coordinates).\n<br><br>\nThis function must be used between <a href="#/p5/beginShape">beginShape()</a> and <a href="#/p5/endShape">endShape()</a>\nand only when there is no MODE or POINTS parameter specified to\n<a href="#/p5/beginShape">beginShape()</a>.</p>\n',
                  itemtype: 'method',
                  name: 'quadraticVertex',
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\nstrokeWeight(5);\npoint(20, 20);\npoint(80, 20);\npoint(50, 50);\n\nnoFill();\nstrokeWeight(1);\nbeginShape();\nvertex(20, 20);\nquadraticVertex(80, 20, 50, 50);\nendShape();\n</code>\n</div>\n\n<div>\n<code>\nstrokeWeight(5);\npoint(20, 20);\npoint(80, 20);\npoint(50, 50);\n\npoint(20, 80);\npoint(80, 80);\npoint(80, 60);\n\nnoFill();\nstrokeWeight(1);\nbeginShape();\nvertex(20, 20);\nquadraticVertex(80, 20, 50, 50);\nquadraticVertex(20, 80, 80, 80);\nvertex(80, 60);\nendShape();\n</code>\n</div>'
                  ],
                  alt:
                    'arched-shaped black line with 4 pixel thick stroke weight.\nbackwards s-shaped black line with 4 pixel thick stroke weight.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: 'Vertex',
                  overloads: [
                    {
                      line: 652,
                      params: [
                        {
                          name: 'cx',
                          description: '<p>x-coordinate for the control point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'cy',
                          description: '<p>y-coordinate for the control point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x3',
                          description: '<p>x-coordinate for the anchor point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y3',
                          description: '<p>y-coordinate for the anchor point</p>\n',
                          type: 'Number'
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 718,
                      params: [
                        {
                          name: 'cx',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'cy',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'cz',
                          description:
                            '<p>z-coordinate for the control point (for WebGL mode)</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x3',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y3',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z3',
                          description:
                            '<p>z-coordinate for the anchor point (for WebGL mode)</p>\n',
                          type: 'Number'
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/core/shape/vertex.js',
                  line: 811,
                  description:
                    '<p>All shapes are constructed by connecting a series of vertices. <a href="#/p5/vertex">vertex()</a>\nis used to specify the vertex coordinates for points, lines, triangles,\nquads, and polygons. It is used exclusively within the <a href="#/p5/beginShape">beginShape()</a> and\n<a href="#/p5/endShape">endShape()</a> functions.</p>\n',
                  itemtype: 'method',
                  name: 'vertex',
                  chainable: 1,
                  example: [
                    "\n<div>\n<code>\nstrokeWeight(3);\nbeginShape(POINTS);\nvertex(30, 20);\nvertex(85, 20);\nvertex(85, 75);\nvertex(30, 75);\nendShape();\n</code>\n</div>\n\n<div>\n<code>\ncreateCanvas(100, 100, WEBGL);\nbackground(240, 240, 240);\nfill(237, 34, 93);\nnoStroke();\nbeginShape();\nvertex(0, 35);\nvertex(35, 0);\nvertex(0, -35);\nvertex(-35, 0);\nendShape();\n</code>\n</div>\n\n<div>\n<code>\ncreateCanvas(100, 100, WEBGL);\nbackground(240, 240, 240);\nfill(237, 34, 93);\nnoStroke();\nbeginShape();\nvertex(-10, 10);\nvertex(0, 35);\nvertex(10, 10);\nvertex(35, 0);\nvertex(10, -8);\nvertex(0, -35);\nvertex(-10, -8);\nvertex(-35, 0);\nendShape();\n</code>\n</div>\n\n<div>\n<code>\nstrokeWeight(3);\nstroke(237, 34, 93);\nbeginShape(LINES);\nvertex(10, 35);\nvertex(90, 35);\nvertex(10, 65);\nvertex(90, 65);\nvertex(35, 10);\nvertex(35, 90);\nvertex(65, 10);\nvertex(65, 90);\nendShape();\n</code>\n</div>\n\n<div>\n<code>\n// Click to change the number of sides.\n// In WebGL mode, custom shapes will only\n// display hollow fill sections when\n// all calls to vertex() use the same z-value.\n\nlet sides = 3;\nlet angle, px, py;\n\nfunction setup() {\n  createCanvas(100, 100, WEBGL);\n  setAttributes('antialias', true);\n  fill(237, 34, 93);\n  strokeWeight(3);\n}\n\nfunction draw() {\n  background(200);\n  rotateX(frameCount * 0.01);\n  rotateZ(frameCount * 0.01);\n  ngon(sides, 0, 0, 80);\n}\n\nfunction mouseClicked() {\n  if (sides > 6) {\n    sides = 3;\n  } else {\n    sides++;\n  }\n}\n\nfunction ngon(n, x, y, d) {\n  beginShape();\n  for (let i = 0; i < n + 1; i++) {\n    angle = TWO_PI / n * i;\n    px = x + sin(angle) * d / 2;\n    py = y - cos(angle) * d / 2;\n    vertex(px, py, 0);\n  }\n  for (let i = 0; i < n + 1; i++) {\n    angle = TWO_PI / n * i;\n    px = x + sin(angle) * d / 4;\n    py = y - cos(angle) * d / 4;\n    vertex(px, py, 0);\n  }\n  endShape();\n}\n</code>\n</div>"
                  ],
                  alt:
                    '4 black points in a square shape in middle-right of canvas.\n4 points making a diamond shape.\n8 points making a star.\n8 points making 4 lines.\nA rotating 3D shape with a hollow section in the middle.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: 'Vertex',
                  overloads: [
                    {
                      line: 811,
                      params: [
                        {
                          name: 'x',
                          description: '<p>x-coordinate of the vertex</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y',
                          description: '<p>y-coordinate of the vertex</p>\n',
                          type: 'Number'
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 943,
                      params: [
                        {
                          name: 'x',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z',
                          description: '<p>z-coordinate of the vertex</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'u',
                          description: '<p>the vertex&#39;s texture u-coordinate</p>\n',
                          type: 'Number',
                          optional: true
                        },
                        {
                          name: 'v',
                          description: '<p>the vertex&#39;s texture v-coordinate</p>\n',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/core/constants.js',
                  line: 10,
                  description: '<p>The default, two-dimensional renderer.</p>\n',
                  itemtype: 'property',
                  name: 'P2D',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 16,
                  description:
                    '<p>One of the two render modes in p5.js: P2D (default renderer) and WEBGL\nEnables 3D render by introducing the third dimension: Z</p>\n',
                  itemtype: 'property',
                  name: 'WEBGL',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 25,
                  itemtype: 'property',
                  name: 'ARROW',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 30,
                  itemtype: 'property',
                  name: 'CROSS',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 35,
                  itemtype: 'property',
                  name: 'HAND',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 40,
                  itemtype: 'property',
                  name: 'MOVE',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 45,
                  itemtype: 'property',
                  name: 'TEXT',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 50,
                  itemtype: 'property',
                  name: 'WAIT',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 58,
                  description:
                    '<p>HALF_PI is a mathematical constant with the value\n1.57079632679489661923. It is half the ratio of the\ncircumference of a circle to its diameter. It is useful in\ncombination with the trigonometric functions <a href="#/p5/sin">sin()</a> and <a href="#/p5/cos">cos()</a>.</p>\n',
                  itemtype: 'property',
                  name: 'HALF_PI',
                  type: 'Number',
                  final: 1,
                  example: ['\n<div><code>\narc(50, 50, 80, 80, 0, HALF_PI);\n</code></div>'],
                  alt: '80x80 white quarter-circle with curve toward bottom right of canvas.',
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 77,
                  description:
                    '<p>PI is a mathematical constant with the value\n3.14159265358979323846. It is the ratio of the circumference\nof a circle to its diameter. It is useful in combination with\nthe trigonometric functions <a href="#/p5/sin">sin()</a> and <a href="#/p5/cos">cos()</a>.</p>\n',
                  itemtype: 'property',
                  name: 'PI',
                  type: 'Number',
                  final: 1,
                  example: ['\n<div><code>\narc(50, 50, 80, 80, 0, PI);\n</code></div>'],
                  alt: 'white half-circle with curve toward bottom of canvas.',
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 96,
                  description:
                    '<p>QUARTER_PI is a mathematical constant with the value 0.7853982.\nIt is one quarter the ratio of the circumference of a circle to\nits diameter. It is useful in combination with the trigonometric\nfunctions <a href="#/p5/sin">sin()</a> and <a href="#/p5/cos">cos()</a>.</p>\n',
                  itemtype: 'property',
                  name: 'QUARTER_PI',
                  type: 'Number',
                  final: 1,
                  example: [
                    '\n<div><code>\narc(50, 50, 80, 80, 0, QUARTER_PI);\n</code></div>'
                  ],
                  alt:
                    'white eighth-circle rotated about 40 degrees with curve bottom right canvas.',
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 115,
                  description:
                    '<p>TAU is an alias for TWO_PI, a mathematical constant with the\nvalue 6.28318530717958647693. It is twice the ratio of the\ncircumference of a circle to its diameter. It is useful in\ncombination with the trigonometric functions <a href="#/p5/sin">sin()</a> and <a href="#/p5/cos">cos()</a>.</p>\n',
                  itemtype: 'property',
                  name: 'TAU',
                  type: 'Number',
                  final: 1,
                  example: ['\n<div><code>\narc(50, 50, 80, 80, 0, TAU);\n</code></div>'],
                  alt: '80x80 white ellipse shape in center of canvas.',
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 134,
                  description:
                    '<p>TWO_PI is a mathematical constant with the value\n6.28318530717958647693. It is twice the ratio of the\ncircumference of a circle to its diameter. It is useful in\ncombination with the trigonometric functions <a href="#/p5/sin">sin()</a> and <a href="#/p5/cos">cos()</a>.</p>\n',
                  itemtype: 'property',
                  name: 'TWO_PI',
                  type: 'Number',
                  final: 1,
                  example: ['\n<div><code>\narc(50, 50, 80, 80, 0, TWO_PI);\n</code></div>'],
                  alt: '80x80 white ellipse shape in center of canvas.',
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 153,
                  description:
                    '<p>Constant to be used with <a href="#/p5/angleMode">angleMode()</a> function, to set the mode which\np5.js interprates and calculates angles (either DEGREES or RADIANS).</p>\n',
                  itemtype: 'property',
                  name: 'DEGREES',
                  type: 'String',
                  final: 1,
                  example: [
                    "\n<div class='norender'><code>\nfunction setup() {\n  angleMode(DEGREES);\n}\n</code></div>"
                  ],
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 167,
                  description:
                    '<p>Constant to be used with <a href="#/p5/angleMode">angleMode()</a> function, to set the mode which\np5.js interprates and calculates angles (either RADIANS or DEGREES).</p>\n',
                  itemtype: 'property',
                  name: 'RADIANS',
                  type: 'String',
                  final: 1,
                  example: [
                    "\n<div class='norender'><code>\nfunction setup() {\n  angleMode(RADIANS);\n}\n</code></div>"
                  ],
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 185,
                  itemtype: 'property',
                  name: 'CORNER',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 190,
                  itemtype: 'property',
                  name: 'CORNERS',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 195,
                  itemtype: 'property',
                  name: 'RADIUS',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 200,
                  itemtype: 'property',
                  name: 'RIGHT',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 205,
                  itemtype: 'property',
                  name: 'LEFT',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 210,
                  itemtype: 'property',
                  name: 'CENTER',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 215,
                  itemtype: 'property',
                  name: 'TOP',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 220,
                  itemtype: 'property',
                  name: 'BOTTOM',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 225,
                  itemtype: 'property',
                  name: 'BASELINE',
                  type: 'String',
                  final: 1,
                  default: 'alphabetic',
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 231,
                  itemtype: 'property',
                  name: 'POINTS',
                  type: 'Number',
                  final: 1,
                  default: '0x0000',
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 237,
                  itemtype: 'property',
                  name: 'LINES',
                  type: 'Number',
                  final: 1,
                  default: '0x0001',
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 243,
                  itemtype: 'property',
                  name: 'LINE_STRIP',
                  type: 'Number',
                  final: 1,
                  default: '0x0003',
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 249,
                  itemtype: 'property',
                  name: 'LINE_LOOP',
                  type: 'Number',
                  final: 1,
                  default: '0x0002',
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 255,
                  itemtype: 'property',
                  name: 'TRIANGLES',
                  type: 'Number',
                  final: 1,
                  default: '0x0004',
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 261,
                  itemtype: 'property',
                  name: 'TRIANGLE_FAN',
                  type: 'Number',
                  final: 1,
                  default: '0x0006',
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 267,
                  itemtype: 'property',
                  name: 'TRIANGLE_STRIP',
                  type: 'Number',
                  final: 1,
                  default: '0x0005',
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 273,
                  itemtype: 'property',
                  name: 'QUADS',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 278,
                  itemtype: 'property',
                  name: 'QUAD_STRIP',
                  type: 'String',
                  final: 1,
                  default: 'quad_strip',
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 284,
                  itemtype: 'property',
                  name: 'CLOSE',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 289,
                  itemtype: 'property',
                  name: 'OPEN',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 294,
                  itemtype: 'property',
                  name: 'CHORD',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 299,
                  itemtype: 'property',
                  name: 'PIE',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 304,
                  itemtype: 'property',
                  name: 'PROJECT',
                  type: 'String',
                  final: 1,
                  default: 'square',
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 310,
                  itemtype: 'property',
                  name: 'SQUARE',
                  type: 'String',
                  final: 1,
                  default: 'butt',
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 316,
                  itemtype: 'property',
                  name: 'ROUND',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 321,
                  itemtype: 'property',
                  name: 'BEVEL',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 326,
                  itemtype: 'property',
                  name: 'MITER',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 333,
                  itemtype: 'property',
                  name: 'RGB',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 338,
                  itemtype: 'property',
                  name: 'HSB',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 343,
                  itemtype: 'property',
                  name: 'HSL',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 350,
                  description:
                    '<p>AUTO allows us to automatically set the width or height of an element (but not both),\nbased on the current height and width of the element. Only one parameter can\nbe passed to the <a href="/#/p5.Element/size">size</a> function as AUTO, at a time.</p>\n',
                  itemtype: 'property',
                  name: 'AUTO',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 360,
                  itemtype: 'property',
                  name: 'ALT',
                  type: 'Number',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 366,
                  itemtype: 'property',
                  name: 'BACKSPACE',
                  type: 'Number',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 371,
                  itemtype: 'property',
                  name: 'CONTROL',
                  type: 'Number',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 376,
                  itemtype: 'property',
                  name: 'DELETE',
                  type: 'Number',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 381,
                  itemtype: 'property',
                  name: 'DOWN_ARROW',
                  type: 'Number',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 386,
                  itemtype: 'property',
                  name: 'ENTER',
                  type: 'Number',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 391,
                  itemtype: 'property',
                  name: 'ESCAPE',
                  type: 'Number',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 396,
                  itemtype: 'property',
                  name: 'LEFT_ARROW',
                  type: 'Number',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 401,
                  itemtype: 'property',
                  name: 'OPTION',
                  type: 'Number',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 406,
                  itemtype: 'property',
                  name: 'RETURN',
                  type: 'Number',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 411,
                  itemtype: 'property',
                  name: 'RIGHT_ARROW',
                  type: 'Number',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 416,
                  itemtype: 'property',
                  name: 'SHIFT',
                  type: 'Number',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 421,
                  itemtype: 'property',
                  name: 'TAB',
                  type: 'Number',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 426,
                  itemtype: 'property',
                  name: 'UP_ARROW',
                  type: 'Number',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 433,
                  itemtype: 'property',
                  name: 'BLEND',
                  type: 'String',
                  final: 1,
                  default: 'source-over',
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 439,
                  itemtype: 'property',
                  name: 'REMOVE',
                  type: 'String',
                  final: 1,
                  default: 'destination-out',
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 445,
                  itemtype: 'property',
                  name: 'ADD',
                  type: 'String',
                  final: 1,
                  default: 'lighter',
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 453,
                  itemtype: 'property',
                  name: 'DARKEST',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 458,
                  itemtype: 'property',
                  name: 'LIGHTEST',
                  type: 'String',
                  final: 1,
                  default: 'lighten',
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 464,
                  itemtype: 'property',
                  name: 'DIFFERENCE',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 469,
                  itemtype: 'property',
                  name: 'SUBTRACT',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 474,
                  itemtype: 'property',
                  name: 'EXCLUSION',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 479,
                  itemtype: 'property',
                  name: 'MULTIPLY',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 484,
                  itemtype: 'property',
                  name: 'SCREEN',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 489,
                  itemtype: 'property',
                  name: 'REPLACE',
                  type: 'String',
                  final: 1,
                  default: 'copy',
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 495,
                  itemtype: 'property',
                  name: 'OVERLAY',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 500,
                  itemtype: 'property',
                  name: 'HARD_LIGHT',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 505,
                  itemtype: 'property',
                  name: 'SOFT_LIGHT',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 510,
                  itemtype: 'property',
                  name: 'DODGE',
                  type: 'String',
                  final: 1,
                  default: 'color-dodge',
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 516,
                  itemtype: 'property',
                  name: 'BURN',
                  type: 'String',
                  final: 1,
                  default: 'color-burn',
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 524,
                  itemtype: 'property',
                  name: 'THRESHOLD',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 529,
                  itemtype: 'property',
                  name: 'GRAY',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 534,
                  itemtype: 'property',
                  name: 'OPAQUE',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 539,
                  itemtype: 'property',
                  name: 'INVERT',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 544,
                  itemtype: 'property',
                  name: 'POSTERIZE',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 549,
                  itemtype: 'property',
                  name: 'DILATE',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 554,
                  itemtype: 'property',
                  name: 'ERODE',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 559,
                  itemtype: 'property',
                  name: 'BLUR',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 566,
                  itemtype: 'property',
                  name: 'NORMAL',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 571,
                  itemtype: 'property',
                  name: 'ITALIC',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 576,
                  itemtype: 'property',
                  name: 'BOLD',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 581,
                  itemtype: 'property',
                  name: 'BOLDITALIC',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 593,
                  itemtype: 'property',
                  name: 'LINEAR',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 598,
                  itemtype: 'property',
                  name: 'QUADRATIC',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 603,
                  itemtype: 'property',
                  name: 'BEZIER',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 608,
                  itemtype: 'property',
                  name: 'CURVE',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 615,
                  itemtype: 'property',
                  name: 'STROKE',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 620,
                  itemtype: 'property',
                  name: 'FILL',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 625,
                  itemtype: 'property',
                  name: 'TEXTURE',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 630,
                  itemtype: 'property',
                  name: 'IMMEDIATE',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 638,
                  itemtype: 'property',
                  name: 'IMAGE',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 646,
                  itemtype: 'property',
                  name: 'NEAREST',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 651,
                  itemtype: 'property',
                  name: 'REPEAT',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 656,
                  itemtype: 'property',
                  name: 'CLAMP',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 661,
                  itemtype: 'property',
                  name: 'MIRROR',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 668,
                  itemtype: 'property',
                  name: 'LANDSCAPE',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 673,
                  itemtype: 'property',
                  name: 'PORTRAIT',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 683,
                  itemtype: 'property',
                  name: 'GRID',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/constants.js',
                  line: 689,
                  itemtype: 'property',
                  name: 'AXES',
                  type: 'String',
                  final: 1,
                  class: 'p5',
                  module: 'Constants',
                  submodule: 'Constants'
                },
                {
                  file: 'src/core/environment.js',
                  line: 20,
                  description:
                    '<p>The <a href="#/p5/print">print()</a> function writes to the console area of your browser.\nThis function is often helpful for looking at the data a program is\nproducing. This function creates a new line of text for each call to\nthe function. Individual elements can be\nseparated with quotes (&quot;&quot;) and joined with the addition operator (+).</p>\n<p>Note that calling print() without any arguments invokes the window.print()\nfunction which opens the browser&#39;s print dialog. To print a blank line\nto console you can write print(&#39;\\n&#39;).</p>\n',
                  itemtype: 'method',
                  name: 'print',
                  params: [
                    {
                      name: 'contents',
                      description:
                        '<p>any combination of Number, String, Object, Boolean,\n                      Array to print</p>\n',
                      type: 'Any'
                    }
                  ],
                  example: [
                    "\n<div><code class='norender'>\nlet x = 10;\nprint('The value of x is ' + x);\n// prints \"The value of x is 10\"\n</code></div>"
                  ],
                  alt: 'default grey canvas',
                  class: 'p5',
                  module: 'Environment',
                  submodule: 'Environment'
                },
                {
                  file: 'src/core/environment.js',
                  line: 51,
                  description:
                    '<p>The system variable <a href="#/p5/frameCount">frameCount</a> contains the number of frames that have\nbeen displayed since the program started. Inside <a href="#/p5/setup">setup()</a> the value is 0,\nafter the first iteration of draw it is 1, etc.</p>\n',
                  itemtype: 'property',
                  name: 'frameCount',
                  type: 'Integer',
                  readonly: '',
                  example: [
                    '\n  <div><code>\nfunction setup() {\n  frameRate(30);\n  textSize(30);\n  textAlign(CENTER);\n}\n\nfunction draw() {\n  background(200);\n  text(frameCount, width / 2, height / 2);\n}\n</code></div>'
                  ],
                  alt: 'numbers rapidly counting upward with frame count set to 30.',
                  class: 'p5',
                  module: 'Environment',
                  submodule: 'Environment'
                },
                {
                  file: 'src/core/environment.js',
                  line: 78,
                  description:
                    '<p>The system variable <a href="#/p5/deltaTime">deltaTime</a> contains the time\ndifference between the beginning of the previous frame and the beginning\nof the current frame in milliseconds.\n<br><br>\nThis variable is useful for creating time sensitive animation or physics\ncalculation that should stay constant regardless of frame rate.</p>\n',
                  itemtype: 'property',
                  name: 'deltaTime',
                  type: 'Integer',
                  readonly: '',
                  example: [
                    '\n<div><code>\nlet rectX = 0;\nlet fr = 30; //starting FPS\nlet clr;\n\nfunction setup() {\n  background(200);\n  frameRate(fr); // Attempt to refresh at starting FPS\n  clr = color(255, 0, 0);\n}\n\nfunction draw() {\n  background(200);\n  rectX = rectX + 1 * (deltaTime / 50); // Move Rectangle in relation to deltaTime\n\n  if (rectX >= width) {\n    // If you go off screen.\n    if (fr === 30) {\n      clr = color(0, 0, 255);\n      fr = 10;\n      frameRate(fr); // make frameRate 10 FPS\n    } else {\n      clr = color(255, 0, 0);\n      fr = 30;\n      frameRate(fr); // make frameRate 30 FPS\n    }\n    rectX = 0;\n  }\n  fill(clr);\n  rect(rectX, 40, 20, 20);\n}\n</code></div>'
                  ],
                  alt:
                    'red rect moves left to right, followed by blue rect moving at the same speed\nwith a lower frame rate. Loops.',
                  class: 'p5',
                  module: 'Environment',
                  submodule: 'Environment'
                },
                {
                  file: 'src/core/environment.js',
                  line: 129,
                  description:
                    '<p>Confirms if the window a p5.js program is in is &quot;focused,&quot; meaning that\nthe sketch will accept mouse or keyboard input. This variable is\n&quot;true&quot; if the window is focused and &quot;false&quot; if not.</p>\n',
                  itemtype: 'property',
                  name: 'focused',
                  type: 'Boolean',
                  readonly: '',
                  example: [
                    '\n<div><code>\n// To demonstrate, put two windows side by side.\n// Click on the window that the p5 sketch isn\'t in!\nfunction draw() {\n  background(200);\n  noStroke();\n  fill(0, 200, 0);\n  ellipse(25, 25, 50, 50);\n\n  if (!focused) {\n   // or "if (focused === false)"\n    stroke(200, 0, 0);\n    line(0, 0, 100, 100);\n    line(100, 0, 0, 100);\n  }\n}\n</code></div>'
                  ],
                  alt:
                    'green 50x50 ellipse at top left. Red X covers canvas when page focus changes',
                  class: 'p5',
                  module: 'Environment',
                  submodule: 'Environment'
                },
                {
                  file: 'src/core/environment.js',
                  line: 161,
                  description:
                    '<p>Sets the cursor to a predefined symbol or an image, or makes it visible\nif already hidden. If you are trying to set an image as the cursor, the\nrecommended size is 16x16 or 32x32 pixels. The values for parameters x and y\nmust be less than the dimensions of the image.</p>\n',
                  itemtype: 'method',
                  name: 'cursor',
                  params: [
                    {
                      name: 'type',
                      description:
                        '<p>Built-In: either ARROW, CROSS, HAND, MOVE, TEXT and WAIT\n                              Native CSS properties: &#39;grab&#39;, &#39;progress&#39;, &#39;cell&#39; etc.\n                              External: path for cursor&#39;s images\n                              (Allowed File extensions: .cur, .gif, .jpg, .jpeg, .png)\n                              For more information on Native CSS cursors and url visit:\n                              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/cursor">https://developer.mozilla.org/en-US/docs/Web/CSS/cursor</a></p>\n',
                      type: 'String|Constant'
                    },
                    {
                      name: 'x',
                      description:
                        '<p>the horizontal active spot of the cursor (must be less than 32)</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'y',
                      description:
                        '<p>the vertical active spot of the cursor (must be less than 32)</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  example: [
                    "\n<div><code>\n// Move the mouse across the quadrants\n// to see the cursor change\nfunction draw() {\n  line(width / 2, 0, width / 2, height);\n  line(0, height / 2, width, height / 2);\n  if (mouseX < 50 && mouseY < 50) {\n    cursor(CROSS);\n  } else if (mouseX > 50 && mouseY < 50) {\n    cursor('progress');\n  } else if (mouseX > 50 && mouseY > 50) {\n    cursor('https://s3.amazonaws.com/mupublicdata/cursor.cur');\n  } else {\n    cursor('grab');\n  }\n}\n</code></div>"
                  ],
                  alt:
                    'canvas is divided into four quadrants. cursor on first is a cross, second is a progress,\nthird is a custom cursor using path to the cursor and fourth is a grab.',
                  class: 'p5',
                  module: 'Environment',
                  submodule: 'Environment'
                },
                {
                  file: 'src/core/environment.js',
                  line: 230,
                  description:
                    '<p>Specifies the number of frames to be displayed every second. For example,\nthe function call frameRate(30) will attempt to refresh 30 times a second.\nIf the processor is not fast enough to maintain the specified rate, the\nframe rate will not be achieved. Setting the frame rate within <a href="#/p5/setup">setup()</a> is\nrecommended. The default frame rate is based on the frame rate of the display\n(here also called &quot;refresh rate&quot;), which is set to 60 frames per second on most\ncomputers. A frame rate of 24 frames per second (usual for movies) or above\nwill be enough for smooth animations\nThis is the same as setFrameRate(val).\n<br><br>\nCalling <a href="#/p5/frameRate">frameRate()</a> with no arguments returns the current framerate. The\ndraw function must run at least once before it will return a value. This\nis the same as <a href="#/p5/getFrameRate">getFrameRate()</a>.\n<br><br>\nCalling <a href="#/p5/frameRate">frameRate()</a> with arguments that are not of the type numbers\nor are non positive also returns current framerate.</p>\n',
                  itemtype: 'method',
                  name: 'frameRate',
                  chainable: 1,
                  example: [
                    '\n\n<div><code>\nlet rectX = 0;\nlet fr = 30; //starting FPS\nlet clr;\n\nfunction setup() {\n  background(200);\n  frameRate(fr); // Attempt to refresh at starting FPS\n  clr = color(255, 0, 0);\n}\n\nfunction draw() {\n  background(200);\n  rectX = rectX += 1; // Move Rectangle\n\n  if (rectX >= width) {\n   // If you go off screen.\n    if (fr === 30) {\n      clr = color(0, 0, 255);\n      fr = 10;\n      frameRate(fr); // make frameRate 10 FPS\n    } else {\n      clr = color(255, 0, 0);\n      fr = 30;\n      frameRate(fr); // make frameRate 30 FPS\n    }\n    rectX = 0;\n  }\n  fill(clr);\n  rect(rectX, 40, 20, 20);\n}\n</code></div>'
                  ],
                  alt:
                    'blue rect moves left to right, followed by red rect moving faster. Loops.',
                  class: 'p5',
                  module: 'Environment',
                  submodule: 'Environment',
                  overloads: [
                    {
                      line: 230,
                      params: [
                        {
                          name: 'fps',
                          description:
                            '<p>number of frames to be displayed every second</p>\n',
                          type: 'Number'
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 291,
                      params: [],
                      return: {
                        description: 'current frameRate',
                        type: 'Number'
                      }
                    }
                  ]
                },
                {
                  file: 'src/core/environment.js',
                  line: 333,
                  description: '<p>Hides the cursor from view.</p>\n',
                  itemtype: 'method',
                  name: 'noCursor',
                  example: [
                    '\n<div><code>\nfunction setup() {\n  noCursor();\n}\n\nfunction draw() {\n  background(200);\n  ellipse(mouseX, mouseY, 10, 10);\n}\n</code></div>'
                  ],
                  alt: 'cursor becomes 10x 10 white ellipse the moves with mouse x and y.',
                  class: 'p5',
                  module: 'Environment',
                  submodule: 'Environment'
                },
                {
                  file: 'src/core/environment.js',
                  line: 358,
                  description:
                    '<p>System variable that stores the width of the screen display according to The\ndefault <a href="#/p5/pixelDensity">pixelDensity</a>. This is used to run a\nfull-screen program on any display size. To return actual screen size,\nmultiply this by pixelDensity.</p>\n',
                  itemtype: 'property',
                  name: 'displayWidth',
                  type: 'Number',
                  readonly: '',
                  example: [
                    '\n<div class="norender"><code>\ncreateCanvas(displayWidth, displayHeight);\n</code></div>'
                  ],
                  alt: 'cursor becomes 10x 10 white ellipse the moves with mouse x and y.',
                  class: 'p5',
                  module: 'Environment',
                  submodule: 'Environment'
                },
                {
                  file: 'src/core/environment.js',
                  line: 377,
                  description:
                    '<p>System variable that stores the height of the screen display according to The\ndefault <a href="#/p5/pixelDensity">pixelDensity</a>. This is used to run a\nfull-screen program on any display size. To return actual screen size,\nmultiply this by pixelDensity.</p>\n',
                  itemtype: 'property',
                  name: 'displayHeight',
                  type: 'Number',
                  readonly: '',
                  example: [
                    '\n<div class="norender"><code>\ncreateCanvas(displayWidth, displayHeight);\n</code></div>'
                  ],
                  alt: 'no display.',
                  class: 'p5',
                  module: 'Environment',
                  submodule: 'Environment'
                },
                {
                  file: 'src/core/environment.js',
                  line: 396,
                  description:
                    '<p>System variable that stores the width of the inner window, it maps to\nwindow.innerWidth.</p>\n',
                  itemtype: 'property',
                  name: 'windowWidth',
                  type: 'Number',
                  readonly: '',
                  example: [
                    '\n<div class="norender"><code>\ncreateCanvas(windowWidth, windowHeight);\n</code></div>'
                  ],
                  alt: 'no display.',
                  class: 'p5',
                  module: 'Environment',
                  submodule: 'Environment'
                },
                {
                  file: 'src/core/environment.js',
                  line: 412,
                  description:
                    '<p>System variable that stores the height of the inner window, it maps to\nwindow.innerHeight.</p>\n',
                  itemtype: 'property',
                  name: 'windowHeight',
                  type: 'Number',
                  readonly: '',
                  example: [
                    '\n<div class="norender"><code>\ncreateCanvas(windowWidth, windowHeight);\n</code></div>'
                  ],
                  alt: 'no display.',
                  class: 'p5',
                  module: 'Environment',
                  submodule: 'Environment'
                },
                {
                  file: 'src/core/environment.js',
                  line: 428,
                  description:
                    '<p>The <a href="#/p5/windowResized">windowResized()</a> function is called once every time the browser window\nis resized. This is a good place to resize the canvas or do any other\nadjustments to accommodate the new window size.</p>\n',
                  itemtype: 'method',
                  name: 'windowResized',
                  example: [
                    '\n<div class="norender"><code>\nfunction setup() {\n  createCanvas(windowWidth, windowHeight);\n}\n\nfunction draw() {\n  background(0, 100, 200);\n}\n\nfunction windowResized() {\n  resizeCanvas(windowWidth, windowHeight);\n}\n</code></div>'
                  ],
                  alt: 'no display.',
                  class: 'p5',
                  module: 'Environment',
                  submodule: 'Environment'
                },
                {
                  file: 'src/core/environment.js',
                  line: 482,
                  description:
                    '<p>System variable that stores the width of the drawing canvas. This value\nis set by the first parameter of the <a href="#/p5/createCanvas">createCanvas()</a> function.\nFor example, the function call createCanvas(320, 240) sets the width\nvariable to the value 320. The value of width defaults to 100 if\n<a href="#/p5/createCanvas">createCanvas()</a> is not used in a program.</p>\n',
                  itemtype: 'property',
                  name: 'width',
                  type: 'Number',
                  readonly: '',
                  class: 'p5',
                  module: 'Environment',
                  submodule: 'Environment'
                },
                {
                  file: 'src/core/environment.js',
                  line: 494,
                  description:
                    '<p>System variable that stores the height of the drawing canvas. This value\nis set by the second parameter of the <a href="#/p5/createCanvas">createCanvas()</a> function. For\nexample, the function call createCanvas(320, 240) sets the height\nvariable to the value 240. The value of height defaults to 100 if\n<a href="#/p5/createCanvas">createCanvas()</a> is not used in a program.</p>\n',
                  itemtype: 'property',
                  name: 'height',
                  type: 'Number',
                  readonly: '',
                  class: 'p5',
                  module: 'Environment',
                  submodule: 'Environment'
                },
                {
                  file: 'src/core/environment.js',
                  line: 506,
                  description:
                    '<p>If argument is given, sets the sketch to fullscreen or not based on the\nvalue of the argument. If no argument is given, returns the current\nfullscreen state. Note that due to browser restrictions this can only\nbe called on user input, for example, on mouse press like the example\nbelow.</p>\n',
                  itemtype: 'method',
                  name: 'fullscreen',
                  params: [
                    {
                      name: 'val',
                      description:
                        '<p>whether the sketch should be in fullscreen mode\nor not</p>\n',
                      type: 'Boolean',
                      optional: true
                    }
                  ],
                  return: {
                    description: 'current fullscreen state',
                    type: 'Boolean'
                  },
                  example: [
                    '\n<div>\n<code>\n// Clicking in the box toggles fullscreen on and off.\nfunction setup() {\n  background(200);\n}\nfunction mousePressed() {\n  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {\n    let fs = fullscreen();\n    fullscreen(!fs);\n  }\n}\n</code>\n</div>'
                  ],
                  alt: 'no display.',
                  class: 'p5',
                  module: 'Environment',
                  submodule: 'Environment'
                },
                {
                  file: 'src/core/environment.js',
                  line: 557,
                  description:
                    '<p>Sets the pixel scaling for high pixel density displays. By default\npixel density is set to match display density, call pixelDensity(1)\nto turn this off. Calling <a href="#/p5/pixelDensity">pixelDensity()</a> with no arguments returns\nthe current pixel density of the sketch.</p>\n',
                  itemtype: 'method',
                  name: 'pixelDensity',
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\nfunction setup() {\n  pixelDensity(1);\n  createCanvas(100, 100);\n  background(200);\n  ellipse(width / 2, height / 2, 50, 50);\n}\n</code>\n</div>\n<div>\n<code>\nfunction setup() {\n  pixelDensity(3.0);\n  createCanvas(100, 100);\n  background(200);\n  ellipse(width / 2, height / 2, 50, 50);\n}\n</code>\n</div>'
                  ],
                  alt:
                    'fuzzy 50x50 white ellipse with black outline in center of canvas.\nsharp 50x50 white ellipse with black outline in center of canvas.',
                  class: 'p5',
                  module: 'Environment',
                  submodule: 'Environment',
                  overloads: [
                    {
                      line: 557,
                      params: [
                        {
                          name: 'val',
                          description: '<p>whether or how much the sketch should scale</p>\n',
                          type: 'Number'
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 592,
                      params: [],
                      return: {
                        description: 'current pixel density of the sketch',
                        type: 'Number'
                      }
                    }
                  ]
                },
                {
                  file: 'src/core/environment.js',
                  line: 611,
                  description:
                    '<p>Returns the pixel density of the current display the sketch is running on.</p>\n',
                  itemtype: 'method',
                  name: 'displayDensity',
                  return: {
                    description: 'current pixel density of the display',
                    type: 'Number'
                  },
                  example: [
                    '\n<div>\n<code>\nfunction setup() {\n  let density = displayDensity();\n  pixelDensity(density);\n  createCanvas(100, 100);\n  background(200);\n  ellipse(width / 2, height / 2, 50, 50);\n}\n</code>\n</div>'
                  ],
                  alt: '50x50 white ellipse with black outline in center of canvas.',
                  class: 'p5',
                  module: 'Environment',
                  submodule: 'Environment'
                },
                {
                  file: 'src/core/environment.js',
                  line: 666,
                  description: '<p>Gets the current URL.</p>\n',
                  itemtype: 'method',
                  name: 'getURL',
                  return: {
                    description: 'url',
                    type: 'String'
                  },
                  example: [
                    '\n<div>\n<code>\nlet url;\nlet x = 100;\n\nfunction setup() {\n  fill(0);\n  noStroke();\n  url = getURL();\n}\n\nfunction draw() {\n  background(200);\n  text(url, x, height / 2);\n  x--;\n}\n</code>\n</div>'
                  ],
                  alt:
                    'current url (http://p5js.org/reference/#/p5/getURL) moves right to left.',
                  class: 'p5',
                  module: 'Environment',
                  submodule: 'Environment'
                },
                {
                  file: 'src/core/environment.js',
                  line: 695,
                  description: '<p>Gets the current URL path as an array.</p>\n',
                  itemtype: 'method',
                  name: 'getURLPath',
                  return: {
                    description: 'path components',
                    type: 'String[]'
                  },
                  example: [
                    "\n<div class='norender'><code>\nfunction setup() {\n  let urlPath = getURLPath();\n  for (let i = 0; i < urlPath.length; i++) {\n    text(urlPath[i], 10, i * 20 + 20);\n  }\n}\n</code></div>"
                  ],
                  alt: 'no display',
                  class: 'p5',
                  module: 'Environment',
                  submodule: 'Environment'
                },
                {
                  file: 'src/core/environment.js',
                  line: 715,
                  description: '<p>Gets the current URL params as an Object.</p>\n',
                  itemtype: 'method',
                  name: 'getURLParams',
                  return: {
                    description: 'URL params',
                    type: 'Object'
                  },
                  example: [
                    "\n<div class='norender notest'>\n<code>\n// Example: http://p5js.org?year=2014&month=May&day=15\n\nfunction setup() {\n  let params = getURLParams();\n  text(params.day, 10, 20);\n  text(params.month, 10, 40);\n  text(params.year, 10, 60);\n}\n</code>\n</div>"
                  ],
                  alt: 'no display.',
                  class: 'p5',
                  module: 'Environment',
                  submodule: 'Environment'
                },
                {
                  file: 'src/core/error_helpers.js',
                  line: 1,
                  requires: [
                    'core\n\nThis is the main file for the Friendly Error System (FES). Here is a\nbrief outline of the functions called in this system.\n\nThe FES may be invoked by a call to either (1) _validateParameters',
                    '(2) _friendlyFileLoadError',
                    '(3) _friendlyError',
                    'or (4) helpForMisusedAtTopLevelCode.\n\nhelpForMisusedAtTopLevelCode is called by this file on window load to check for use\nof p5.js functions outside of setup() or draw()\nItems 1-3 above are called by functions in the p5 library located in other files.\n\n_friendlyFileLoadError is called by the loadX() methods.\n_friendlyError can be called by any function to offer a helpful error message.\n\n_validateParameters is called by functions in the p5.js API to help users ensure\nther are calling p5 function with the right parameter types. The property\ndisableFriendlyErrors = false can be set from a p5.js sketch to turn off parameter\nchecking. The call sequence from _validateParameters looks something like this:\n\n_validateParameters\n  lookupParamDoc\n  scoreOverload\n    testParamTypes\n    testParamType\n  getOverloadErrors\n  _friendlyParamError\n    ValidationError\n    report\n      friendlyWelcome\n\nThe call sequences to _friendlyFileLoadError and _friendlyError are like this:\n_friendlyFileLoadError\n  report\n\n_friendlyError\n  report\n\nreport() is the main function that prints directly to console with the output\nof the error helper message. Note: friendlyWelcome() also prints to console directly.'
                  ],
                  class: 'p5',
                  module: 'Environment'
                },
                {
                  file: 'src/core/error_helpers.js',
                  line: 600,
                  description:
                    '<p>Validates parameters\nparam  {String}               func    the name of the function\nparam  {Array}                args    user input arguments</p>\n<p>example:\n const a;\n ellipse(10,10,a,5);\nconsole ouput:\n &quot;It looks like ellipse received an empty variable in spot #2.&quot;</p>\n<p>example:\n ellipse(10,&quot;foo&quot;,5,5);\nconsole output:\n &quot;ellipse was expecting a number for parameter #1,\n          received &quot;foo&quot; instead.&quot;</p>\n',
                  class: 'p5',
                  module: 'Environment'
                },
                {
                  file: 'src/core/error_helpers.js',
                  line: 661,
                  description:
                    '<p>Prints out all the colors in the color pallete with white text.\nFor color blindness testing.</p>\n',
                  class: 'p5',
                  module: 'Environment'
                },
                {
                  file: 'src/core/helpers.js',
                  line: 1,
                  requires: ['constants'],
                  class: 'p5',
                  module: 'Environment'
                },
                {
                  file: 'src/core/legacy.js',
                  line: 1,
                  requires: [
                    'core\nThese are functions that are part of the Processing API but are not part of\nthe p5.js API. In some cases they have a new name',
                    'in others',
                    'they are\nremoved completely. Not all unsupported Processing functions are listed here\nbut we try to include ones that a user coming from Processing might likely\ncall.'
                  ],
                  class: 'p5',
                  module: 'Environment'
                },
                {
                  file: 'src/core/main.js',
                  line: 41,
                  description:
                    '<p>Called directly before <a href="#/p5/setup">setup()</a>, the <a href="#/p5/preload">preload()</a> function is used to handle\nasynchronous loading of external files in a blocking way. If a preload\nfunction is defined, <a href="#/p5/setup">setup()</a> will wait until any load calls within have\nfinished. Nothing besides load calls (<a href="#/p5/loadImage">loadImage</a>, <a href="#/p5/loadJSON">loadJSON</a>, <a href="#/p5/loadFont">loadFont</a>,\n<a href="#/p5/loadStrings">loadStrings</a>, etc.) should be inside the preload function. If asynchronous\nloading is preferred, the load methods can instead be called in <a href="#/p5/setup">setup()</a>\nor anywhere else with the use of a callback parameter.\n<br><br>\nBy default the text &quot;loading...&quot; will be displayed. To make your own\nloading page, include an HTML element with id &quot;p5_loading&quot; in your\npage. More information <a href="http://bit.ly/2kQ6Nio">here</a>.</p>\n',
                  itemtype: 'method',
                  name: 'preload',
                  example: [
                    "\n<div><code>\nlet img;\nlet c;\nfunction preload() {\n  // preload() runs once\n  img = loadImage('assets/laDefense.jpg');\n}\n\nfunction setup() {\n  // setup() waits until preload() is done\n  img.loadPixels();\n  // get color of middle pixel\n  c = img.get(img.width / 2, img.height / 2);\n}\n\nfunction draw() {\n  background(c);\n  image(img, 25, 25, 50, 50);\n}\n</code></div>"
                  ],
                  alt: 'nothing displayed',
                  class: 'p5',
                  module: 'Structure',
                  submodule: 'Structure'
                },
                {
                  file: 'src/core/main.js',
                  line: 82,
                  description:
                    '<p>The <a href="#/p5/setup">setup()</a> function is called once when the program starts. It&#39;s used to\ndefine initial environment properties such as screen size and background\ncolor and to load media such as images and fonts as the program starts.\nThere can only be one <a href="#/p5/setup">setup()</a> function for each program and it shouldn&#39;t\nbe called again after its initial execution.\n<br><br>\nNote: Variables declared within <a href="#/p5/setup">setup()</a> are not accessible within other\nfunctions, including <a href="#/p5/draw">draw()</a>.</p>\n',
                  itemtype: 'method',
                  name: 'setup',
                  example: [
                    '\n<div><code>\nlet a = 0;\n\nfunction setup() {\n  background(0);\n  noStroke();\n  fill(102);\n}\n\nfunction draw() {\n  rect(a++ % width, 10, 2, 80);\n}\n</code></div>'
                  ],
                  alt: 'nothing displayed',
                  class: 'p5',
                  module: 'Structure',
                  submodule: 'Structure'
                },
                {
                  file: 'src/core/main.js',
                  line: 113,
                  description:
                    '<p>Called directly after <a href="#/p5/setup">setup()</a>, the <a href="#/p5/draw">draw()</a> function continuously executes\nthe lines of code contained inside its block until the program is stopped\nor <a href="#/p5/noLoop">noLoop()</a> is called. Note if <a href="#/p5/noLoop">noLoop()</a> is called in <a href="#/p5/setup">setup()</a>, <a href="#/p5/draw">draw()</a> will\nstill be executed once before stopping. <a href="#/p5/draw">draw()</a> is called automatically and\nshould never be called explicitly.\n<br><br>\nIt should always be controlled with <a href="#/p5/noLoop">noLoop()</a>, <a href="#/p5/redraw">redraw()</a> and <a href="#/p5/loop">loop()</a>. After\n<a href="#/p5/noLoop">noLoop()</a> stops the code in <a href="#/p5/draw">draw()</a> from executing, <a href="#/p5/redraw">redraw()</a> causes the\ncode inside <a href="#/p5/draw">draw()</a> to execute once, and <a href="#/p5/loop">loop()</a> will cause the code\ninside <a href="#/p5/draw">draw()</a> to resume executing continuously.\n<br><br>\nThe number of times <a href="#/p5/draw">draw()</a> executes in each second may be controlled with\nthe <a href="#/p5/frameRate">frameRate()</a> function.\n<br><br>\nThere can only be one <a href="#/p5/draw">draw()</a> function for each sketch, and <a href="#/p5/draw">draw()</a> must\nexist if you want the code to run continuously, or to process events such\nas <a href="#/p5/mousePressed">mousePressed()</a>. Sometimes, you might have an empty call to <a href="#/p5/draw">draw()</a> in\nyour program, as shown in the above example.\n<br><br>\nIt is important to note that the drawing coordinate system will be reset\nat the beginning of each <a href="#/p5/draw">draw()</a> call. If any transformations are performed\nwithin <a href="#/p5/draw">draw()</a> (ex: scale, rotate, translate), their effects will be\nundone at the beginning of <a href="#/p5/draw">draw()</a>, so transformations will not accumulate\nover time. On the other hand, styling applied (ex: fill, stroke, etc) will\nremain in effect.</p>\n',
                  itemtype: 'method',
                  name: 'draw',
                  example: [
                    '\n<div><code>\nlet yPos = 0;\nfunction setup() {\n  // setup() runs once\n  frameRate(30);\n}\nfunction draw() {\n  // draw() loops forever, until stopped\n  background(204);\n  yPos = yPos - 1;\n  if (yPos < 0) {\n    yPos = height;\n  }\n  line(0, yPos, width, yPos);\n}\n</code></div>'
                  ],
                  alt: 'nothing displayed',
                  class: 'p5',
                  module: 'Structure',
                  submodule: 'Structure'
                },
                {
                  file: 'src/core/main.js',
                  line: 406,
                  description:
                    '<p>Removes the entire p5 sketch. This will remove the canvas and any\nelements created by p5.js. It will also stop the draw loop and unbind\nany properties or methods from the window global scope. It will\nleave a variable p5 in case you wanted to create a new p5 sketch.\nIf you like, you can set p5 = null to erase it. While all functions and\nvariables and objects created by the p5 library will be removed, any\nother global variables created by your code will remain.</p>\n',
                  itemtype: 'method',
                  name: 'remove',
                  example: [
                    "\n<div class='norender'><code>\nfunction draw() {\n  ellipse(50, 50, 10, 10);\n}\n\nfunction mousePressed() {\n  remove(); // remove whole sketch on mouse press\n}\n</code></div>"
                  ],
                  alt: 'nothing displayed',
                  class: 'p5',
                  module: 'Structure',
                  submodule: 'Structure'
                },
                {
                  file: 'src/core/main.js',
                  line: 674,
                  description:
                    "<p>Allows for the friendly error system (FES) to be turned off when creating a sketch,\nwhich can give a significant boost to performance when needed.\nSee <a href='https://github.com/processing/p5.js/wiki/Optimizing-p5.js-Code-for-Performance#disable-the-friendly-error-system-fes'>\ndisabling the friendly error system</a>.</p>\n",
                  itemtype: 'property',
                  name: 'disableFriendlyErrors',
                  type: 'Boolean',
                  example: [
                    '\n<div class="norender notest"><code>\np5.disableFriendlyErrors = true;\n\nfunction setup() {\n  createCanvas(100, 50);\n}\n</code></div>'
                  ],
                  class: 'p5',
                  module: 'Structure',
                  submodule: 'Structure'
                },
                {
                  file: 'src/core/p5.Element.js',
                  line: 20,
                  description:
                    '<p>Underlying HTML element. All normal HTML methods can be called on this.</p>\n',
                  example: [
                    "\n<div>\n<code>\nfunction setup() {\n  let c = createCanvas(50, 50);\n  c.elt.style.border = '5px solid red';\n}\n\nfunction draw() {\n  background(220);\n}\n</code>\n</div>"
                  ],
                  itemtype: 'property',
                  name: 'elt',
                  readonly: '',
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/core/p5.Element.js',
                  line: 46,
                  description:
                    '<p>Attaches the element to the parent specified. A way of setting\n the container for the element. Accepts either a string ID, DOM\n node, or <a href="#/p5.Element">p5.Element</a>. If no arguments given, parent node is returned.\n For more ways to position the canvas, see the\n <a href=\'https://github.com/processing/p5.js/wiki/Positioning-your-canvas\'>\n positioning the canvas</a> wiki page.</p>\n',
                  itemtype: 'method',
                  name: 'parent',
                  chainable: 1,
                  example: [
                    "\n <div class=\"norender notest\"><code>\n // in the html file:\n // &lt;div id=\"myContainer\">&lt;/div>\n// in the js file:\n let cnv = createCanvas(100, 100);\n cnv.parent('myContainer');\n </code></div>\n <div class='norender'><code>\n let div0 = createDiv('this is the parent');\n let div1 = createDiv('this is the child');\n div1.parent(div0); // use p5.Element\n </code></div>\n <div class='norender'><code>\n let div0 = createDiv('this is the parent');\n div0.id('apples');\n let div1 = createDiv('this is the child');\n div1.parent('apples'); // use id\n </code></div>\n <div class='norender notest'><code>\n let elt = document.getElementById('myParentDiv');\n let div1 = createDiv('this is the child');\n div1.parent(elt); // use element from page\n </code></div>"
                  ],
                  alt: 'no display.',
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM',
                  overloads: [
                    {
                      line: 46,
                      params: [
                        {
                          name: 'parent',
                          description:
                            '<p>the ID, DOM node, or <a href="#/p5.Element">p5.Element</a>\n                         of desired parent element</p>\n',
                          type: 'String|p5.Element|Object'
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 89,
                      params: [],
                      return: {
                        description: '',
                        type: 'p5.Element'
                      }
                    }
                  ]
                },
                {
                  file: 'src/core/p5.Element.js',
                  line: 111,
                  description:
                    '<p>Sets the ID of the element. If no ID argument is passed in, it instead\n returns the current ID of the element.\n Note that only one element can have a particular id in a page.\n The <a href="#/p5.Element/class">.class()</a> function can be used\n to identify multiple elements with the same class name.</p>\n',
                  itemtype: 'method',
                  name: 'id',
                  chainable: 1,
                  example: [
                    "\n <div class='norender'><code>\n function setup() {\n   let cnv = createCanvas(100, 100);\n   // Assigns a CSS selector ID to\n   // the canvas element.\n   cnv.id('mycanvas');\n }\n </code></div>"
                  ],
                  alt: 'no display.',
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM',
                  overloads: [
                    {
                      line: 111,
                      params: [
                        {
                          name: 'id',
                          description: '<p>ID of the element</p>\n',
                          type: 'String'
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 136,
                      params: [],
                      return: {
                        description: 'the id of the element',
                        type: 'String'
                      }
                    }
                  ]
                },
                {
                  file: 'src/core/p5.Element.js',
                  line: 151,
                  description:
                    '<p>Adds given class to the element. If no class argument is passed in, it\n instead returns a string containing the current class(es) of the element.</p>\n',
                  itemtype: 'method',
                  name: 'class',
                  chainable: 1,
                  example: [
                    "\n <div class='norender'><code>\n function setup() {\n   let cnv = createCanvas(100, 100);\n   // Assigns a CSS selector class 'small'\n   // to the canvas element.\n   cnv.class('small');\n }\n </code></div>"
                  ],
                  alt: 'no display.',
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM',
                  overloads: [
                    {
                      line: 151,
                      params: [
                        {
                          name: 'class',
                          description: '<p>class to add</p>\n',
                          type: 'String'
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 173,
                      params: [],
                      return: {
                        description: 'the class of the element',
                        type: 'String'
                      }
                    }
                  ]
                },
                {
                  file: 'src/core/p5.Element.js',
                  line: 186,
                  description:
                    '<p>The .<a href="#/p5.Element/mousePressed">mousePressed()</a> function is called once after every time a\nmouse button is pressed over the element.\nSome mobile browsers may also trigger this event on a touch screen,\nif the user performs a quick tap.\nThis can be used to attach element specific event listeners.</p>\n',
                  itemtype: 'method',
                  name: 'mousePressed',
                  params: [
                    {
                      name: 'fxn',
                      description:
                        '<p>function to be fired when mouse is\n                               pressed over the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                      type: 'Function|Boolean'
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n<div class='norender'><code>\nlet cnv;\nlet d;\nlet g;\nfunction setup() {\n  cnv = createCanvas(100, 100);\n  cnv.mousePressed(changeGray); // attach listener for\n  // canvas click only\n  d = 10;\n  g = 100;\n}\n\nfunction draw() {\n  background(g);\n  ellipse(width / 2, height / 2, d, d);\n}\n\n// this function fires with any click anywhere\nfunction mousePressed() {\n  d = d + 10;\n}\n\n// this function fires only when cnv is clicked\nfunction changeGray() {\n  g = random(0, 255);\n}\n</code></div>"
                  ],
                  alt: 'no display.',
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/core/p5.Element.js',
                  line: 247,
                  description:
                    '<p>The .<a href="#/p5.Element/doubleClicked">doubleClicked()</a> function is called once after every time a\nmouse button is pressed twice over the element. This can be used to\nattach element and action specific event listeners.</p>\n',
                  itemtype: 'method',
                  name: 'doubleClicked',
                  params: [
                    {
                      name: 'fxn',
                      description:
                        '<p>function to be fired when mouse is\n                               double clicked over the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                      type: 'Function|Boolean'
                    }
                  ],
                  return: {
                    description: '',
                    type: 'p5.Element'
                  },
                  example: [
                    "\n<div class='norender'><code>\nlet cnv;\nlet d;\nlet g;\nfunction setup() {\n  cnv = createCanvas(100, 100);\n  cnv.doubleClicked(changeGray); // attach listener for\n  // canvas double click only\n  d = 10;\n  g = 100;\n}\n\nfunction draw() {\n  background(g);\n  ellipse(width / 2, height / 2, d, d);\n}\n\n// this function fires with any double click anywhere\nfunction doubleClicked() {\n  d = d + 10;\n}\n\n// this function fires only when cnv is double clicked\nfunction changeGray() {\n  g = random(0, 255);\n}\n</code></div>"
                  ],
                  alt: 'no display.',
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/core/p5.Element.js',
                  line: 296,
                  description:
                    '<p>The .<a href="#/p5.Element/mouseWheel">mouseWheel()</a> function is called once after every time a\nmouse wheel is scrolled over the element. This can be used to\nattach element specific event listeners.\n<br><br>\nThe function accepts a callback function as argument which will be executed\nwhen the <code>wheel</code> event is triggered on the element, the callback function is\npassed one argument <code>event</code>. The <code>event.deltaY</code> property returns negative\nvalues if the mouse wheel is rotated up or away from the user and positive\nin the other direction. The <code>event.deltaX</code> does the same as <code>event.deltaY</code>\nexcept it reads the horizontal wheel scroll of the mouse wheel.\n<br><br>\nOn OS X with &quot;natural&quot; scrolling enabled, the <code>event.deltaY</code> values are\nreversed.</p>\n',
                  itemtype: 'method',
                  name: 'mouseWheel',
                  params: [
                    {
                      name: 'fxn',
                      description:
                        '<p>function to be fired when mouse is\n                               scrolled over the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                      type: 'Function|Boolean'
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n<div class='norender'><code>\nlet cnv;\nlet d;\nlet g;\nfunction setup() {\n  cnv = createCanvas(100, 100);\n  cnv.mouseWheel(changeSize); // attach listener for\n  // activity on canvas only\n  d = 10;\n  g = 100;\n}\n\nfunction draw() {\n  background(g);\n  ellipse(width / 2, height / 2, d, d);\n}\n\n// this function fires with mousewheel movement\n// anywhere on screen\nfunction mouseWheel() {\n  g = g + 10;\n}\n\n// this function fires with mousewheel movement\n// over canvas only\nfunction changeSize(event) {\n  if (event.deltaY > 0) {\n    d = d + 10;\n  } else {\n    d = d - 10;\n  }\n}\n</code></div>"
                  ],
                  alt: 'no display.',
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/core/p5.Element.js',
                  line: 362,
                  description:
                    '<p>The .<a href="#/p5.Element/mouseReleased">mouseReleased()</a> function is called once after every time a\nmouse button is released over the element.\nSome mobile browsers may also trigger this event on a touch screen,\nif the user performs a quick tap.\nThis can be used to attach element specific event listeners.</p>\n',
                  itemtype: 'method',
                  name: 'mouseReleased',
                  params: [
                    {
                      name: 'fxn',
                      description:
                        '<p>function to be fired when mouse is\n                               released over the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                      type: 'Function|Boolean'
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n<div class='norender'><code>\nlet cnv;\nlet d;\nlet g;\nfunction setup() {\n  cnv = createCanvas(100, 100);\n  cnv.mouseReleased(changeGray); // attach listener for\n  // activity on canvas only\n  d = 10;\n  g = 100;\n}\n\nfunction draw() {\n  background(g);\n  ellipse(width / 2, height / 2, d, d);\n}\n\n// this function fires after the mouse has been\n// released\nfunction mouseReleased() {\n  d = d + 10;\n}\n\n// this function fires after the mouse has been\n// released while on canvas\nfunction changeGray() {\n  g = random(0, 255);\n}\n</code></div>"
                  ],
                  alt: 'no display.',
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/core/p5.Element.js',
                  line: 416,
                  description:
                    '<p>The .<a href="#/p5.Element/mouseClicked">mouseClicked()</a> function is called once after a mouse button is\npressed and released over the element.\nSome mobile browsers may also trigger this event on a touch screen,\nif the user performs a quick tap.\nThis can be used to attach element specific event listeners.</p>\n',
                  itemtype: 'method',
                  name: 'mouseClicked',
                  params: [
                    {
                      name: 'fxn',
                      description:
                        '<p>function to be fired when mouse is\n                               clicked over the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                      type: 'Function|Boolean'
                    }
                  ],
                  chainable: 1,
                  example: [
                    '\n<div class="norender">\n<code>\nlet cnv;\nlet d;\nlet g;\n\nfunction setup() {\n  cnv = createCanvas(100, 100);\n  cnv.mouseClicked(changeGray); // attach listener for\n  // activity on canvas only\n  d = 10;\n  g = 100;\n}\n\nfunction draw() {\n  background(g);\n  ellipse(width / 2, height / 2, d, d);\n}\n\n// this function fires after the mouse has been\n// clicked anywhere\nfunction mouseClicked() {\n  d = d + 10;\n}\n\n// this function fires after the mouse has been\n// clicked on canvas\nfunction changeGray() {\n  g = random(0, 255);\n}\n</code>\n</div>'
                  ],
                  alt: 'no display.',
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/core/p5.Element.js',
                  line: 472,
                  description:
                    '<p>The .<a href="#/p5.Element/mouseMoved">mouseMoved()</a> function is called once every time a\nmouse moves over the element. This can be used to attach an\nelement specific event listener.</p>\n',
                  itemtype: 'method',
                  name: 'mouseMoved',
                  params: [
                    {
                      name: 'fxn',
                      description:
                        '<p>function to be fired when a mouse moves\n                               over the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                      type: 'Function|Boolean'
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n<div class='norender'><code>\nlet cnv;\nlet d = 30;\nlet g;\nfunction setup() {\n  cnv = createCanvas(100, 100);\n  cnv.mouseMoved(changeSize); // attach listener for\n  // activity on canvas only\n  d = 10;\n  g = 100;\n}\n\nfunction draw() {\n  background(g);\n  fill(200);\n  ellipse(width / 2, height / 2, d, d);\n}\n\n// this function fires when mouse moves anywhere on\n// page\nfunction mouseMoved() {\n  g = g + 5;\n  if (g > 255) {\n    g = 0;\n  }\n}\n\n// this function fires when mouse moves over canvas\nfunction changeSize() {\n  d = d + 2;\n  if (d > 100) {\n    d = 0;\n  }\n}\n</code></div>"
                  ],
                  alt: 'no display.',
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/core/p5.Element.js',
                  line: 530,
                  description:
                    '<p>The .<a href="#/p5.Element/mouseOver">mouseOver()</a> function is called once after every time a\nmouse moves onto the element. This can be used to attach an\nelement specific event listener.</p>\n',
                  itemtype: 'method',
                  name: 'mouseOver',
                  params: [
                    {
                      name: 'fxn',
                      description:
                        '<p>function to be fired when a mouse moves\n                               onto the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                      type: 'Function|Boolean'
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n<div class='norender'><code>\nlet cnv;\nlet d;\nfunction setup() {\n  cnv = createCanvas(100, 100);\n  cnv.mouseOver(changeGray);\n  d = 10;\n}\n\nfunction draw() {\n  ellipse(width / 2, height / 2, d, d);\n}\n\nfunction changeGray() {\n  d = d + 10;\n  if (d > 100) {\n    d = 0;\n  }\n}\n</code></div>"
                  ],
                  alt: 'no display.',
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/core/p5.Element.js',
                  line: 573,
                  description:
                    '<p>The .<a href="#/p5.Element/mouseOut">mouseOut()</a> function is called once after every time a\nmouse moves off the element. This can be used to attach an\nelement specific event listener.</p>\n',
                  itemtype: 'method',
                  name: 'mouseOut',
                  params: [
                    {
                      name: 'fxn',
                      description:
                        '<p>function to be fired when a mouse\n                               moves off of an element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                      type: 'Function|Boolean'
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n<div class='norender'><code>\nlet cnv;\nlet d;\nfunction setup() {\n  cnv = createCanvas(100, 100);\n  cnv.mouseOut(changeGray);\n  d = 10;\n}\n\nfunction draw() {\n  ellipse(width / 2, height / 2, d, d);\n}\n\nfunction changeGray() {\n  d = d + 10;\n  if (d > 100) {\n    d = 0;\n  }\n}\n</code></div>"
                  ],
                  alt: 'no display.',
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/core/p5.Element.js',
                  line: 615,
                  description:
                    '<p>The .<a href="#/p5.Element/touchStarted">touchStarted()</a> function is called once after every time a touch is\nregistered. This can be used to attach element specific event listeners.</p>\n',
                  itemtype: 'method',
                  name: 'touchStarted',
                  params: [
                    {
                      name: 'fxn',
                      description:
                        '<p>function to be fired when a touch\n                               starts over the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                      type: 'Function|Boolean'
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n<div class='norender'><code>\nlet cnv;\nlet d;\nlet g;\nfunction setup() {\n  cnv = createCanvas(100, 100);\n  cnv.touchStarted(changeGray); // attach listener for\n  // canvas click only\n  d = 10;\n  g = 100;\n}\n\nfunction draw() {\n  background(g);\n  ellipse(width / 2, height / 2, d, d);\n}\n\n// this function fires with any touch anywhere\nfunction touchStarted() {\n  d = d + 10;\n}\n\n// this function fires only when cnv is clicked\nfunction changeGray() {\n  g = random(0, 255);\n}\n</code></div>"
                  ],
                  alt: 'no display.',
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/core/p5.Element.js',
                  line: 663,
                  description:
                    '<p>The .<a href="#/p5.Element/touchMoved">touchMoved()</a> function is called once after every time a touch move is\nregistered. This can be used to attach element specific event listeners.</p>\n',
                  itemtype: 'method',
                  name: 'touchMoved',
                  params: [
                    {
                      name: 'fxn',
                      description:
                        '<p>function to be fired when a touch moves over\n                               the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                      type: 'Function|Boolean'
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n<div class='norender'><code>\nlet cnv;\nlet g;\nfunction setup() {\n  cnv = createCanvas(100, 100);\n  cnv.touchMoved(changeGray); // attach listener for\n  // canvas click only\n  g = 100;\n}\n\nfunction draw() {\n  background(g);\n}\n\n// this function fires only when cnv is clicked\nfunction changeGray() {\n  g = random(0, 255);\n}\n</code></div>"
                  ],
                  alt: 'no display.',
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/core/p5.Element.js',
                  line: 703,
                  description:
                    '<p>The .<a href="#/p5.Element/touchEnded">touchEnded()</a> function is called once after every time a touch is\nregistered. This can be used to attach element specific event listeners.</p>\n',
                  itemtype: 'method',
                  name: 'touchEnded',
                  params: [
                    {
                      name: 'fxn',
                      description:
                        '<p>function to be fired when a touch ends\n                               over the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                      type: 'Function|Boolean'
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n<div class='norender'><code>\nlet cnv;\nlet d;\nlet g;\nfunction setup() {\n  cnv = createCanvas(100, 100);\n  cnv.touchEnded(changeGray); // attach listener for\n  // canvas click only\n  d = 10;\n  g = 100;\n}\n\nfunction draw() {\n  background(g);\n  ellipse(width / 2, height / 2, d, d);\n}\n\n// this function fires with any touch anywhere\nfunction touchEnded() {\n  d = d + 10;\n}\n\n// this function fires only when cnv is clicked\nfunction changeGray() {\n  g = random(0, 255);\n}\n</code></div>"
                  ],
                  alt: 'no display.',
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/core/p5.Element.js',
                  line: 752,
                  description:
                    '<p>The .<a href="#/p5.Element/dragOver">dragOver()</a> function is called once after every time a\nfile is dragged over the element. This can be used to attach an\nelement specific event listener.</p>\n',
                  itemtype: 'method',
                  name: 'dragOver',
                  params: [
                    {
                      name: 'fxn',
                      description:
                        '<p>function to be fired when a file is\n                               dragged over the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                      type: 'Function|Boolean'
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n<div><code>\n// To test this sketch, simply drag a\n// file over the canvas\nfunction setup() {\n  let c = createCanvas(100, 100);\n  background(200);\n  textAlign(CENTER);\n  text('Drag file', width / 2, height / 2);\n  c.dragOver(dragOverCallback);\n}\n\n// This function will be called whenever\n// a file is dragged over the canvas\nfunction dragOverCallback() {\n  background(240);\n  text('Dragged over', width / 2, height / 2);\n}\n</code></div>"
                  ],
                  alt: 'nothing displayed',
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/core/p5.Element.js',
                  line: 790,
                  description:
                    '<p>The .dragLeave() function is called once after every time a\ndragged file leaves the element area. This can be used to attach an\nelement specific event listener.</p>\n',
                  itemtype: 'method',
                  name: 'dragLeave',
                  params: [
                    {
                      name: 'fxn',
                      description:
                        '<p>function to be fired when a file is\n                               dragged off the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                      type: 'Function|Boolean'
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n<div><code>\n// To test this sketch, simply drag a file\n// over and then out of the canvas area\nfunction setup() {\n  let c = createCanvas(100, 100);\n  background(200);\n  textAlign(CENTER);\n  text('Drag file', width / 2, height / 2);\n  c.dragLeave(dragLeaveCallback);\n}\n\n// This function will be called whenever\n// a file is dragged out of the canvas\nfunction dragLeaveCallback() {\n  background(240);\n  text('Dragged off', width / 2, height / 2);\n}\n</code></div>"
                  ],
                  alt: 'nothing displayed',
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/core/p5.Element.js',
                  line: 854,
                  description: '<p>Helper fxn for sharing pixel methods</p>\n',
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/core/p5.Graphics.js',
                  line: 63,
                  description:
                    "<p>Resets certain values such as those modified by functions in the Transform category\nand in the Lights category that are not automatically reset\nwith graphics buffer objects. Calling this in <a href='#/p5/draw'>draw()</a> will copy the behavior\nof the standard canvas.</p>\n",
                  itemtype: 'method',
                  name: 'reset',
                  example: [
                    "\n\n<div><code>\nlet pg;\nfunction setup() {\n  createCanvas(100, 100);\n  background(0);\n  pg = createGraphics(50, 100);\n  pg.fill(0);\n  frameRate(5);\n}\nfunction draw() {\n  image(pg, width / 2, 0);\n  pg.background(255);\n  // p5.Graphics object behave a bit differently in some cases\n  // The normal canvas on the left resets the translate\n  // with every loop through draw()\n  // the graphics object on the right doesn't automatically reset\n  // so translate() is additive and it moves down the screen\n  rect(0, 0, width / 2, 5);\n  pg.rect(0, 0, width / 2, 5);\n  translate(0, 5, 0);\n  pg.translate(0, 5, 0);\n}\nfunction mouseClicked() {\n  // if you click you will see that\n  // reset() resets the translate back to the initial state\n  // of the Graphics object\n  pg.reset();\n}\n</code></div>"
                  ],
                  alt:
                    'A white line on a black background stays still on the top-left half.\nA black line animates from top to bottom on a white background on the right half.\nWhen clicked, the black line starts back over at the top.',
                  class: 'p5.Graphics',
                  module: 'Rendering',
                  submodule: 'Rendering'
                },
                {
                  file: 'src/core/p5.Graphics.js',
                  line: 115,
                  description:
                    '<p>Removes a Graphics object from the page and frees any resources\nassociated with it.</p>\n',
                  itemtype: 'method',
                  name: 'remove',
                  example: [
                    "\n<div class='norender'><code>\nlet bg;\nfunction setup() {\n  bg = createCanvas(100, 100);\n  bg.background(0);\n  image(bg, 0, 0);\n  bg.remove();\n}\n</code></div>\n\n<div><code>\nlet bg;\nfunction setup() {\n  pixelDensity(1);\n  createCanvas(100, 100);\n  stroke(255);\n  fill(0);\n\n  // create and draw the background image\n  bg = createGraphics(100, 100);\n  bg.background(200);\n  bg.ellipse(50, 50, 80, 80);\n}\nfunction draw() {\n  let t = millis() / 1000;\n  // draw the background\n  if (bg) {\n    image(bg, frameCount % 100, 0);\n    image(bg, frameCount % 100 - 100, 0);\n  }\n  // draw the foreground\n  let p = p5.Vector.fromAngle(t, 35).add(50, 50);\n  ellipse(p.x, p.y, 30);\n}\nfunction mouseClicked() {\n  // remove the background\n  if (bg) {\n    bg.remove();\n    bg = null;\n  }\n}\n</code></div>"
                  ],
                  alt:
                    'no image\na multi-colored circle moving back and forth over a scrolling background.',
                  class: 'p5.Graphics',
                  module: 'Rendering',
                  submodule: 'Rendering'
                },
                {
                  file: 'src/core/p5.Renderer.js',
                  line: 95,
                  description: '<p>Resize our canvas element.</p>\n',
                  class: 'p5.Renderer',
                  module: 'Rendering',
                  submodule: 'Rendering'
                },
                {
                  file: 'src/core/p5.Renderer.js',
                  line: 334,
                  description: '<p>Helper fxn to check font type (system or otf)</p>\n',
                  class: 'p5.Renderer',
                  module: 'Rendering',
                  submodule: 'Rendering'
                },
                {
                  file: 'src/core/p5.Renderer.js',
                  line: 386,
                  description:
                    '<p>Helper fxn to measure ascent and descent.\nAdapted from <a href="http://stackoverflow.com/a/25355178">http://stackoverflow.com/a/25355178</a></p>\n',
                  class: 'p5.Renderer',
                  module: 'Rendering',
                  submodule: 'Rendering'
                },
                {
                  file: 'src/core/p5.Renderer2D.js',
                  line: 7,
                  description:
                    '<p>p5.Renderer2D\nThe 2D graphics canvas renderer class.\nextends p5.Renderer</p>\n',
                  class: 'p5',
                  module: 'Rendering'
                },
                {
                  file: 'src/core/p5.Renderer2D.js',
                  line: 385,
                  description:
                    '<p>Generate a cubic Bezier representing an arc on the unit circle of total\nangle <code>size</code> radians, beginning <code>start</code> radians above the x-axis. Up to\nfour of these curves are combined to make a full arc.</p>\n<p>See <a href="http://www.joecridge.me/bezier.pdf">www.joecridge.me/bezier.pdf</a> for an explanation of the method.</p>\n',
                  class: 'p5',
                  module: 'Rendering'
                },
                {
                  file: 'src/core/reference.js',
                  line: 7,
                  description:
                    '<p>Creates and names a new variable. A variable is a container for a value.</p>\n<p>Variables that are declared with <a href="#/p5/let">let</a> will have block-scope.\nThis means that the variable only exists within the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block">\nblock</a> that it is created within.</p>\n<p>From <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let">the MDN entry</a>:\nDeclares a block scope local variable, optionally initializing it to a value.</p>\n',
                  itemtype: 'property',
                  name: 'let',
                  example: [
                    "\n<div class='norender'>\n<code>\nlet x = 2;\nconsole.log(x); // prints 2 to the console\nx = 1;\nconsole.log(x); // prints 1 to the console\n</code>\n</div>"
                  ],
                  class: 'p5',
                  module: 'Foundation',
                  submodule: 'Declaration'
                },
                {
                  file: 'src/core/reference.js',
                  line: 31,
                  description:
                    '<p>Creates and names a new constant. Like a variable created with <a href="#/p5/let">let</a>, a constant\nthat is created with <a href="#/p5/const">const</a> is a container for a value,\nhowever constants cannot be changed once they are declared.</p>\n<p>Constants have block-scope. This means that the constant only exists within\nthe <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block">\nblock</a> that it is created within. A constant cannot be redeclared within a scope in which it\nalready exists.</p>\n<p>From <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const">the MDN entry</a>:\nDeclares a read-only named constant.\nConstants are block-scoped, much like variables defined using the &#39;let&#39; statement.\nThe value of a constant can&#39;t be changed through reassignment, and it can&#39;t be redeclared.</p>\n',
                  itemtype: 'property',
                  name: 'const',
                  example: [
                    "\n<div class='norender'>\n<code>\n// define myFavNumber as a constant and give it the value 7\nconst myFavNumber = 7;\nconsole.log('my favorite number is: ' + myFavNumber);\n</code>\n</div>"
                  ],
                  class: 'p5',
                  module: 'Foundation',
                  submodule: 'Declaration'
                },
                {
                  file: 'src/core/reference.js',
                  line: 61,
                  description:
                    '<p>The strict equality operator <a href="#/p5/===">===</a>\nchecks to see if two values are equal and of the same type.</p>\n<p>A comparison expression always evaluates to a <a href="#/p5/boolean">boolean</a>.</p>\n<p>From <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">the MDN entry</a>:\nThe non-identity operator returns true if the operands are not equal and/or not of the same type.</p>\n<p>Note: In some examples around the web you may see a double-equals-sign\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality">==</a>,\nused for comparison instead. This is the non-strict equality operator in Javascript.\nThis will convert the two values being compared to the same type before comparing them.</p>\n',
                  itemtype: 'property',
                  name: '===',
                  example: [
                    "\n<div class='norender'>\n<code>\nconsole.log(1 === 1); // prints true to the console\nconsole.log(1 === '1'); // prints false to the console\n</code>\n</div>"
                  ],
                  class: 'p5',
                  module: 'Foundation',
                  submodule: 'Comparison Operators'
                },
                {
                  file: 'src/core/reference.js',
                  line: 86,
                  description:
                    '<p>The greater than operator <a href="#/p5/>">&gt;</a>\nevaluates to true if the left value is greater than\nthe right value.</p>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">There is more info on comparison operators on MDN.</a></p>\n',
                  itemtype: 'property',
                  name: '>',
                  example: [
                    "\n<div class='norender'>\n<code>\nconsole.log(100 > 1); // prints true to the console\nconsole.log(1 > 100); // prints false to the console\n</code>\n</div>"
                  ],
                  class: 'p5',
                  module: 'Foundation',
                  submodule: 'Comparison Operators'
                },
                {
                  file: 'src/core/reference.js',
                  line: 105,
                  description:
                    '<p>The greater than or equal to operator <a href="#/p5/>=">&gt;=</a>\nevaluates to true if the left value is greater than or equal to\nthe right value.</p>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">There is more info on comparison operators on MDN.</a></p>\n',
                  itemtype: 'property',
                  name: '>=',
                  example: [
                    "\n<div class='norender'>\n<code>\nconsole.log(100 >= 100); // prints true to the console\nconsole.log(101 >= 100); // prints true to the console\n</code>\n</div>"
                  ],
                  class: 'p5',
                  module: 'Foundation',
                  submodule: 'Comparison Operators'
                },
                {
                  file: 'src/core/reference.js',
                  line: 124,
                  description:
                    '<p>The less than operator <a href="#/p5/<">&lt;</a>\nevaluates to true if the left value is less than\nthe right value.</p>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">There is more info on comparison operators on MDN.</a></p>\n',
                  itemtype: 'property',
                  name: '<',
                  example: [
                    "\n<div class='norender'>\n<code>\nconsole.log(1 < 100); // prints true to the console\nconsole.log(100 < 99); // prints false to the console\n</code>\n</div>"
                  ],
                  class: 'p5',
                  module: 'Foundation',
                  submodule: 'Comparison Operators'
                },
                {
                  file: 'src/core/reference.js',
                  line: 143,
                  description:
                    '<p>The less than or equal to operator <a href="#/p5/<=">&lt;=</a>\nevaluates to true if the left value is less than or equal to\nthe right value.</p>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">There is more info on comparison operators on MDN.</a></p>\n',
                  itemtype: 'property',
                  name: '<=',
                  example: [
                    "\n<div class='norender'>\n<code>\nconsole.log(100 <= 100); // prints true to the console\nconsole.log(99 <= 100); // prints true to the console\n</code>\n</div>"
                  ],
                  class: 'p5',
                  module: 'Foundation',
                  submodule: 'Comparison Operators'
                },
                {
                  file: 'src/core/reference.js',
                  line: 166,
                  description:
                    '<p>The <a href="#/p5/if-else">if-else</a> statement helps control the flow of your code.</p>\n<p>A condition is placed between the parenthesis following &#39;if&#39;,\nwhen that condition evalues to <a href="https://developer.mozilla.org/en-US/docs/Glossary/truthy">truthy</a>,\nthe code between the following curly braces is run.\nAlternatively, when the condition evaluates to <a href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy">falsy</a>,\nthe code between the curly braces that follow &#39;else&#39; is run instead.</p>\n<p>From <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else">the MDN entry</a>:\nThe &#39;if&#39; statement executes a statement if a specified condition is truthy.\nIf the condition is falsy, another statement can be executed</p>\n',
                  itemtype: 'property',
                  name: 'if-else',
                  example: [
                    "\n<div class='norender'>\n<code>\nlet a = 4;\nif (a > 0) {\n  console.log('positive');\n} else {\n  console.log('negative');\n}\n</code>\n</div>"
                  ],
                  class: 'p5',
                  module: 'Foundation',
                  submodule: 'Control Statement'
                },
                {
                  file: 'src/core/reference.js',
                  line: 197,
                  description:
                    '<p>Creates and names a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions">function</a>.\nA <a href="#/p5/function">function</a> is a set of statements that perform a task.</p>\n<p>Optionally, functions can have parameters. <a href="https://developer.mozilla.org/en-US/docs/Glossary/Parameter">Parameters</a>\nare variables that are scoped to the function, that can be assigned a value when calling the function.</p>\n<p>From <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function">the MDN entry</a>:\nDeclares a function with the specified parameters.</p>\n',
                  itemtype: 'property',
                  name: 'function',
                  example: [
                    "\n<div class='norender'>\n<code>\nlet myName = 'Hridi';\nfunction sayHello(name) {\n  console.log('Hello ' + name + '!');\n}\nsayHello(myName); // calling the function, prints \"Hello Hridi!\" to console.\n</code>\n</div>"
                  ],
                  class: 'p5',
                  module: 'Foundation',
                  submodule: 'Function'
                },
                {
                  file: 'src/core/reference.js',
                  line: 220,
                  description:
                    '<p>Specifies the value to be returned by a function.\nFor more info checkout <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return">\nthe MDN entry for return</a>.</p>\n',
                  itemtype: 'property',
                  name: 'return',
                  example: [
                    "\n<div class='norender'>\n<code>\nfunction calculateSquare(x) {\n  return x * x;\n}\ncalculateSquare(4); // returns 16\n</code>\n</div>"
                  ],
                  class: 'p5',
                  module: 'Foundation',
                  submodule: 'Function'
                },
                {
                  file: 'src/core/reference.js',
                  line: 241,
                  description:
                    '<p>A <a href="#/p5/boolean">boolean</a> is one of the 7 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Primitive_values">primitive data types</a> in Javascript.\nA boolean can only be <code>true</code> or <code>false</code>.</p>\n<p>From <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type">the MDN entry</a>:\nBoolean represents a logical entity and can have two values: true, and false.</p>\n',
                  itemtype: 'property',
                  name: 'boolean',
                  example: [
                    "\n<div class='norender'>\n<code>\nlet myBoolean = false;\nconsole.log(typeof myBoolean); // prints 'boolean' to the console\n</code>\n</div>"
                  ],
                  class: 'p5',
                  module: 'Foundation',
                  submodule: 'Types'
                },
                {
                  file: 'src/core/reference.js',
                  line: 259,
                  description:
                    '<p>A <a href="#/p5/string">string</a> is one of the 7 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Primitive_values">primitive data types</a> in Javascript.\nA string is a series of text characters. In Javascript, a string value must be surrounded by either single-quotation marks(&#39;) or double-quotation marks(&quot;).</p>\n<p>From <a href="https://developer.mozilla.org/en-US/docs/Glossary/string">the MDN entry</a>:\nA string is a sequence of characters used to represent text.</p>\n',
                  itemtype: 'property',
                  name: 'string',
                  example: [
                    "\n<div class='norender'>\n<code>\nlet mood = 'chill';\nconsole.log(typeof mood); // prints 'string' to the console\n</code>\n</div>"
                  ],
                  class: 'p5',
                  module: 'Foundation',
                  submodule: 'Types'
                },
                {
                  file: 'src/core/reference.js',
                  line: 277,
                  description:
                    '<p>A <a href="#/p5/number">number</a> is one of the 7 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Primitive_values">primitive data types</a> in Javascript.\nA number can be a whole number or a decimal number.</p>\n<p><a href="https://developer.mozilla.org/en-US/docs/Glossary/number">The MDN entry for number</a></p>\n',
                  itemtype: 'property',
                  name: 'number',
                  example: [
                    "\n<div class='norender'>\n<code>\nlet num = 46.5;\nconsole.log(typeof num); // prints 'number' to the console\n</code>\n</div>"
                  ],
                  class: 'p5',
                  module: 'Foundation',
                  submodule: 'Types'
                },
                {
                  file: 'src/core/reference.js',
                  line: 294,
                  description:
                    '<p>From <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics">MDN&#39;s object basics</a>:\n An <a href="#/p5/object">object</a> is a collection of related data and/or functionality (which usually consists of several variables and functions —\n which are called properties and methods when they are inside objects.)</p>\n',
                  itemtype: 'property',
                  name: 'object',
                  example: [
                    "\n <div class='norender'>\n <code>\n let author = {\n   name: 'Ursula K Le Guin',\n   books: [\n     'The Left Hand of Darkness',\n     'The Dispossessed',\n     'A Wizard of Earthsea'\n   ]\n };\n console.log(author.name); // prints 'Ursula K Le Guin' to the console\n </code>\n </div>"
                  ],
                  class: 'p5',
                  module: 'Foundation',
                  submodule: 'Types'
                },
                {
                  file: 'src/core/reference.js',
                  line: 321,
                  description:
                    '<p>Creates and names a <a href="#/p5/class">class</a> which is a template for the creation of <a href="#/p5/objects">objects</a>.</p>\n<p>From <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class">the MDN entry</a>:\nThe class declaration creates a new Class with a given name using prototype-based inheritance.</p>\n',
                  itemtype: 'property',
                  name: 'class',
                  example: [
                    "\n<div class='norender'>\n<code>\nclass Rectangle {\n  constructor(name, height, width) {\n    this.name = name;\n    this.height = height;\n    this.width = width;\n  }\n}\nlet square = new Rectangle('square', 1, 1); // creating new instance of Polygon Class.\nconsole.log(square.width); // prints '1' to the console\n</code>\n</div>"
                  ],
                  class: 'p5',
                  module: 'Foundation',
                  submodule: 'Classes'
                },
                {
                  file: 'src/core/reference.js',
                  line: 348,
                  description:
                    '<p><a href="#/p5/for">for</a> creates a loop that is useful for executing one section of code multiple times.</p>\n<p>A &#39;for loop&#39; consists of three different expressions inside of a parenthesis, all of which are optional.\nThese expressions are used to control the number of times the loop is run.\nThe first expression is a statement that is used to set the initial state for the loop.\nThe second expression is a condition that you would like to check before each loop. If this expression returns\nfalse then the loop will exit.\nThe third expression is executed at the end of each loop.</p>\n<p>The code inside of the loop body (in between the curly braces) is executed between the evaluation of the second\nand third expression.</p>\n<p>As with any loop, it is important to ensure that the loop can &#39;exit&#39;, or that\nthe test condition will eventually evaluate to false. The test condition with a <a href="#/p5/for">for</a> loop\nis the second expression detailed above. Ensuring that this expression can eventually\nbecome false ensures that your loop doesn&#39;t attempt to run an infinite amount of times,\nwhich can crash your browser.</p>\n<p>From <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for">the MDN entry</a>:\nCreates a loop that executes a specified statement until the test condition evaluates to false.\nThe condition is evaluated after executing the statement, resulting in the specified statement executing at least once.</p>\n',
                  itemtype: 'property',
                  name: 'for',
                  example: [
                    "\n<div class='norender'>\n<code>\nfor (let i = 0; i < 9; i++) {\n  console.log(i);\n}\n</code>\n</div>"
                  ],
                  class: 'p5',
                  module: 'Foundation',
                  submodule: 'Iterative Statement'
                },
                {
                  file: 'src/core/reference.js',
                  line: 382,
                  description:
                    '<p><a href="#/p5/while">while</a> creates a loop that is useful for executing one section of code multiple times.</p>\n<p>With a &#39;while loop&#39;, the code inside of the loop body (between the curly braces) is run repeatedly until the test condition\n(inside of the parenthesis) evaluates to false. Unlike a <a href="#/p5/for">for</a> loop, the condition is tested before executing the code body with <a href="#/p5/while">while</a>,\nso if the condition is initially false the loop body, or statement, will never execute.</p>\n<p>As with any loop, it is important to ensure that the loop can &#39;exit&#39;, or that\nthe test condition will eventually evaluate to false. This is to keep your loop from trying to run an infinite amount of times,\nwhich can crash your browser.</p>\n<p>From <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while">the MDN entry</a>:\nThe while statement creates a loop that executes a specified statement as long as the test condition evaluates to true.\nThe condition is evaluated before executing the statement.</p>\n',
                  itemtype: 'property',
                  name: 'while',
                  example: [
                    "\n<div class='norender'>\n<code>\n// This example logs the lines below to the console\n// 4\n// 3\n// 2\n// 1\n// 0\nlet num = 5;\nwhile (num > 0) {\n  num = num - 1;\n  console.log(num);\n}\n</code>\n</div>"
                  ],
                  class: 'p5',
                  module: 'Foundation',
                  submodule: 'Iterative Statement'
                },
                {
                  file: 'src/core/reference.js',
                  line: 420,
                  description:
                    '<p>From <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify">the MDN entry</a>:\nThe JSON.stringify() method converts a JavaScript object or value to a JSON <a href="#/p5/string">string</a>.</p>\n',
                  itemtype: 'method',
                  name: 'stringify',
                  static: 1,
                  params: [
                    {
                      name: 'object',
                      description:
                        '<p>:Javascript object that you would like to convert to JSON</p>\n',
                      type: 'Object'
                    }
                  ],
                  example: [
                    '\n<div class=\'norender\'>\n<code>\nlet myObject = { x: 5, y: 6 };\nlet myObjectAsString = JSON.stringify(myObject);\nconsole.log(myObjectAsString); // prints "{"x":5,"y":6}" to the console\nconsole.log(typeof myObjectAsString); // prints \'string\' to the console\n</code>\n</div>'
                  ],
                  class: 'JSON',
                  module: 'Foundation',
                  submodule: 'JS Method'
                },
                {
                  file: 'src/core/reference.js',
                  line: 439,
                  description:
                    '<p>Prints a message to your browser&#39;s web console. When using p5, you can use <a href="#/p5/print">print</a>\nand <a href="#/p5/console/log">console.log</a> interchangeably.</p>\n<p>The console is opened differently depending on which browser you are using.\nHere are links on how to open the console in <a href="https://developer.mozilla.org/en-US/docs/Tools/Web_Console/Opening_the_Web_Console">Firefox</a>\n, <a href="https://developers.google.com/web/tools/chrome-devtools/open">Chrome</a>, <a href="https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide/console">Edge</a>,\nand <a href="https://support.apple.com/en-ca/guide/safari/sfri20948/mac">Safari</a>. With the <a href="https://editor.p5js.org/">online p5 editor</a> the\nconsole is embedded directly in the page underneath the code editor.</p>\n<p>From <a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/log">the MDN entry</a>:\nThe Console method log() outputs a message to the web console. The message may be a single <a href="#/p5/string">string</a> (with optional substitution values),\nor it may be any one or more JavaScript <a href="#/p5/object">objects</a>.</p>\n',
                  itemtype: 'method',
                  name: 'log',
                  static: 1,
                  params: [
                    {
                      name: 'message',
                      description:
                        '<p>:Message that you would like to print to the console</p>\n',
                      type: 'String|Expression|Object'
                    }
                  ],
                  example: [
                    "\n<div class='norender'>\n<code>\nlet myNum = 5;\nconsole.log(myNum); // prints 5 to the console\nconsole.log(myNum + 12); // prints 17 to the console\n</code>\n</div>"
                  ],
                  class: 'console',
                  module: 'Foundation',
                  submodule: 'JS Method'
                },
                {
                  file: 'src/core/rendering.js',
                  line: 15,
                  description:
                    '<p>Creates a canvas element in the document, and sets the dimensions of it\nin pixels. This method should be called only once at the start of setup.\nCalling <a href="#/p5/createCanvas">createCanvas</a> more than once in a sketch will result in very\nunpredictable behavior. If you want more than one drawing canvas\nyou could use <a href="#/p5/createGraphics">createGraphics</a> (hidden by default but it can be shown).\n<br><br>\nThe system variables width and height are set by the parameters passed\nto this function. If <a href="#/p5/createCanvas">createCanvas()</a> is not used, the window will be\ngiven a default size of 100x100 pixels.\n<br><br>\nFor more ways to position the canvas, see the\n<a href=\'https://github.com/processing/p5.js/wiki/Positioning-your-canvas\'>\npositioning the canvas</a> wiki page.</p>\n',
                  itemtype: 'method',
                  name: 'createCanvas',
                  params: [
                    {
                      name: 'w',
                      description: '<p>width of the canvas</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'h',
                      description: '<p>height of the canvas</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'renderer',
                      description: '<p>either P2D or WEBGL</p>\n',
                      type: 'Constant',
                      optional: true
                    }
                  ],
                  return: {
                    description: '',
                    type: 'p5.Renderer'
                  },
                  example: [
                    '\n<div>\n<code>\nfunction setup() {\n  createCanvas(100, 50);\n  background(153);\n  line(0, 0, width, height);\n}\n</code>\n</div>'
                  ],
                  alt: 'Black line extending from top-left of canvas to bottom right.',
                  class: 'p5',
                  module: 'Rendering',
                  submodule: 'Rendering'
                },
                {
                  file: 'src/core/rendering.js',
                  line: 115,
                  description:
                    '<p>Resizes the canvas to given width and height. The canvas will be cleared\nand draw will be called immediately, allowing the sketch to re-render itself\nin the resized canvas.</p>\n',
                  itemtype: 'method',
                  name: 'resizeCanvas',
                  params: [
                    {
                      name: 'w',
                      description: '<p>width of the canvas</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'h',
                      description: '<p>height of the canvas</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'noRedraw',
                      description: '<p>don&#39;t redraw the canvas immediately</p>\n',
                      type: 'Boolean',
                      optional: true
                    }
                  ],
                  example: [
                    '\n<div class="norender"><code>\nfunction setup() {\n  createCanvas(windowWidth, windowHeight);\n}\n\nfunction draw() {\n  background(0, 100, 200);\n}\n\nfunction windowResized() {\n  resizeCanvas(windowWidth, windowHeight);\n}\n</code></div>'
                  ],
                  alt: 'No image displayed.',
                  class: 'p5',
                  module: 'Rendering',
                  submodule: 'Rendering'
                },
                {
                  file: 'src/core/rendering.js',
                  line: 170,
                  description:
                    '<p>Removes the default canvas for a p5 sketch that doesn&#39;t\nrequire a canvas</p>\n',
                  itemtype: 'method',
                  name: 'noCanvas',
                  example: [
                    '\n<div>\n<code>\nfunction setup() {\n  noCanvas();\n}\n</code>\n</div>'
                  ],
                  alt: 'no image displayed',
                  class: 'p5',
                  module: 'Rendering',
                  submodule: 'Rendering'
                },
                {
                  file: 'src/core/rendering.js',
                  line: 193,
                  description:
                    '<p>Creates and returns a new p5.Renderer object. Use this class if you need\nto draw into an off-screen graphics buffer. The two parameters define the\nwidth and height in pixels.</p>\n',
                  itemtype: 'method',
                  name: 'createGraphics',
                  params: [
                    {
                      name: 'w',
                      description: '<p>width of the offscreen graphics buffer</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'h',
                      description: '<p>height of the offscreen graphics buffer</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'renderer',
                      description: '<p>either P2D or WEBGL\nundefined defaults to p2d</p>\n',
                      type: 'Constant',
                      optional: true
                    }
                  ],
                  return: {
                    description: 'offscreen graphics buffer',
                    type: 'p5.Graphics'
                  },
                  example: [
                    '\n<div>\n<code>\nlet pg;\nfunction setup() {\n  createCanvas(100, 100);\n  pg = createGraphics(100, 100);\n}\nfunction draw() {\n  background(200);\n  pg.background(100);\n  pg.noStroke();\n  pg.ellipse(pg.width / 2, pg.height / 2, 50, 50);\n  image(pg, 50, 50);\n  image(pg, 0, 0, 50, 50);\n}\n</code>\n</div>'
                  ],
                  alt:
                    '4 grey squares alternating light and dark grey. White quarter circle mid-left.',
                  class: 'p5',
                  module: 'Rendering',
                  submodule: 'Rendering'
                },
                {
                  file: 'src/core/rendering.js',
                  line: 232,
                  description:
                    "<p>Blends the pixels in the display window according to the defined mode.\nThere is a choice of the following modes to blend the source pixels (A)\nwith the ones of pixels already in the display window (B):</p>\n<ul>\n<li><code>BLEND</code> - linear interpolation of colours: C =\nA\\*factor + B. <b>This is the default blending mode.</b></li>\n<li><code>ADD</code> - sum of A and B</li>\n<li><code>DARKEST</code> - only the darkest colour succeeds: C =\nmin(A\\*factor, B).</li>\n<li><code>LIGHTEST</code> - only the lightest colour succeeds: C =\nmax(A\\*factor, B).</li>\n<li><code>DIFFERENCE</code> - subtract colors from underlying image.</li>\n<li><code>EXCLUSION</code> - similar to <code>DIFFERENCE</code>, but less\nextreme.</li>\n<li><code>MULTIPLY</code> - multiply the colors, result will always be\ndarker.</li>\n<li><code>SCREEN</code> - opposite multiply, uses inverse values of the\ncolors.</li>\n<li><code>REPLACE</code> - the pixels entirely replace the others and\ndon't utilize alpha (transparency) values.</li>\n<li><code>REMOVE</code> - removes pixels from B with the alpha strength of A.</li>\n<li><code>OVERLAY</code> - mix of <code>MULTIPLY</code> and <code>SCREEN\n</code>. Multiplies dark values, and screens light values. <em>(2D)</em></li>\n<li><code>HARD_LIGHT</code> - <code>SCREEN</code> when greater than 50%\ngray, <code>MULTIPLY</code> when lower. <em>(2D)</em></li>\n<li><code>SOFT_LIGHT</code> - mix of <code>DARKEST</code> and\n<code>LIGHTEST</code>. Works like <code>OVERLAY</code>, but not as harsh. <em>(2D)</em>\n</li>\n<li><code>DODGE</code> - lightens light tones and increases contrast,\nignores darks. <em>(2D)</em></li>\n<li><code>BURN</code> - darker areas are applied, increasing contrast,\nignores lights. <em>(2D)</em></li>\n<li><code>SUBTRACT</code> - remainder of A and B <em>(3D)</em></li>\n</ul>\n<br><br>\n<em>(2D)</em> indicates that this blend mode <b>only</b> works in the 2D renderer.<br>\n<em>(3D)</em> indicates that this blend mode <b>only</b> works in the WEBGL renderer.",
                  itemtype: 'method',
                  name: 'blendMode',
                  params: [
                    {
                      name: 'mode',
                      description:
                        '<p>blend mode to set for canvas.\n               either BLEND, DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY,\n               EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT,\n               SOFT_LIGHT, DODGE, BURN, ADD, REMOVE or SUBTRACT</p>\n',
                      type: 'Constant'
                    }
                  ],
                  example: [
                    '\n<div>\n<code>\nblendMode(LIGHTEST);\nstrokeWeight(30);\nstroke(80, 150, 255);\nline(25, 25, 75, 75);\nstroke(255, 50, 50);\nline(75, 25, 25, 75);\n</code>\n</div>\n<div>\n<code>\nblendMode(MULTIPLY);\nstrokeWeight(30);\nstroke(80, 150, 255);\nline(25, 25, 75, 75);\nstroke(255, 50, 50);\nline(75, 25, 25, 75);\n</code>\n</div>'
                  ],
                  alt:
                    'translucent image thick red & blue diagonal rounded lines intersecting center\nThick red & blue diagonal rounded lines intersecting center. dark at overlap',
                  class: 'p5',
                  module: 'Rendering',
                  submodule: 'Rendering'
                },
                {
                  file: 'src/core/shim.js',
                  line: 18,
                  description:
                    '<p>shim for Uint8ClampedArray.slice\n(allows arrayCopy to work with pixels[])\nwith thanks to <a href="http://halfpapstudios.com/blog/tag/html5-canvas/">http://halfpapstudios.com/blog/tag/html5-canvas/</a>\nEnumerable set to false to protect for...in from\nUint8ClampedArray.prototype pollution.</p>\n',
                  class: 'p5',
                  module: 'Rendering'
                },
                {
                  file: 'src/core/shim.js',
                  line: 39,
                  description:
                    '<p>this is implementation of Object.assign() which is unavailable in\nIE11 and (non-Chrome) Android browsers.\nThe assign() method is used to copy the values of all enumerable\nown properties from one or more source objects to a target object.\nIt will return the target object.\nModified from <a href="https://github.com/ljharb/object.assign">https://github.com/ljharb/object.assign</a></p>\n',
                  class: 'p5',
                  module: 'Rendering'
                },
                {
                  file: 'src/core/structure.js',
                  line: 10,
                  description:
                    '<p>Stops p5.js from continuously executing the code within <a href="#/p5/draw">draw()</a>.\nIf <a href="#/p5/loop">loop()</a> is called, the code in <a href="#/p5/draw">draw()</a> begins to run continuously again.\nIf using <a href="#/p5/noLoop">noLoop()</a> in <a href="#/p5/setup">setup()</a>, it should be the last line inside the block.\n<br><br>\nWhen <a href="#/p5/noLoop">noLoop()</a> is used, it&#39;s not possible to manipulate or access the\nscreen inside event handling functions such as <a href="#/p5/mousePressed">mousePressed()</a> or\n<a href="#/p5/keyPressed">keyPressed()</a>. Instead, use those functions to call <a href="#/p5/redraw">redraw()</a> or <a href="#/p5/loop">loop()</a>,\nwhich will run <a href="#/p5/draw">draw()</a>, which can update the screen properly. This means\nthat when <a href="#/p5/noLoop">noLoop()</a> has been called, no drawing can happen, and functions\nlike <a href="#/p5/saveFrame">saveFrame()</a> or <a href="#/p5/loadPixels">loadPixels()</a> may not be used.\n<br><br>\nNote that if the sketch is resized, <a href="#/p5/redraw">redraw()</a> will be called to update\nthe sketch, even after <a href="#/p5/noLoop">noLoop()</a> has been specified. Otherwise, the sketch\nwould enter an odd state until <a href="#/p5/loop">loop()</a> was called.</p>\n',
                  itemtype: 'method',
                  name: 'noLoop',
                  example: [
                    '\n<div><code>\nfunction setup() {\n  createCanvas(100, 100);\n  background(200);\n  noLoop();\n}\n\nfunction draw() {\n  line(10, 10, 90, 90);\n}\n</code></div>\n\n<div><code>\nlet x = 0;\nfunction setup() {\n  createCanvas(100, 100);\n}\n\nfunction draw() {\n  background(204);\n  x = x + 0.1;\n  if (x > width) {\n    x = 0;\n  }\n  line(x, 0, x, height);\n}\n\nfunction mousePressed() {\n  noLoop();\n}\n\nfunction mouseReleased() {\n  loop();\n}\n</code></div>'
                  ],
                  alt:
                    '113 pixel long line extending from top-left to bottom right of canvas.\nhorizontal line moves slowly from left. Loops but stops on mouse press.',
                  class: 'p5',
                  module: 'Structure',
                  submodule: 'Structure'
                },
                {
                  file: 'src/core/structure.js',
                  line: 72,
                  description:
                    '<p>By default, p5.js loops through draw() continuously, executing the code\nwithin it. However, the <a href="#/p5/draw">draw()</a> loop may be stopped by calling <a href="#/p5/noLoop">noLoop()</a>.\nIn that case, the <a href="#/p5/draw">draw()</a> loop can be resumed with loop().</p>\n<p>Avoid calling loop() from inside setup().</p>\n',
                  itemtype: 'method',
                  name: 'loop',
                  example: [
                    '\n<div><code>\nlet x = 0;\nfunction setup() {\n  createCanvas(100, 100);\n  noLoop();\n}\n\nfunction draw() {\n  background(204);\n  x = x + 0.1;\n  if (x > width) {\n    x = 0;\n  }\n  line(x, 0, x, height);\n}\n\nfunction mousePressed() {\n  loop();\n}\n\nfunction mouseReleased() {\n  noLoop();\n}\n</code></div>'
                  ],
                  alt:
                    'horizontal line moves slowly from left. Loops but stops on mouse press.',
                  class: 'p5',
                  module: 'Structure',
                  submodule: 'Structure'
                },
                {
                  file: 'src/core/structure.js',
                  line: 120,
                  description:
                    '<p>The <a href="#/p5/push">push()</a> function saves the current drawing style settings and\ntransformations, while <a href="#/p5/pop">pop()</a> restores these settings. Note that these\nfunctions are always used together. They allow you to change the style\nand transformation settings and later return to what you had. When a new\nstate is started with <a href="#/p5/push">push()</a>, it builds on the current style and transform\ninformation. The <a href="#/p5/push">push()</a> and <a href="#/p5/pop">pop()</a> functions can be embedded to provide\nmore control. (See the second example for a demonstration.)\n<br><br>\n<a href="#/p5/push">push()</a> stores information related to the current transformation state\nand style settings controlled by the following functions:\n<a href="#/p5/fill">fill()</a>,\n<a href="#/p5/noFill">noFill()</a>,\n<a href="#/p5/noStroke">noStroke()</a>,\n<a href="#/p5/stroke">stroke()</a>,\n<a href="#/p5/tint">tint()</a>,\n<a href="#/p5/noTint">noTint()</a>,\n<a href="#/p5/strokeWeight">strokeWeight()</a>,\n<a href="#/p5/strokeCap">strokeCap()</a>,\n<a href="#/p5/strokeJoin">strokeJoin()</a>,\n<a href="#/p5/imageMode">imageMode()</a>,\n<a href="#/p5/rectMode">rectMode()</a>,\n<a href="#/p5/ellipseMode">ellipseMode()</a>,\n<a href="#/p5/colorMode">colorMode()</a>,\n<a href="#/p5/textAlign">textAlign()</a>,\n<a href="#/p5/textFont">textFont()</a>,\n<a href="#/p5/textSize">textSize()</a>,\n<a href="#/p5/textLeading">textLeading()</a>,\n<a href="#/p5/applyMatrix">applyMatrix()</a>,\n<a href="#/p5/resetMatrix">resetMatrix()</a>,\n<a href="#/p5/rotate">rotate()</a>,\n<a href="#/p5/scale">scale()</a>,\n<a href="#/p5/shearX">shearX()</a>,\n<a href="#/p5/shearY">shearY()</a>,\n<a href="#/p5/translate">translate()</a>,\n<a href="#/p5/noiseSeed">noiseSeed()</a>.\n<br><br>\nIn WEBGL mode additional style settings are stored. These are controlled by the following functions: <a href="#/p5/setCamera">setCamera()</a>, <a href="#/p5/ambientLight">ambientLight()</a>, <a href="#/p5/directionalLight">directionalLight()</a>,\n<a href="#/p5/pointLight">pointLight()</a>, <a href="#/p5/texture">texture()</a>, <a href="#/p5/specularMaterial">specularMaterial()</a>, <a href="#/p5/shininess">shininess()</a>, <a href="#/p5/normalMaterial">normalMaterial()</a>\nand <a href="#/p5/shader">shader()</a>.</p>\n',
                  itemtype: 'method',
                  name: 'push',
                  example: [
                    '\n<div>\n<code>\nellipse(0, 50, 33, 33); // Left circle\n\npush(); // Start a new drawing state\nstrokeWeight(10);\nfill(204, 153, 0);\ntranslate(50, 0);\nellipse(0, 50, 33, 33); // Middle circle\npop(); // Restore original state\n\nellipse(100, 50, 33, 33); // Right circle\n</code>\n</div>\n<div>\n<code>\nellipse(0, 50, 33, 33); // Left circle\n\npush(); // Start a new drawing state\nstrokeWeight(10);\nfill(204, 153, 0);\nellipse(33, 50, 33, 33); // Left-middle circle\n\npush(); // Start another new drawing state\nstroke(0, 102, 153);\nellipse(66, 50, 33, 33); // Right-middle circle\npop(); // Restore previous state\n\npop(); // Restore original state\n\nellipse(100, 50, 33, 33); // Right circle\n</code>\n</div>'
                  ],
                  alt:
                    'Gold ellipse + thick black outline @center 2 white ellipses on left and right.\n2 Gold ellipses left black right blue stroke. 2 white ellipses on left+right.',
                  class: 'p5',
                  module: 'Structure',
                  submodule: 'Structure'
                },
                {
                  file: 'src/core/structure.js',
                  line: 211,
                  description:
                    '<p>The <a href="#/p5/push">push()</a> function saves the current drawing style settings and\ntransformations, while <a href="#/p5/pop">pop()</a> restores these settings. Note that these\nfunctions are always used together. They allow you to change the style\nand transformation settings and later return to what you had. When a new\nstate is started with <a href="#/p5/push">push()</a>, it builds on the current style and transform\ninformation. The <a href="#/p5/push">push()</a> and <a href="#/p5/pop">pop()</a> functions can be embedded to provide\nmore control. (See the second example for a demonstration.)\n<br><br>\n<a href="#/p5/push">push()</a> stores information related to the current transformation state\nand style settings controlled by the following functions:\n<a href="#/p5/fill">fill()</a>,\n<a href="#/p5/noFill">noFill()</a>,\n<a href="#/p5/noStroke">noStroke()</a>,\n<a href="#/p5/stroke">stroke()</a>,\n<a href="#/p5/tint">tint()</a>,\n<a href="#/p5/noTint">noTint()</a>,\n<a href="#/p5/strokeWeight">strokeWeight()</a>,\n<a href="#/p5/strokeCap">strokeCap()</a>,\n<a href="#/p5/strokeJoin">strokeJoin()</a>,\n<a href="#/p5/imageMode">imageMode()</a>,\n<a href="#/p5/rectMode">rectMode()</a>,\n<a href="#/p5/ellipseMode">ellipseMode()</a>,\n<a href="#/p5/colorMode">colorMode()</a>,\n<a href="#/p5/textAlign">textAlign()</a>,\n<a href="#/p5/textFont">textFont()</a>,\n<a href="#/p5/textSize">textSize()</a>,\n<a href="#/p5/textLeading">textLeading()</a>,\n<a href="#/p5/applyMatrix">applyMatrix()</a>,\n<a href="#/p5/resetMatrix">resetMatrix()</a>,\n<a href="#/p5/rotate">rotate()</a>,\n<a href="#/p5/scale">scale()</a>,\n<a href="#/p5/shearX">shearX()</a>,\n<a href="#/p5/shearY">shearY()</a>,\n<a href="#/p5/translate">translate()</a>,\n<a href="#/p5/noiseSeed">noiseSeed()</a>.\n<br><br>\nIn WEBGL mode additional style settings are stored. These are controlled by the following functions: <a href="#/p5/setCamera">setCamera()</a>, <a href="#/p5/ambientLight">ambientLight()</a>, <a href="#/p5/directionalLight">directionalLight()</a>,\n<a href="#/p5/pointLight">pointLight()</a>, <a href="#/p5/texture">texture()</a>, <a href="#/p5/specularMaterial">specularMaterial()</a>, <a href="#/p5/shininess">shininess()</a>, <a href="#/p5/normalMaterial">normalMaterial()</a>\nand <a href="#/p5/shader">shader()</a>.</p>\n',
                  itemtype: 'method',
                  name: 'pop',
                  example: [
                    '\n<div>\n<code>\nellipse(0, 50, 33, 33); // Left circle\n\npush(); // Start a new drawing state\ntranslate(50, 0);\nstrokeWeight(10);\nfill(204, 153, 0);\nellipse(0, 50, 33, 33); // Middle circle\npop(); // Restore original state\n\nellipse(100, 50, 33, 33); // Right circle\n</code>\n</div>\n<div>\n<code>\nellipse(0, 50, 33, 33); // Left circle\n\npush(); // Start a new drawing state\nstrokeWeight(10);\nfill(204, 153, 0);\nellipse(33, 50, 33, 33); // Left-middle circle\n\npush(); // Start another new drawing state\nstroke(0, 102, 153);\nellipse(66, 50, 33, 33); // Right-middle circle\npop(); // Restore previous state\n\npop(); // Restore original state\n\nellipse(100, 50, 33, 33); // Right circle\n</code>\n</div>'
                  ],
                  alt:
                    'Gold ellipse + thick black outline @center 2 white ellipses on left and right.\n2 Gold ellipses left black right blue stroke. 2 white ellipses on left+right.',
                  class: 'p5',
                  module: 'Structure',
                  submodule: 'Structure'
                },
                {
                  file: 'src/core/structure.js',
                  line: 303,
                  description:
                    '<p>Executes the code within <a href="#/p5/draw">draw()</a> one time. This functions allows the\n program to update the display window only when necessary, for example\n when an event registered by <a href="#/p5/mousePressed">mousePressed()</a> or <a href="#/p5/keyPressed">keyPressed()</a> occurs.\n <br><br>\n In structuring a program, it only makes sense to call <a href="#/p5/redraw">redraw()</a> within\n events such as <a href="#/p5/mousePressed">mousePressed()</a>. This is because <a href="#/p5/redraw">redraw()</a> does not run\n <a href="#/p5/draw">draw()</a> immediately (it only sets a flag that indicates an update is\n needed).\n <br><br>\n The <a href="#/p5/redraw">redraw()</a> function does not work properly when called inside <a href="#/p5/draw">draw()</a>.\n To enable/disable animations, use <a href="#/p5/loop">loop()</a> and <a href="#/p5/noLoop">noLoop()</a>.\n <br><br>\n In addition you can set the number of redraws per method call. Just\n add an integer as single parameter for the number of redraws.</p>\n',
                  itemtype: 'method',
                  name: 'redraw',
                  params: [
                    {
                      name: 'n',
                      description: '<p>Redraw for n-times. The default value is 1.</p>\n',
                      type: 'Integer',
                      optional: true
                    }
                  ],
                  example: [
                    "\n <div><code>\n let x = 0;\nfunction setup() {\n   createCanvas(100, 100);\n   noLoop();\n }\nfunction draw() {\n   background(204);\n   line(x, 0, x, height);\n }\nfunction mousePressed() {\n   x += 1;\n   redraw();\n }\n </code></div>\n<div class='norender'><code>\n let x = 0;\nfunction setup() {\n   createCanvas(100, 100);\n   noLoop();\n }\nfunction draw() {\n   background(204);\n   x += 1;\n   line(x, 0, x, height);\n }\nfunction mousePressed() {\n   redraw(5);\n }\n </code></div>"
                  ],
                  alt: 'black line on far left of canvas\n black line on far left of canvas',
                  class: 'p5',
                  module: 'Structure',
                  submodule: 'Structure'
                },
                {
                  file: 'src/core/transform.js',
                  line: 11,
                  description:
                    '<p>Multiplies the current matrix by the one specified through the parameters.\nThis is a powerful operation that can perform the equivalent of translate,\nscale, shear and rotate all at once. You can learn more about transformation\nmatrices on <a href="https://en.wikipedia.org/wiki/Transformation_matrix">\nWikipedia</a>.</p>\n<p>The naming of the arguments here follows the naming of the <a href=\n"https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-transform">\nWHATWG specification</a> and corresponds to a\ntransformation matrix of the\nform:</p>\n<blockquote>\n<p><img style="max-width: 150px" src="assets/transformation-matrix.png"\nalt="The transformation matrix used when applyMatrix is called"/></p>\n</blockquote>\n',
                  itemtype: 'method',
                  name: 'applyMatrix',
                  params: [
                    {
                      name: 'a',
                      description:
                        '<p>numbers which define the 2x3 matrix to be multiplied</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'b',
                      description:
                        '<p>numbers which define the 2x3 matrix to be multiplied</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'c',
                      description:
                        '<p>numbers which define the 2x3 matrix to be multiplied</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'd',
                      description:
                        '<p>numbers which define the 2x3 matrix to be multiplied</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'e',
                      description:
                        '<p>numbers which define the 2x3 matrix to be multiplied</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'f',
                      description:
                        '<p>numbers which define the 2x3 matrix to be multiplied</p>\n',
                      type: 'Number'
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n<div>\n<code>\nfunction setup() {\n  frameRate(10);\n  rectMode(CENTER);\n}\n\nfunction draw() {\n  let step = frameCount % 20;\n  background(200);\n  // Equivalent to translate(x, y);\n  applyMatrix(1, 0, 0, 1, 40 + step, 50);\n  rect(0, 0, 50, 50);\n}\n</code>\n</div>\n<div>\n<code>\nfunction setup() {\n  frameRate(10);\n  rectMode(CENTER);\n}\n\nfunction draw() {\n  let step = frameCount % 20;\n  background(200);\n  translate(50, 50);\n  // Equivalent to scale(x, y);\n  applyMatrix(1 / step, 0, 0, 1 / step, 0, 0);\n  rect(0, 0, 50, 50);\n}\n</code>\n</div>\n<div>\n<code>\nfunction setup() {\n  frameRate(10);\n  rectMode(CENTER);\n}\n\nfunction draw() {\n  let step = frameCount % 20;\n  let angle = map(step, 0, 20, 0, TWO_PI);\n  let cos_a = cos(angle);\n  let sin_a = sin(angle);\n  background(200);\n  translate(50, 50);\n  // Equivalent to rotate(angle);\n  applyMatrix(cos_a, sin_a, -sin_a, cos_a, 0, 0);\n  rect(0, 0, 50, 50);\n}\n</code>\n</div>\n<div>\n<code>\nfunction setup() {\n  frameRate(10);\n  rectMode(CENTER);\n}\n\nfunction draw() {\n  let step = frameCount % 20;\n  let angle = map(step, 0, 20, -PI / 4, PI / 4);\n  background(200);\n  translate(50, 50);\n  // equivalent to shearX(angle);\n  let shear_factor = 1 / tan(PI / 2 - angle);\n  applyMatrix(1, 0, shear_factor, 1, 0, 0);\n  rect(0, 0, 50, 50);\n}\n</code>\n</div>\n<div modernizr='webgl'>\n<code>\nfunction setup() {\n  createCanvas(100, 100, WEBGL);\n  noFill();\n}\n\nfunction draw() {\n  background(200);\n  rotateY(PI / 6);\n  stroke(153);\n  box(35);\n  let rad = millis() / 1000;\n  // Set rotation angles\n  let ct = cos(rad);\n  let st = sin(rad);\n  // Matrix for rotation around the Y axis\n  applyMatrix(  ct, 0.0,  st,  0.0,\n               0.0, 1.0, 0.0,  0.0,\n               -st, 0.0,  ct,  0.0,\n               0.0, 0.0, 0.0,  1.0);\n  stroke(255);\n  box(50);\n}\n</code>\n</div>"
                  ],
                  alt:
                    'A rectangle translating to the right\nA rectangle shrinking to the center\nA rectangle rotating clockwise about the center\nA rectangle shearing',
                  class: 'p5',
                  module: 'Transform',
                  submodule: 'Transform'
                },
                {
                  file: 'src/core/transform.js',
                  line: 148,
                  description:
                    '<p>Replaces the current matrix with the identity matrix.</p>\n',
                  itemtype: 'method',
                  name: 'resetMatrix',
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\ntranslate(50, 50);\napplyMatrix(0.5, 0.5, -0.5, 0.5, 0, 0);\nrect(0, 0, 20, 20);\n// Note that the translate is also reset.\nresetMatrix();\nrect(0, 0, 20, 20);\n</code>\n</div>'
                  ],
                  alt: 'A rotated retangle in the center with another at the top left corner',
                  class: 'p5',
                  module: 'Transform',
                  submodule: 'Transform'
                },
                {
                  file: 'src/core/transform.js',
                  line: 174,
                  description:
                    '<p>Rotates a shape the amount specified by the angle parameter. This\nfunction accounts for <a href="#/p5/angleMode">angleMode</a>, so angles can be entered in either\nRADIANS or DEGREES.\n<br><br>\nObjects are always rotated around their relative position to the\norigin and positive numbers rotate objects in a clockwise direction.\nTransformations apply to everything that happens after and subsequent\ncalls to the function accumulates the effect. For example, calling\nrotate(HALF_PI) and then rotate(HALF_PI) is the same as rotate(PI).\nAll tranformations are reset when <a href="#/p5/draw">draw()</a> begins again.\n<br><br>\nTechnically, <a href="#/p5/rotate">rotate()</a> multiplies the current transformation matrix\nby a rotation matrix. This function can be further controlled by\nthe <a href="#/p5/push">push()</a> and <a href="#/p5/pop">pop()</a>.</p>\n',
                  itemtype: 'method',
                  name: 'rotate',
                  params: [
                    {
                      name: 'angle',
                      description:
                        '<p>the angle of rotation, specified in radians\n                       or degrees, depending on current angleMode</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'axis',
                      description: '<p>(in 3d) the axis to rotate around</p>\n',
                      type: 'p5.Vector|Number[]',
                      optional: true
                    }
                  ],
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\ntranslate(width / 2, height / 2);\nrotate(PI / 3.0);\nrect(-26, -26, 52, 52);\n</code>\n</div>'
                  ],
                  alt:
                    'white 52x52 rect with black outline at center rotated counter 45 degrees',
                  class: 'p5',
                  module: 'Transform',
                  submodule: 'Transform'
                },
                {
                  file: 'src/core/transform.js',
                  line: 214,
                  description: '<p>Rotates around X axis.</p>\n',
                  itemtype: 'method',
                  name: 'rotateX',
                  params: [
                    {
                      name: 'angle',
                      description:
                        '<p>the angle of rotation, specified in radians\n                       or degrees, depending on current angleMode</p>\n',
                      type: 'Number'
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n<div modernizr='webgl'>\n<code>\nfunction setup() {\n  createCanvas(100, 100, WEBGL);\n}\nfunction draw() {\n  background(255);\n  rotateX(millis() / 1000);\n  box();\n}\n</code>\n</div>"
                  ],
                  alt: '3d box rotating around the x axis.',
                  class: 'p5',
                  module: 'Transform',
                  submodule: 'Transform'
                },
                {
                  file: 'src/core/transform.js',
                  line: 244,
                  description: '<p>Rotates around Y axis.</p>\n',
                  itemtype: 'method',
                  name: 'rotateY',
                  params: [
                    {
                      name: 'angle',
                      description:
                        '<p>the angle of rotation, specified in radians\n                       or degrees, depending on current angleMode</p>\n',
                      type: 'Number'
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n<div modernizr='webgl'>\n<code>\nfunction setup() {\n  createCanvas(100, 100, WEBGL);\n}\nfunction draw() {\n  background(255);\n  rotateY(millis() / 1000);\n  box();\n}\n</code>\n</div>"
                  ],
                  alt: '3d box rotating around the y axis.',
                  class: 'p5',
                  module: 'Transform',
                  submodule: 'Transform'
                },
                {
                  file: 'src/core/transform.js',
                  line: 274,
                  description: '<p>Rotates around Z axis. Webgl mode only.</p>\n',
                  itemtype: 'method',
                  name: 'rotateZ',
                  params: [
                    {
                      name: 'angle',
                      description:
                        '<p>the angle of rotation, specified in radians\n                       or degrees, depending on current angleMode</p>\n',
                      type: 'Number'
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n<div modernizr='webgl'>\n<code>\nfunction setup() {\n  createCanvas(100, 100, WEBGL);\n}\nfunction draw() {\n  background(255);\n  rotateZ(millis() / 1000);\n  box();\n}\n</code>\n</div>"
                  ],
                  alt: '3d box rotating around the z axis.',
                  class: 'p5',
                  module: 'Transform',
                  submodule: 'Transform'
                },
                {
                  file: 'src/core/transform.js',
                  line: 304,
                  description:
                    '<p>Increases or decreases the size of a shape by expanding and contracting\nvertices. Objects always scale from their relative origin to the\ncoordinate system. Scale values are specified as decimal percentages.\nFor example, the function call scale(2.0) increases the dimension of a\nshape by 200%.\n<br><br>\nTransformations apply to everything that happens after and subsequent\ncalls to the function multiply the effect. For example, calling scale(2.0)\nand then scale(1.5) is the same as scale(3.0). If <a href="#/p5/scale">scale()</a> is called\nwithin <a href="#/p5/draw">draw()</a>, the transformation is reset when the loop begins again.\n<br><br>\nUsing this function with the z parameter is only available in WEBGL mode.\nThis function can be further controlled with <a href="#/p5/push">push()</a> and <a href="#/p5/pop">pop()</a>.</p>\n',
                  itemtype: 'method',
                  name: 'scale',
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\nrect(30, 20, 50, 50);\nscale(0.5);\nrect(30, 20, 50, 50);\n</code>\n</div>\n\n<div>\n<code>\nrect(30, 20, 50, 50);\nscale(0.5, 1.3);\nrect(30, 20, 50, 50);\n</code>\n</div>'
                  ],
                  alt:
                    'white 52x52 rect with black outline at center rotated counter 45 degrees\n2 white rects with black outline- 1 50x50 at center. other 25x65 bottom left',
                  class: 'p5',
                  module: 'Transform',
                  submodule: 'Transform',
                  overloads: [
                    {
                      line: 304,
                      params: [
                        {
                          name: 's',
                          description:
                            '<p>percent to scale the object, or percentage to\n                     scale the object in the x-axis if multiple arguments\n                     are given</p>\n',
                          type: 'Number|p5.Vector|Number[]'
                        },
                        {
                          name: 'y',
                          description: '<p>percent to scale the object in the y-axis</p>\n',
                          type: 'Number',
                          optional: true
                        },
                        {
                          name: 'z',
                          description:
                            '<p>percent to scale the object in the z-axis (webgl only)</p>\n',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 349,
                      params: [
                        {
                          name: 'scales',
                          description: '<p>per-axis percents to scale the object</p>\n',
                          type: 'p5.Vector|Number[]'
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/core/transform.js',
                  line: 379,
                  description:
                    '<p>Shears a shape around the x-axis the amount specified by the angle\nparameter. Angles should be specified in the current angleMode.\nObjects are always sheared around their relative position to the origin\nand positive numbers shear objects in a clockwise direction.\n<br><br>\nTransformations apply to everything that happens after and subsequent\ncalls to the function accumulates the effect. For example, calling\nshearX(PI/2) and then shearX(PI/2) is the same as shearX(PI).\nIf <a href="#/p5/shearX">shearX()</a> is called within the <a href="#/p5/draw">draw()</a>, the transformation is reset when\nthe loop begins again.\n<br><br>\nTechnically, <a href="#/p5/shearX">shearX()</a> multiplies the current transformation matrix by a\nrotation matrix. This function can be further controlled by the\n<a href="#/p5/push">push()</a> and <a href="#/p5/pop">pop()</a> functions.</p>\n',
                  itemtype: 'method',
                  name: 'shearX',
                  params: [
                    {
                      name: 'angle',
                      description:
                        '<p>angle of shear specified in radians or degrees,\n                       depending on current angleMode</p>\n',
                      type: 'Number'
                    }
                  ],
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\ntranslate(width / 4, height / 4);\nshearX(PI / 4.0);\nrect(0, 0, 30, 30);\n</code>\n</div>'
                  ],
                  alt: 'white irregular quadrilateral with black outline at top middle.',
                  class: 'p5',
                  module: 'Transform',
                  submodule: 'Transform'
                },
                {
                  file: 'src/core/transform.js',
                  line: 419,
                  description:
                    '<p>Shears a shape around the y-axis the amount specified by the angle\nparameter. Angles should be specified in the current angleMode. Objects\nare always sheared around their relative position to the origin and\npositive numbers shear objects in a clockwise direction.\n<br><br>\nTransformations apply to everything that happens after and subsequent\ncalls to the function accumulates the effect. For example, calling\nshearY(PI/2) and then shearY(PI/2) is the same as shearY(PI). If\n<a href="#/p5/shearY">shearY()</a> is called within the <a href="#/p5/draw">draw()</a>, the transformation is reset when\nthe loop begins again.\n<br><br>\nTechnically, <a href="#/p5/shearY">shearY()</a> multiplies the current transformation matrix by a\nrotation matrix. This function can be further controlled by the\n<a href="#/p5/push">push()</a> and <a href="#/p5/pop">pop()</a> functions.</p>\n',
                  itemtype: 'method',
                  name: 'shearY',
                  params: [
                    {
                      name: 'angle',
                      description:
                        '<p>angle of shear specified in radians or degrees,\n                       depending on current angleMode</p>\n',
                      type: 'Number'
                    }
                  ],
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\ntranslate(width / 4, height / 4);\nshearY(PI / 4.0);\nrect(0, 0, 30, 30);\n</code>\n</div>'
                  ],
                  alt: 'white irregular quadrilateral with black outline at middle bottom.',
                  class: 'p5',
                  module: 'Transform',
                  submodule: 'Transform'
                },
                {
                  file: 'src/core/transform.js',
                  line: 459,
                  description:
                    '<p>Specifies an amount to displace objects within the display window.\nThe x parameter specifies left/right translation, the y parameter\nspecifies up/down translation.\n<br><br>\nTransformations are cumulative and apply to everything that happens after\nand subsequent calls to the function accumulates the effect. For example,\ncalling translate(50, 0) and then translate(20, 0) is the same as\ntranslate(70, 0). If <a href="#/p5/translate">translate()</a> is called within <a href="#/p5/draw">draw()</a>, the\ntransformation is reset when the loop begins again. This function can be\nfurther controlled by using <a href="#/p5/push">push()</a> and <a href="#/p5/pop">pop()</a>.</p>\n',
                  itemtype: 'method',
                  name: 'translate',
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\ntranslate(30, 20);\nrect(0, 0, 55, 55);\n</code>\n</div>\n\n<div>\n<code>\nrect(0, 0, 55, 55); // Draw rect at original 0,0\ntranslate(30, 20);\nrect(0, 0, 55, 55); // Draw rect at new 0,0\ntranslate(14, 14);\nrect(0, 0, 55, 55); // Draw rect at new 0,0\n</code>\n</div>\n\n\n<div>\n<code>\nfunction draw() {\n  background(200);\n  rectMode(CENTER);\n  translate(width / 2, height / 2);\n  translate(p5.Vector.fromAngle(millis() / 1000, 40));\n  rect(0, 0, 20, 20);\n}\n</code>\n</div>'
                  ],
                  alt:
                    'white 55x55 rect with black outline at center right.\n3 white 55x55 rects with black outlines at top-l, center-r and bottom-r.\na 20x20 white rect moving in a circle around the canvas',
                  class: 'p5',
                  module: 'Transform',
                  submodule: 'Transform',
                  overloads: [
                    {
                      line: 459,
                      params: [
                        {
                          name: 'x',
                          description: '<p>left/right translation</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y',
                          description: '<p>up/down translation</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'z',
                          description: '<p>forward/backward translation (webgl only)</p>\n',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 513,
                      params: [
                        {
                          name: 'vector',
                          description: '<p>the vector to translate by</p>\n',
                          type: 'p5.Vector'
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/data/local_storage.js',
                  line: 10,
                  description:
                    '<p>Stores a value in local storage under the key name.\n Local storage is saved in the browser and persists\n between browsing sessions and page reloads.\n The key can be the name of the variable but doesn&#39;t\n have to be. To retrieve stored items\n see <a href="#/p5/getItem">getItem</a>.\n <br><br>\n Sensitive data such as passwords or personal information\n should not be stored in local storage.</p>\n',
                  itemtype: 'method',
                  name: 'storeItem',
                  params: [
                    {
                      name: 'key',
                      description: '',
                      type: 'String'
                    },
                    {
                      name: 'value',
                      description: '',
                      type: 'String|Number|Object|Boolean|p5.Color|p5.Vector'
                    }
                  ],
                  example: [
                    "\n <div><code>\n // Type to change the letter in the\n // center of the canvas.\n // If you reload the page, it will\n // still display the last key you entered\nlet myText;\nfunction setup() {\n   createCanvas(100, 100);\n   myText = getItem('myText');\n   if (myText === null) {\n     myText = '';\n   }\n }\nfunction draw() {\n   textSize(40);\n   background(255);\n   text(myText, width / 2, height / 2);\n }\nfunction keyPressed() {\n   myText = key;\n   storeItem('myText', myText);\n }\n </code></div>"
                  ],
                  alt:
                    'When you type the key name is displayed as black text on white background.\n If you reload the page, the last letter typed is still displaying.',
                  class: 'p5',
                  module: 'Data',
                  submodule: 'LocalStorage'
                },
                {
                  file: 'src/data/local_storage.js',
                  line: 91,
                  description:
                    '<p>Returns the value of an item that was stored in local storage\n using storeItem()</p>\n',
                  itemtype: 'method',
                  name: 'getItem',
                  params: [
                    {
                      name: 'key',
                      description:
                        '<p>name that you wish to use to store in local storage</p>\n',
                      type: 'String'
                    }
                  ],
                  return: {
                    description: 'Value of stored item',
                    type: 'Number|Object|String|Boolean|p5.Color|p5.Vector'
                  },
                  example: [
                    "\n <div><code>\n // Click the mouse to change\n // the color of the background\n // Once you have changed the color\n // it will stay changed even when you\n // reload the page.\nlet myColor;\nfunction setup() {\n   createCanvas(100, 100);\n   myColor = getItem('myColor');\n }\nfunction draw() {\n   if (myColor !== null) {\n     background(myColor);\n   }\n }\nfunction mousePressed() {\n   myColor = color(random(255), random(255), random(255));\n   storeItem('myColor', myColor);\n }\n </code></div>"
                  ],
                  alt:
                    'If you click, the canvas changes to a random color.\n If you reload the page, the canvas is still the color it\n was when the page was previously loaded.',
                  class: 'p5',
                  module: 'Data',
                  submodule: 'LocalStorage'
                },
                {
                  file: 'src/data/local_storage.js',
                  line: 168,
                  description:
                    '<p>Clears all local storage items set with storeItem()\n for the current domain.</p>\n',
                  itemtype: 'method',
                  name: 'clearStorage',
                  example: [
                    "\n <div class=\"norender\">\n <code>\n function setup() {\n   let myNum = 10;\n   let myBool = false;\n   storeItem('myNum', myNum);\n   storeItem('myBool', myBool);\n   print(getItem('myNum')); // logs 10 to the console\n   print(getItem('myBool')); // logs false to the console\n   clearStorage();\n   print(getItem('myNum')); // logs null to the console\n   print(getItem('myBool')); // logs null to the console\n }\n </code></div>"
                  ],
                  class: 'p5',
                  module: 'Data',
                  submodule: 'LocalStorage'
                },
                {
                  file: 'src/data/local_storage.js',
                  line: 196,
                  description: '<p>Removes an item that was stored with storeItem()</p>\n',
                  itemtype: 'method',
                  name: 'removeItem',
                  params: [
                    {
                      name: 'key',
                      description: '',
                      type: 'String'
                    }
                  ],
                  example: [
                    "\n <div class=\"norender\">\n <code>\n function setup() {\n   let myVar = 10;\n   storeItem('myVar', myVar);\n   print(getItem('myVar')); // logs 10 to the console\n   removeItem('myVar');\n   print(getItem('myVar')); // logs null to the console\n }\n </code></div>"
                  ],
                  class: 'p5',
                  module: 'Data',
                  submodule: 'LocalStorage'
                },
                {
                  file: 'src/data/p5.TypedDict.js',
                  line: 14,
                  description:
                    '<p>Creates a new instance of p5.StringDict using the key-value pair\n or the object you provide.</p>\n',
                  itemtype: 'method',
                  name: 'createStringDict',
                  return: {
                    description: '',
                    type: 'p5.StringDict'
                  },
                  example: [
                    "\n <div class=\"norender\">\n <code>\n function setup() {\n   let myDictionary = createStringDict('p5', 'js');\n   print(myDictionary.hasKey('p5')); // logs true to console\n  let anotherDictionary = createStringDict({ happy: 'coding' });\n   print(anotherDictionary.hasKey('happy')); // logs true to console\n }\n </code></div>"
                  ],
                  class: 'p5',
                  module: 'Data',
                  submodule: 'Dictionary',
                  overloads: [
                    {
                      line: 14,
                      params: [
                        {
                          name: 'key',
                          description: '',
                          type: 'String'
                        },
                        {
                          name: 'value',
                          description: '',
                          type: 'String'
                        }
                      ],
                      return: {
                        description: '',
                        type: 'p5.StringDict'
                      }
                    },
                    {
                      line: 37,
                      params: [
                        {
                          name: 'object',
                          description: '<p>object</p>\n',
                          type: 'Object'
                        }
                      ],
                      return: {
                        description: '',
                        type: 'p5.StringDict'
                      }
                    }
                  ]
                },
                {
                  file: 'src/data/p5.TypedDict.js',
                  line: 48,
                  description:
                    '<p>Creates a new instance of <a href="#/p5.NumberDict">p5.NumberDict</a> using the key-value pair\n or object you provide.</p>\n',
                  itemtype: 'method',
                  name: 'createNumberDict',
                  return: {
                    description: '',
                    type: 'p5.NumberDict'
                  },
                  example: [
                    '\n <div class="norender">\n <code>\n function setup() {\n   let myDictionary = createNumberDict(100, 42);\n   print(myDictionary.hasKey(100)); // logs true to console\n  let anotherDictionary = createNumberDict({ 200: 84 });\n   print(anotherDictionary.hasKey(200)); // logs true to console\n }\n </code></div>'
                  ],
                  class: 'p5',
                  module: 'Data',
                  submodule: 'Dictionary',
                  overloads: [
                    {
                      line: 48,
                      params: [
                        {
                          name: 'key',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'value',
                          description: '',
                          type: 'Number'
                        }
                      ],
                      return: {
                        description: '',
                        type: 'p5.NumberDict'
                      }
                    },
                    {
                      line: 71,
                      params: [
                        {
                          name: 'object',
                          description: '<p>object</p>\n',
                          type: 'Object'
                        }
                      ],
                      return: {
                        description: '',
                        type: 'p5.NumberDict'
                      }
                    }
                  ]
                },
                {
                  file: 'src/data/p5.TypedDict.js',
                  line: 101,
                  description:
                    '<p>Returns the number of key-value pairs currently stored in the Dictionary.</p>\n',
                  itemtype: 'method',
                  name: 'size',
                  return: {
                    description: 'the number of key-value pairs in the Dictionary',
                    type: 'Integer'
                  },
                  example: [
                    '\n<div class="norender">\n<code>\nfunction setup() {\n  let myDictionary = createNumberDict(1, 10);\n  myDictionary.create(2, 20);\n  myDictionary.create(3, 30);\n  print(myDictionary.size()); // logs 3 to the console\n}\n</code></div>\n'
                  ],
                  class: 'p5.TypedDict',
                  module: 'Data',
                  submodule: 'Dictionary'
                },
                {
                  file: 'src/data/p5.TypedDict.js',
                  line: 123,
                  description:
                    '<p>Returns true if the given key exists in the Dictionary,\notherwise returns false.</p>\n',
                  itemtype: 'method',
                  name: 'hasKey',
                  params: [
                    {
                      name: 'key',
                      description: '<p>that you want to look up</p>\n',
                      type: 'Number|String'
                    }
                  ],
                  return: {
                    description: 'whether that key exists in Dictionary',
                    type: 'Boolean'
                  },
                  example: [
                    "\n<div class=\"norender\">\n<code>\nfunction setup() {\n  let myDictionary = createStringDict('p5', 'js');\n  print(myDictionary.hasKey('p5')); // logs true to console\n}\n</code></div>\n"
                  ],
                  class: 'p5.TypedDict',
                  module: 'Data',
                  submodule: 'Dictionary'
                },
                {
                  file: 'src/data/p5.TypedDict.js',
                  line: 146,
                  description: '<p>Returns the value stored at the given key.</p>\n',
                  itemtype: 'method',
                  name: 'get',
                  params: [
                    {
                      name: 'the',
                      description: '<p>key you want to access</p>\n',
                      type: 'Number|String'
                    }
                  ],
                  return: {
                    description: 'the value stored at that key',
                    type: 'Number|String'
                  },
                  example: [
                    "\n<div class=\"norender\">\n<code>\nfunction setup() {\n  let myDictionary = createStringDict('p5', 'js');\n  let myValue = myDictionary.get('p5');\n  print(myValue === 'js'); // logs true to console\n}\n</code></div>\n"
                  ],
                  class: 'p5.TypedDict',
                  module: 'Data',
                  submodule: 'Dictionary'
                },
                {
                  file: 'src/data/p5.TypedDict.js',
                  line: 173,
                  description:
                    '<p>Updates the value associated with the given key in case it already exists\nin the Dictionary. Otherwise a new key-value pair is added.</p>\n',
                  itemtype: 'method',
                  name: 'set',
                  params: [
                    {
                      name: 'key',
                      description: '',
                      type: 'Number|String'
                    },
                    {
                      name: 'value',
                      description: '',
                      type: 'Number|String'
                    }
                  ],
                  example: [
                    "\n<div class=\"norender\">\n<code>\nfunction setup() {\n  let myDictionary = createStringDict('p5', 'js');\n  myDictionary.set('p5', 'JS');\n  myDictionary.print(); // logs \"key: p5 - value: JS\" to console\n}\n</code></div>\n"
                  ],
                  class: 'p5.TypedDict',
                  module: 'Data',
                  submodule: 'Dictionary'
                },
                {
                  file: 'src/data/p5.TypedDict.js',
                  line: 201,
                  description:
                    '<p>private helper function to handle the user passing in objects\nduring construction or calls to create()</p>\n',
                  class: 'p5.TypedDict',
                  module: 'Data',
                  submodule: 'Dictionary'
                },
                {
                  file: 'src/data/p5.TypedDict.js',
                  line: 212,
                  description: '<p>Creates a new key-value pair in the Dictionary.</p>\n',
                  itemtype: 'method',
                  name: 'create',
                  example: [
                    "\n<div class=\"norender\">\n<code>\nfunction setup() {\n  let myDictionary = createStringDict('p5', 'js');\n  myDictionary.create('happy', 'coding');\n  myDictionary.print();\n  // above logs \"key: p5 - value: js, key: happy - value: coding\" to console\n}\n</code></div>"
                  ],
                  class: 'p5.TypedDict',
                  module: 'Data',
                  submodule: 'Dictionary',
                  overloads: [
                    {
                      line: 212,
                      params: [
                        {
                          name: 'key',
                          description: '',
                          type: 'Number|String'
                        },
                        {
                          name: 'value',
                          description: '',
                          type: 'Number|String'
                        }
                      ]
                    },
                    {
                      line: 230,
                      params: [
                        {
                          name: 'obj',
                          description: '<p>key/value pair</p>\n',
                          type: 'Object'
                        }
                      ]
                    }
                  ]
                },
                {
                  file: 'src/data/p5.TypedDict.js',
                  line: 248,
                  description:
                    '<p>Removes all previously stored key-value pairs from the Dictionary.</p>\n',
                  itemtype: 'method',
                  name: 'clear',
                  example: [
                    "\n<div class=\"norender\">\n<code>\nfunction setup() {\n  let myDictionary = createStringDict('p5', 'js');\n  print(myDictionary.hasKey('p5')); // prints 'true'\n  myDictionary.clear();\n  print(myDictionary.hasKey('p5')); // prints 'false'\n}\n</code>\n</div>"
                  ],
                  class: 'p5.TypedDict',
                  module: 'Data',
                  submodule: 'Dictionary'
                },
                {
                  file: 'src/data/p5.TypedDict.js',
                  line: 269,
                  description:
                    '<p>Removes the key-value pair stored at the given key from the Dictionary.</p>\n',
                  itemtype: 'method',
                  name: 'remove',
                  params: [
                    {
                      name: 'key',
                      description: '<p>for the pair to remove</p>\n',
                      type: 'Number|String'
                    }
                  ],
                  example: [
                    "\n<div class=\"norender\">\n<code>\nfunction setup() {\n  let myDictionary = createStringDict('p5', 'js');\n  myDictionary.create('happy', 'coding');\n  myDictionary.print();\n  // above logs \"key: p5 - value: js, key: happy - value: coding\" to console\n  myDictionary.remove('p5');\n  myDictionary.print();\n  // above logs \"key: happy value: coding\" to console\n}\n</code></div>\n"
                  ],
                  class: 'p5.TypedDict',
                  module: 'Data',
                  submodule: 'Dictionary'
                },
                {
                  file: 'src/data/p5.TypedDict.js',
                  line: 299,
                  description:
                    '<p>Logs the set of items currently stored in the Dictionary to the console.</p>\n',
                  itemtype: 'method',
                  name: 'print',
                  example: [
                    "\n<div class=\"norender\">\n<code>\nfunction setup() {\n  let myDictionary = createStringDict('p5', 'js');\n  myDictionary.create('happy', 'coding');\n  myDictionary.print();\n  // above logs \"key: p5 - value: js, key: happy - value: coding\" to console\n}\n</code>\n</div>"
                  ],
                  class: 'p5.TypedDict',
                  module: 'Data',
                  submodule: 'Dictionary'
                },
                {
                  file: 'src/data/p5.TypedDict.js',
                  line: 323,
                  description:
                    '<p>Converts the Dictionary into a CSV file for local download.</p>\n',
                  itemtype: 'method',
                  name: 'saveTable',
                  example: [
                    "\n<div>\n<code>\nfunction setup() {\n  createCanvas(100, 100);\n  background(200);\n  text('click here to save', 10, 10, 70, 80);\n}\n\nfunction mousePressed() {\n  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {\n    createStringDict({\n      john: 1940,\n      paul: 1942,\n      george: 1943,\n      ringo: 1940\n    }).saveTable('beatles');\n  }\n}\n</code>\n</div>"
                  ],
                  class: 'p5.TypedDict',
                  module: 'Data',
                  submodule: 'Dictionary'
                },
                {
                  file: 'src/data/p5.TypedDict.js',
                  line: 361,
                  description:
                    '<p>Converts the Dictionary into a JSON file for local download.</p>\n',
                  itemtype: 'method',
                  name: 'saveJSON',
                  example: [
                    "\n<div>\n<code>\nfunction setup() {\n  createCanvas(100, 100);\n  background(200);\n  text('click here to save', 10, 10, 70, 80);\n}\n\nfunction mousePressed() {\n  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {\n    createStringDict({\n      john: 1940,\n      paul: 1942,\n      george: 1943,\n      ringo: 1940\n    }).saveJSON('beatles');\n  }\n}\n</code>\n</div>"
                  ],
                  class: 'p5.TypedDict',
                  module: 'Data',
                  submodule: 'Dictionary'
                },
                {
                  file: 'src/data/p5.TypedDict.js',
                  line: 392,
                  description:
                    '<p>private helper function to ensure that the user passed in valid\nvalues for the Dictionary type</p>\n',
                  class: 'p5.TypedDict',
                  module: 'Data',
                  submodule: 'Dictionary'
                },
                {
                  file: 'src/data/p5.TypedDict.js',
                  line: 431,
                  description:
                    '<p>private helper function to ensure that the user passed in valid\nvalues for the Dictionary type</p>\n',
                  class: 'p5.NumberDict',
                  module: 'Data',
                  submodule: 'Dictionary'
                },
                {
                  file: 'src/data/p5.TypedDict.js',
                  line: 438,
                  description:
                    '<p>Add the given number to the value currently stored at the given key.\nThe sum then replaces the value previously stored in the Dictionary.</p>\n',
                  itemtype: 'method',
                  name: 'add',
                  params: [
                    {
                      name: 'Key',
                      description: '<p>for the value you wish to add to</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'Number',
                      description: '<p>to add to the value</p>\n',
                      type: 'Number'
                    }
                  ],
                  example: [
                    "\n<div class='norender'>\n<code>\nfunction setup() {\n  let myDictionary = createNumberDict(2, 5);\n  myDictionary.add(2, 2);\n  print(myDictionary.get(2)); // logs 7 to console.\n}\n</code></div>\n\n"
                  ],
                  class: 'p5.NumberDict',
                  module: 'Data',
                  submodule: 'Dictionary'
                },
                {
                  file: 'src/data/p5.TypedDict.js',
                  line: 466,
                  description:
                    '<p>Subtract the given number from the value currently stored at the given key.\nThe difference then replaces the value previously stored in the Dictionary.</p>\n',
                  itemtype: 'method',
                  name: 'sub',
                  params: [
                    {
                      name: 'Key',
                      description: '<p>for the value you wish to subtract from</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'Number',
                      description: '<p>to subtract from the value</p>\n',
                      type: 'Number'
                    }
                  ],
                  example: [
                    "\n<div class='norender'>\n<code>\nfunction setup() {\n  let myDictionary = createNumberDict(2, 5);\n  myDictionary.sub(2, 2);\n  print(myDictionary.get(2)); // logs 3 to console.\n}\n</code></div>\n\n"
                  ],
                  class: 'p5.NumberDict',
                  module: 'Data',
                  submodule: 'Dictionary'
                },
                {
                  file: 'src/data/p5.TypedDict.js',
                  line: 490,
                  description:
                    '<p>Multiply the given number with the value currently stored at the given key.\nThe product then replaces the value previously stored in the Dictionary.</p>\n',
                  itemtype: 'method',
                  name: 'mult',
                  params: [
                    {
                      name: 'Key',
                      description: '<p>for value you wish to multiply</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'Amount',
                      description: '<p>to multiply the value by</p>\n',
                      type: 'Number'
                    }
                  ],
                  example: [
                    "\n<div class='norender'>\n<code>\nfunction setup() {\n  let myDictionary = createNumberDict(2, 4);\n  myDictionary.mult(2, 2);\n  print(myDictionary.get(2)); // logs 8 to console.\n}\n</code></div>\n\n"
                  ],
                  class: 'p5.NumberDict',
                  module: 'Data',
                  submodule: 'Dictionary'
                },
                {
                  file: 'src/data/p5.TypedDict.js',
                  line: 518,
                  description:
                    '<p>Divide the given number with the value currently stored at the given key.\nThe quotient then replaces the value previously stored in the Dictionary.</p>\n',
                  itemtype: 'method',
                  name: 'div',
                  params: [
                    {
                      name: 'Key',
                      description: '<p>for value you wish to divide</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'Amount',
                      description: '<p>to divide the value by</p>\n',
                      type: 'Number'
                    }
                  ],
                  example: [
                    "\n<div class='norender'>\n<code>\nfunction setup() {\n  let myDictionary = createNumberDict(2, 8);\n  myDictionary.div(2, 2);\n  print(myDictionary.get(2)); // logs 4 to console.\n}\n</code></div>\n\n"
                  ],
                  class: 'p5.NumberDict',
                  module: 'Data',
                  submodule: 'Dictionary'
                },
                {
                  file: 'src/data/p5.TypedDict.js',
                  line: 546,
                  description:
                    '<p>private helper function for finding lowest or highest value\nthe argument &#39;flip&#39; is used to flip the comparison arrow\nfrom &#39;less than&#39; to &#39;greater than&#39;</p>\n',
                  class: 'p5.NumberDict',
                  module: 'Data',
                  submodule: 'Dictionary'
                },
                {
                  file: 'src/data/p5.TypedDict.js',
                  line: 571,
                  description:
                    '<p>Return the lowest number currently stored in the Dictionary.</p>\n',
                  itemtype: 'method',
                  name: 'minValue',
                  return: {
                    description: '',
                    type: 'Number'
                  },
                  example: [
                    "\n<div class='norender'>\n<code>\nfunction setup() {\n  let myDictionary = createNumberDict({ 2: -10, 4: 0.65, 1.2: 3 });\n  let lowestValue = myDictionary.minValue(); // value is -10\n  print(lowestValue);\n}\n</code></div>\n"
                  ],
                  class: 'p5.NumberDict',
                  module: 'Data',
                  submodule: 'Dictionary'
                },
                {
                  file: 'src/data/p5.TypedDict.js',
                  line: 592,
                  description:
                    '<p>Return the highest number currently stored in the Dictionary.</p>\n',
                  itemtype: 'method',
                  name: 'maxValue',
                  return: {
                    description: '',
                    type: 'Number'
                  },
                  example: [
                    "\n<div class='norender'>\n<code>\nfunction setup() {\n  let myDictionary = createNumberDict({ 2: -10, 4: 0.65, 1.2: 3 });\n  let highestValue = myDictionary.maxValue(); // value is 3\n  print(highestValue);\n}\n</code></div>\n"
                  ],
                  class: 'p5.NumberDict',
                  module: 'Data',
                  submodule: 'Dictionary'
                },
                {
                  file: 'src/data/p5.TypedDict.js',
                  line: 613,
                  description:
                    '<p>private helper function for finding lowest or highest key\nthe argument &#39;flip&#39; is used to flip the comparison arrow\nfrom &#39;less than&#39; to &#39;greater than&#39;</p>\n',
                  class: 'p5.NumberDict',
                  module: 'Data',
                  submodule: 'Dictionary'
                },
                {
                  file: 'src/data/p5.TypedDict.js',
                  line: 636,
                  description:
                    '<p>Return the lowest key currently used in the Dictionary.</p>\n',
                  itemtype: 'method',
                  name: 'minKey',
                  return: {
                    description: '',
                    type: 'Number'
                  },
                  example: [
                    "\n<div class='norender'>\n<code>\nfunction setup() {\n  let myDictionary = createNumberDict({ 2: 4, 4: 6, 1.2: 3 });\n  let lowestKey = myDictionary.minKey(); // value is 1.2\n  print(lowestKey);\n}\n</code></div>\n"
                  ],
                  class: 'p5.NumberDict',
                  module: 'Data',
                  submodule: 'Dictionary'
                },
                {
                  file: 'src/data/p5.TypedDict.js',
                  line: 657,
                  description:
                    '<p>Return the highest key currently used in the Dictionary.</p>\n',
                  itemtype: 'method',
                  name: 'maxKey',
                  return: {
                    description: '',
                    type: 'Number'
                  },
                  example: [
                    "\n<div class='norender'>\n<code>\nfunction setup() {\n  let myDictionary = createNumberDict({ 2: 4, 4: 6, 1.2: 3 });\n  let highestKey = myDictionary.maxKey(); // value is 4\n  print(highestKey);\n}\n</code></div>\n"
                  ],
                  class: 'p5.NumberDict',
                  module: 'Data',
                  submodule: 'Dictionary'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 21,
                  description:
                    '<p>Searches the page for an element with the given ID, class, or tag name (using the &#39;#&#39; or &#39;.&#39;\nprefixes to specify an ID or class respectively, and none for a tag) and returns it as\na <a href="#/p5.Element">p5.Element</a>. If a class or tag name is given with more than 1 element,\nonly the first element will be returned.\nThe DOM node itself can be accessed with .elt.\nReturns null if none found. You can also specify a container to search within.</p>\n',
                  itemtype: 'method',
                  name: 'select',
                  params: [
                    {
                      name: 'name',
                      description: '<p>id, class, or tag name of element to search for</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'container',
                      description:
                        '<p>id, <a href="#/p5.Element">p5.Element</a>, or\n                                            HTML element to search within</p>\n',
                      type: 'String|p5.Element|HTMLElement',
                      optional: true
                    }
                  ],
                  return: {
                    description:
                      '<a href="#/p5.Element">p5.Element</a> containing node found',
                    type: 'p5.Element|null'
                  },
                  example: [
                    "\n<div ><code class='norender'>\nfunction setup() {\n  createCanvas(100, 100);\n  //translates canvas 50px down\n  select('canvas').position(100, 100);\n}\n</code></div>\n<div><code class='norender'>\n// these are all valid calls to select()\nlet a = select('#moo');\nlet b = select('#blah', '#myContainer');\nlet c, e;\nif (b) {\n  c = select('#foo', b);\n}\nlet d = document.getElementById('beep');\nif (d) {\n  e = select('p', d);\n}\n[a, b, c, d, e]; // unused\n</code></div>\n"
                  ],
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 88,
                  description:
                    '<p>Searches the page for elements with the given class or tag name (using the &#39;.&#39; prefix\nto specify a class and no prefix for a tag) and returns them as <a href="#/p5.Element">p5.Element</a>s\nin an array.\nThe DOM node itself can be accessed with .elt.\nReturns an empty array if none found.\nYou can also specify a container to search within.</p>\n',
                  itemtype: 'method',
                  name: 'selectAll',
                  params: [
                    {
                      name: 'name',
                      description: '<p>class or tag name of elements to search for</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'container',
                      description:
                        '<p>id, <a href="#/p5.Element">p5.Element</a>, or HTML element to search within</p>\n',
                      type: 'String',
                      optional: true
                    }
                  ],
                  return: {
                    description:
                      'Array of <a href="#/p5.Element">p5.Element</a>s containing nodes found',
                    type: 'p5.Element[]'
                  },
                  example: [
                    "\n<div class='norender'><code>\nfunction setup() {\n  createButton('btn');\n  createButton('2nd btn');\n  createButton('3rd btn');\n  let buttons = selectAll('button');\n\n  for (let i = 0; i < buttons.length; i++) {\n    buttons[i].size(100, 100);\n  }\n}\n</code></div>\n<div class='norender'><code>\n// these are all valid calls to selectAll()\nlet a = selectAll('.moo');\na = selectAll('div');\na = selectAll('button', '#myContainer');\n\nlet d = select('#container');\na = selectAll('p', d);\n\nlet f = document.getElementById('beep');\na = select('.blah', f);\n\na; // unused\n</code></div>\n"
                  ],
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 149,
                  description: '<p>Helper function for select and selectAll</p>\n',
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 165,
                  description: '<p>Helper function for getElement and getElements.</p>\n',
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 199,
                  description:
                    '<p>Removes all elements created by p5, except any canvas / graphics\nelements created by <a href="#/p5/createCanvas">createCanvas</a> or <a href="#/p5/createGraphics">createGraphics</a>.\nEvent handlers are removed, and element is removed from the DOM.</p>\n',
                  itemtype: 'method',
                  name: 'removeElements',
                  example: [
                    "\n<div class='norender'><code>\nfunction setup() {\n  createCanvas(100, 100);\n  createDiv('this is some text');\n  createP('this is a paragraph');\n}\nfunction mousePressed() {\n  removeElements(); // this will remove the div and p, not canvas\n}\n</code></div>\n"
                  ],
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 226,
                  description:
                    '<p>The .<a href="#/p5.Element/changed">changed()</a> function is called when the value of an\nelement changes.\nThis can be used to attach an element specific event listener.</p>\n',
                  itemtype: 'method',
                  name: 'changed',
                  params: [
                    {
                      name: 'fxn',
                      description:
                        '<p>function to be fired when the value of\n                               an element changes.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                      type: 'Function|Boolean'
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n<div><code>\nlet sel;\n\nfunction setup() {\n  textAlign(CENTER);\n  background(200);\n  sel = createSelect();\n  sel.position(10, 10);\n  sel.option('pear');\n  sel.option('kiwi');\n  sel.option('grape');\n  sel.changed(mySelectEvent);\n}\n\nfunction mySelectEvent() {\n  let item = sel.value();\n  background(200);\n  text(\"it's a \" + item + '!', 50, 50);\n}\n</code></div>\n\n<div><code>\nlet checkbox;\nlet cnv;\n\nfunction setup() {\n  checkbox = createCheckbox(' fill');\n  checkbox.changed(changeFill);\n  cnv = createCanvas(100, 100);\n  cnv.position(0, 30);\n  noFill();\n}\n\nfunction draw() {\n  background(200);\n  ellipse(50, 50, 50, 50);\n}\n\nfunction changeFill() {\n  if (checkbox.checked()) {\n    fill(0);\n  } else {\n    noFill();\n  }\n}\n</code></div>"
                  ],
                  alt:
                    'dropdown: pear, kiwi, grape. When selected text "its a" + selection shown.',
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 294,
                  description:
                    '<p>The .<a href="#/p5.Element/input">input()</a> function is called when any user input is\ndetected with an element. The input event is often used\nto detect keystrokes in a input element, or changes on a\nslider element. This can be used to attach an element specific\nevent listener.</p>\n',
                  itemtype: 'method',
                  name: 'input',
                  params: [
                    {
                      name: 'fxn',
                      description:
                        '<p>function to be fired when any user input is\n                               detected within the element.\n                               if <code>false</code> is passed instead, the previously\n                               firing function will no longer fire.</p>\n',
                      type: 'Function|Boolean'
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n<div class='norender'><code>\n// Open your console to see the output\nfunction setup() {\n  let inp = createInput('');\n  inp.input(myInputEvent);\n}\n\nfunction myInputEvent() {\n  console.log('you are typing: ', this.value());\n}\n</code></div>"
                  ],
                  alt: 'no display.',
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 329,
                  description: '<p>Helpers for create methods.</p>\n',
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 340,
                  description:
                    '<p>Creates a &lt;div&gt;&lt;/div&gt; element in the DOM with given inner HTML.</p>\n',
                  itemtype: 'method',
                  name: 'createDiv',
                  params: [
                    {
                      name: 'html',
                      description: '<p>inner HTML for element created</p>\n',
                      type: 'String',
                      optional: true
                    }
                  ],
                  return: {
                    description:
                      'pointer to <a href="#/p5.Element">p5.Element</a> holding created node',
                    type: 'p5.Element'
                  },
                  example: [
                    "\n<div class='norender'><code>\ncreateDiv('this is some text');\n</code></div>"
                  ],
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 352,
                  description:
                    '<p>Creates a &lt;p&gt;&lt;/p&gt; element in the DOM with given inner HTML. Used\nfor paragraph length text.</p>\n',
                  itemtype: 'method',
                  name: 'createP',
                  params: [
                    {
                      name: 'html',
                      description: '<p>inner HTML for element created</p>\n',
                      type: 'String',
                      optional: true
                    }
                  ],
                  return: {
                    description:
                      'pointer to <a href="#/p5.Element">p5.Element</a> holding created node',
                    type: 'p5.Element'
                  },
                  example: [
                    "\n<div class='norender'><code>\ncreateP('this is some text');\n</code></div>"
                  ],
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 365,
                  description:
                    '<p>Creates a &lt;span&gt;&lt;/span&gt; element in the DOM with given inner HTML.</p>\n',
                  itemtype: 'method',
                  name: 'createSpan',
                  params: [
                    {
                      name: 'html',
                      description: '<p>inner HTML for element created</p>\n',
                      type: 'String',
                      optional: true
                    }
                  ],
                  return: {
                    description:
                      'pointer to <a href="#/p5.Element">p5.Element</a> holding created node',
                    type: 'p5.Element'
                  },
                  example: [
                    "\n<div class='norender'><code>\ncreateSpan('this is some text');\n</code></div>"
                  ],
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 386,
                  description:
                    '<p>Creates an &lt;img&gt; element in the DOM with given src and\nalternate text.</p>\n',
                  itemtype: 'method',
                  name: 'createImg',
                  return: {
                    description:
                      'pointer to <a href="#/p5.Element">p5.Element</a> holding created node',
                    type: 'p5.Element'
                  },
                  example: [
                    "\n<div class='norender'><code>\ncreateImg(\n  'https://p5js.org/assets/img/asterisk-01.png',\n  'the p5 magenta asterisk'\n);\n</code></div>"
                  ],
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM',
                  overloads: [
                    {
                      line: 386,
                      params: [
                        {
                          name: 'src',
                          description: '<p>src path or url for image</p>\n',
                          type: 'String'
                        },
                        {
                          name: 'alt',
                          description:
                            '<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Img#Attributes">alternate text</a> to be used if image does not load. You can use also an empty string (<code>&quot;&quot;</code>) if that an image is not intended to be viewed.</p>\n',
                          type: 'String'
                        }
                      ],
                      return: {
                        description:
                          'pointer to <a href="#/p5.Element">p5.Element</a> holding created node',
                        type: 'p5.Element'
                      }
                    },
                    {
                      line: 402,
                      params: [
                        {
                          name: 'src',
                          description: '',
                          type: 'String'
                        },
                        {
                          name: 'alt',
                          description: '',
                          type: 'String'
                        },
                        {
                          name: 'crossOrigin',
                          description:
                            '<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes">crossOrigin property</a> of the <code>img</code> element; use either &#39;anonymous&#39; or &#39;use-credentials&#39; to retrieve the image with cross-origin access (for later use with <code>canvas</code>. if an empty string(<code>&quot;&quot;</code>) is passed, CORS is not used</p>\n',
                          type: 'String'
                        },
                        {
                          name: 'successCallback',
                          description:
                            '<p>callback to be called once image data is loaded</p>\n',
                          type: 'Function',
                          optional: true
                        }
                      ],
                      return: {
                        description:
                          'pointer to <a href="#/p5.Element">p5.Element</a> holding created node',
                        type: 'p5.Element'
                      }
                    }
                  ]
                },
                {
                  file: 'src/dom/dom.js',
                  line: 429,
                  description:
                    '<p>Creates an &lt;a&gt;&lt;/a&gt; element in the DOM for including a hyperlink.</p>\n',
                  itemtype: 'method',
                  name: 'createA',
                  params: [
                    {
                      name: 'href',
                      description: '<p>url of page to link to</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'html',
                      description: '<p>inner html of link element to display</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'target',
                      description:
                        '<p>target where new link should open,\n                            could be _blank, _self, _parent, _top.</p>\n',
                      type: 'String',
                      optional: true
                    }
                  ],
                  return: {
                    description:
                      'pointer to <a href="#/p5.Element">p5.Element</a> holding created node',
                    type: 'p5.Element'
                  },
                  example: [
                    "\n<div class='norender'><code>\ncreateA('http://p5js.org/', 'this is a link');\n</code></div>"
                  ],
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 452,
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 454,
                  description:
                    '<p>Creates a slider &lt;input&gt;&lt;/input&gt; element in the DOM.\nUse .size() to set the display length of the slider.</p>\n',
                  itemtype: 'method',
                  name: 'createSlider',
                  params: [
                    {
                      name: 'min',
                      description: '<p>minimum value of the slider</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'max',
                      description: '<p>maximum value of the slider</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'value',
                      description: '<p>default value of the slider</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'step',
                      description:
                        '<p>step size for each tick of the slider (if step is set to 0, the slider will move continuously from the minimum to the maximum value)</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  return: {
                    description:
                      'pointer to <a href="#/p5.Element">p5.Element</a> holding created node',
                    type: 'p5.Element'
                  },
                  example: [
                    "\n<div><code>\nlet slider;\nfunction setup() {\n  slider = createSlider(0, 255, 100);\n  slider.position(10, 10);\n  slider.style('width', '80px');\n}\n\nfunction draw() {\n  let val = slider.value();\n  background(val);\n}\n</code></div>\n\n<div><code>\nlet slider;\nfunction setup() {\n  colorMode(HSB);\n  slider = createSlider(0, 360, 60, 40);\n  slider.position(10, 10);\n  slider.style('width', '80px');\n}\n\nfunction draw() {\n  let val = slider.value();\n  background(val, 100, 100, 1);\n}\n</code></div>"
                  ],
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 509,
                  description:
                    '<p>Creates a &lt;button&gt;&lt;/button&gt; element in the DOM.\nUse .size() to set the display size of the button.\nUse .mousePressed() to specify behavior on press.</p>\n',
                  itemtype: 'method',
                  name: 'createButton',
                  params: [
                    {
                      name: 'label',
                      description: '<p>label displayed on the button</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'value',
                      description: '<p>value of the button</p>\n',
                      type: 'String',
                      optional: true
                    }
                  ],
                  return: {
                    description:
                      'pointer to <a href="#/p5.Element">p5.Element</a> holding created node',
                    type: 'p5.Element'
                  },
                  example: [
                    "\n<div class='norender'><code>\nlet button;\nfunction setup() {\n  createCanvas(100, 100);\n  background(0);\n  button = createButton('click me');\n  button.position(19, 19);\n  button.mousePressed(changeBG);\n}\n\nfunction changeBG() {\n  let val = random(255);\n  background(val);\n}\n</code></div>"
                  ],
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 543,
                  description:
                    '<p>Creates a checkbox &lt;input&gt;&lt;/input&gt; element in the DOM.\nCalling .checked() on a checkbox returns if it is checked or not</p>\n',
                  itemtype: 'method',
                  name: 'createCheckbox',
                  params: [
                    {
                      name: 'label',
                      description: '<p>label displayed after checkbox</p>\n',
                      type: 'String',
                      optional: true
                    },
                    {
                      name: 'value',
                      description:
                        '<p>value of the checkbox; checked is true, unchecked is false</p>\n',
                      type: 'Boolean',
                      optional: true
                    }
                  ],
                  return: {
                    description:
                      'pointer to <a href="#/p5.Element">p5.Element</a> holding created node',
                    type: 'p5.Element'
                  },
                  example: [
                    "\n<div class='norender'><code>\nlet checkbox;\n\nfunction setup() {\n  checkbox = createCheckbox('label', false);\n  checkbox.changed(myCheckedEvent);\n}\n\nfunction myCheckedEvent() {\n  if (this.checked()) {\n    console.log('Checking!');\n  } else {\n    console.log('Unchecking!');\n  }\n}\n</code></div>"
                  ],
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 611,
                  description:
                    '<p>Creates a dropdown menu &lt;select&gt;&lt;/select&gt; element in the DOM.\nIt also helps to assign select-box methods to <a href="#/p5.Element">p5.Element</a> when selecting existing select box</p>\n',
                  itemtype: 'method',
                  name: 'createSelect',
                  return: {
                    description: '',
                    type: 'p5.Element'
                  },
                  example: [
                    "\n<div><code>\nlet sel;\n\nfunction setup() {\n  textAlign(CENTER);\n  background(200);\n  sel = createSelect();\n  sel.position(10, 10);\n  sel.option('pear');\n  sel.option('kiwi');\n  sel.option('grape');\n  sel.changed(mySelectEvent);\n}\n\nfunction mySelectEvent() {\n  let item = sel.value();\n  background(200);\n  text('It is a ' + item + '!', 50, 50);\n}\n</code></div>"
                  ],
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM',
                  overloads: [
                    {
                      line: 611,
                      params: [
                        {
                          name: 'multiple',
                          description:
                            '<p>true if dropdown should support multiple selections</p>\n',
                          type: 'Boolean',
                          optional: true
                        }
                      ],
                      return: {
                        description: '',
                        type: 'p5.Element'
                      }
                    },
                    {
                      line: 639,
                      params: [
                        {
                          name: 'existing',
                          description: '<p>DOM select element</p>\n',
                          type: 'Object'
                        }
                      ],
                      return: {
                        description: '',
                        type: 'p5.Element'
                      }
                    }
                  ]
                },
                {
                  file: 'src/dom/dom.js',
                  line: 716,
                  description:
                    '<p>Creates a radio button &lt;input&gt;&lt;/input&gt; element in the DOM.\nThe .option() method can be used to set options for the radio after it is\ncreated. The .value() method will return the currently selected option.</p>\n',
                  itemtype: 'method',
                  name: 'createRadio',
                  params: [
                    {
                      name: 'divId',
                      description:
                        '<p>the id and name of the created div and input field respectively</p>\n',
                      type: 'String',
                      optional: true
                    }
                  ],
                  return: {
                    description:
                      'pointer to <a href="#/p5.Element">p5.Element</a> holding created node',
                    type: 'p5.Element'
                  },
                  example: [
                    "\n<div><code>\nlet radio;\n\nfunction setup() {\n  radio = createRadio();\n  radio.option('black');\n  radio.option('white');\n  radio.option('gray');\n  radio.style('width', '60px');\n  textAlign(CENTER);\n  fill(255, 0, 0);\n}\n\nfunction draw() {\n  let val = radio.value();\n  background(val);\n  text(val, width / 2, height / 2);\n}\n</code></div>\n<div><code>\nlet radio;\n\nfunction setup() {\n  radio = createRadio();\n  radio.option('apple', 1);\n  radio.option('bread', 2);\n  radio.option('juice', 3);\n  radio.style('width', '60px');\n  textAlign(CENTER);\n}\n\nfunction draw() {\n  background(200);\n  let val = radio.value();\n  if (val) {\n    text('item cost is $' + val, width / 2, height / 2);\n  }\n}\n</code></div>"
                  ],
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 854,
                  description:
                    '<p>Creates a colorPicker element in the DOM for color input.\nThe .value() method will return a hex string (#rrggbb) of the color.\nThe .color() method will return a p5.Color object with the current chosen color.</p>\n',
                  itemtype: 'method',
                  name: 'createColorPicker',
                  params: [
                    {
                      name: 'value',
                      description: '<p>default color of element</p>\n',
                      type: 'String|p5.Color',
                      optional: true
                    }
                  ],
                  return: {
                    description:
                      'pointer to <a href="#/p5.Element">p5.Element</a> holding created node',
                    type: 'p5.Element'
                  },
                  example: [
                    "\n<div>\n<code>\nlet inp1, inp2;\nfunction setup() {\n  createCanvas(100, 100);\n  background('grey');\n  inp1 = createColorPicker('#ff0000');\n  inp2 = createColorPicker(color('yellow'));\n  inp1.input(setShade1);\n  inp2.input(setShade2);\n  setMidShade();\n}\n\nfunction setMidShade() {\n  // Finding a shade between the two\n  let commonShade = lerpColor(inp1.color(), inp2.color(), 0.5);\n  fill(commonShade);\n  rect(20, 20, 60, 60);\n}\n\nfunction setShade1() {\n  setMidShade();\n  console.log('You are choosing shade 1 to be : ', this.value());\n}\nfunction setShade2() {\n  setMidShade();\n  console.log('You are choosing shade 2 to be : ', this.value());\n}\n</code>\n</div>"
                  ],
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 928,
                  description:
                    '<p>Creates an &lt;input&gt;&lt;/input&gt; element in the DOM for text input.\nUse .<a href="#/p5.Element/size">size()</a> to set the display length of the box.</p>\n',
                  itemtype: 'method',
                  name: 'createInput',
                  params: [
                    {
                      name: 'value',
                      description: '<p>default value of the input box</p>\n',
                      type: 'String',
                      optional: true
                    },
                    {
                      name: 'type',
                      description:
                        '<p>type of text, ie text, password etc. Defaults to text</p>\n',
                      type: 'String',
                      optional: true
                    }
                  ],
                  return: {
                    description:
                      'pointer to <a href="#/p5.Element">p5.Element</a> holding created node',
                    type: 'p5.Element'
                  },
                  example: [
                    "\n<div class='norender'><code>\nfunction setup() {\n  let inp = createInput('');\n  inp.input(myInputEvent);\n}\n\nfunction myInputEvent() {\n  console.log('you are typing: ', this.value());\n}\n</code></div>"
                  ],
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 956,
                  description:
                    '<p>Creates an &lt;input&gt;&lt;/input&gt; element in the DOM of type &#39;file&#39;.\nThis allows users to select local files for use in a sketch.</p>\n',
                  itemtype: 'method',
                  name: 'createFileInput',
                  params: [
                    {
                      name: 'callback',
                      description: '<p>callback function for when a file loaded</p>\n',
                      type: 'Function',
                      optional: true
                    },
                    {
                      name: 'multiple',
                      description: '<p>optional to allow multiple files selected</p>\n',
                      type: 'String',
                      optional: true
                    }
                  ],
                  return: {
                    description:
                      'pointer to <a href="#/p5.Element">p5.Element</a> holding created DOM element',
                    type: 'p5.Element'
                  },
                  example: [
                    "\n<div><code>\nlet input;\nlet img;\n\nfunction setup() {\n  input = createFileInput(handleFile);\n  input.position(0, 0);\n}\n\nfunction draw() {\n  background(255);\n  if (img) {\n    image(img, 0, 0, width, height);\n  }\n}\n\nfunction handleFile(file) {\n  print(file);\n  if (file.type === 'image') {\n    img = createImg(file.data, '');\n    img.hide();\n  } else {\n    img = null;\n  }\n}\n</code></div>"
                  ],
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 1029,
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 1071,
                  description:
                    '<p>Creates an HTML5 &lt;video&gt; element in the DOM for simple playback\nof audio/video. Shown by default, can be hidden with .<a href="#/p5.Element/hide">hide()</a>\nand drawn into canvas using video(). The first parameter\ncan be either a single string path to a video file, or an array of string\npaths to different formats of the same video. This is useful for ensuring\nthat your video can play across different browsers, as each supports\ndifferent formats. See <a href=\'https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats\'>this\npage</a> for further information about supported formats.</p>\n',
                  itemtype: 'method',
                  name: 'createVideo',
                  params: [
                    {
                      name: 'src',
                      description:
                        '<p>path to a video file, or array of paths for\n                            supporting different browsers</p>\n',
                      type: 'String|String[]'
                    },
                    {
                      name: 'callback',
                      description:
                        '<p>callback function to be called upon\n                            &#39;canplaythrough&#39; event fire, that is, when the\n                            browser can play the media, and estimates that\n                            enough data has been loaded to play the media\n                            up to its end without having to stop for\n                            further buffering of content</p>\n',
                      type: 'Function',
                      optional: true
                    }
                  ],
                  return: {
                    description: 'pointer to video <a href="#/p5.Element">p5.Element</a>',
                    type: 'p5.MediaElement'
                  },
                  example: [
                    "\n<div><code>\nlet vid;\nfunction setup() {\n  noCanvas();\n\n  vid = createVideo(\n    ['assets/small.mp4', 'assets/small.ogv', 'assets/small.webm'],\n    vidLoad\n  );\n\n  vid.size(100, 100);\n}\n\n// This function is called when the video loads\nfunction vidLoad() {\n  vid.loop();\n  vid.volume(0);\n}\n</code></div>"
                  ],
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 1117,
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 1119,
                  description:
                    "<p>Creates a hidden HTML5 &lt;audio&gt; element in the DOM for simple audio\nplayback. The first parameter can be either a single string path to a\naudio file, or an array of string paths to different formats of the same\naudio. This is useful for ensuring that your audio can play across\ndifferent browsers, as each supports different formats.\nSee <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats'>this\npage for further information about supported formats</a>.</p>\n",
                  itemtype: 'method',
                  name: 'createAudio',
                  params: [
                    {
                      name: 'src',
                      description:
                        '<p>path to an audio file, or array of paths\n                            for supporting different browsers</p>\n',
                      type: 'String|String[]',
                      optional: true
                    },
                    {
                      name: 'callback',
                      description:
                        '<p>callback function to be called upon\n                            &#39;canplaythrough&#39; event fire, that is, when the\n                            browser can play the media, and estimates that\n                            enough data has been loaded to play the media\n                            up to its end without having to stop for\n                            further buffering of content</p>\n',
                      type: 'Function',
                      optional: true
                    }
                  ],
                  return: {
                    description: 'pointer to audio <a href="#/p5.Element">p5.Element</a>',
                    type: 'p5.MediaElement'
                  },
                  example: [
                    "\n<div><code>\nlet ele;\nfunction setup() {\n  ele = createAudio('assets/beat.mp3');\n\n  // here we set the element to autoplay\n  // The element will play as soon\n  // as it is able to do so.\n  ele.autoplay(true);\n}\n</code></div>"
                  ],
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 1156,
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 1158,
                  itemtype: 'property',
                  name: 'VIDEO',
                  type: 'String',
                  final: 1,
                  category: ['Constants'],
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 1164,
                  itemtype: 'property',
                  name: 'AUDIO',
                  type: 'String',
                  final: 1,
                  category: ['Constants'],
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 1201,
                  description:
                    "<p>Creates a new HTML5 &lt;video&gt; element that contains the audio/video\nfeed from a webcam. The element is separate from the canvas and is\ndisplayed by default. The element can be hidden using .<a href=\"#/p5.Element/hide\">hide()</a>. The feed\ncan be drawn onto the canvas using <a href=\"#/p5/image\">image()</a>. The loadedmetadata property can\nbe used to detect when the element has fully loaded (see second example).</p>\n<p>More specific properties of the feed can be passing in a Constraints object.\nSee the\n<a href='http://w3c.github.io/mediacapture-main/getusermedia.html#media-track-constraints'> W3C\nspec</a> for possible properties. Note that not all of these are supported\nby all browsers.</p>\n<p>Security note: A new browser security specification requires that getUserMedia,\nwhich is behind <a href=\"#/p5/createCapture\">createCapture()</a>, only works when you're running the code locally,\nor on HTTPS. Learn more <a href='http://stackoverflow.com/questions/34197653/getusermedia-in-chrome-47-without-using-https'>here</a>\nand <a href='https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia'>here</a>.</p>",
                  itemtype: 'method',
                  name: 'createCapture',
                  params: [
                    {
                      name: 'type',
                      description:
                        '<p>type of capture, either VIDEO or\n                                  AUDIO if none specified, default both,\n                                  or a Constraints object</p>\n',
                      type: 'String|Constant|Object'
                    },
                    {
                      name: 'callback',
                      description:
                        '<p>function to be called once\n                                  stream has loaded</p>\n',
                      type: 'Function',
                      optional: true
                    }
                  ],
                  return: {
                    description: 'capture video <a href="#/p5.Element">p5.Element</a>',
                    type: 'p5.Element'
                  },
                  example: [
                    "\n<div class='norender notest'><code>\nlet capture;\n\nfunction setup() {\n  createCanvas(480, 480);\n  capture = createCapture(VIDEO);\n  capture.hide();\n}\n\nfunction draw() {\n  image(capture, 0, 0, width, width * capture.height / capture.width);\n  filter(INVERT);\n}\n</code></div>\n<div class='norender notest'><code>\nfunction setup() {\n  createCanvas(480, 120);\n  let constraints = {\n    video: {\n      mandatory: {\n        minWidth: 1280,\n        minHeight: 720\n      },\n      optional: [{ maxFrameRate: 10 }]\n    },\n    audio: true\n  };\n  createCapture(constraints, function(stream) {\n    console.log(stream);\n  });\n}\n</code></div>\n<code><div class='norender notest'>\nlet capture;\n\nfunction setup() {\n  createCanvas(640, 480);\n  capture = createCapture(VIDEO);\n}\nfunction draw() {\n  background(0);\n  if (capture.loadedmetadata) {\n    let c = capture.get(0, 0, 100, 100);\n    image(c, 0, 0);\n  }\n}\n</code></div>"
                  ],
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 1338,
                  description:
                    '<p>Creates element with given tag in the DOM with given content.</p>\n',
                  itemtype: 'method',
                  name: 'createElement',
                  params: [
                    {
                      name: 'tag',
                      description: '<p>tag for the new element</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'content',
                      description: '<p>html content to be inserted into the element</p>\n',
                      type: 'String',
                      optional: true
                    }
                  ],
                  return: {
                    description:
                      'pointer to <a href="#/p5.Element">p5.Element</a> holding created node',
                    type: 'p5.Element'
                  },
                  example: [
                    "\n<div class='norender'><code>\ncreateElement('h2', 'im an h2 p5.element!');\n</code></div>"
                  ],
                  class: 'p5',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 1362,
                  description: '<p>Adds specified class to the element.</p>\n',
                  itemtype: 'method',
                  name: 'addClass',
                  params: [
                    {
                      name: 'class',
                      description: '<p>name of class to add</p>\n',
                      type: 'String'
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n <div class='norender'><code>\n let div = createDiv('div');\n div.addClass('myClass');\n </code></div>"
                  ],
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 1387,
                  description: '<p>Removes specified class from the element.</p>\n',
                  itemtype: 'method',
                  name: 'removeClass',
                  params: [
                    {
                      name: 'class',
                      description: '<p>name of class to remove</p>\n',
                      type: 'String'
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n <div class='norender'><code>\n // In this example, a class is set when the div is created\n // and removed when mouse is pressed. This could link up\n // with a CSS style rule to toggle style properties.\nlet div;\nfunction setup() {\n   div = createDiv('div');\n   div.addClass('myClass');\n }\nfunction mousePressed() {\n   div.removeClass('myClass');\n }\n </code></div>"
                  ],
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 1418,
                  description: '<p>Checks if specified class already set to element</p>\n',
                  itemtype: 'method',
                  name: 'hasClass',
                  return: {
                    description: 'a boolean value if element has specified class',
                    type: 'Boolean'
                  },
                  params: [
                    {
                      name: 'c',
                      description: '<p>class name of class to check</p>\n',
                      type: 'String'
                    }
                  ],
                  example: [
                    "\n <div class='norender'><code>\n let div;\nfunction setup() {\n   div = createDiv('div');\n   div.addClass('show');\n }\nfunction mousePressed() {\n   if (div.hasClass('show')) {\n     div.addClass('show');\n   } else {\n     div.removeClass('show');\n   }\n }\n </code></div>"
                  ],
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 1447,
                  description: '<p>Toggles element class</p>\n',
                  itemtype: 'method',
                  name: 'toggleClass',
                  params: [
                    {
                      name: 'c',
                      description: '<p>class name to toggle</p>\n',
                      type: 'String'
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n <div class='norender'><code>\n let div;\nfunction setup() {\n   div = createDiv('div');\n   div.addClass('show');\n }\nfunction mousePressed() {\n   div.toggleClass('show');\n }\n </code></div>"
                  ],
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 1480,
                  description:
                    '<p>Attaches the element  as a child to the parent specified.\n Accepts either a string ID, DOM node, or <a href="#/p5.Element">p5.Element</a>.\n If no argument is specified, an array of children DOM nodes is returned.</p>\n',
                  itemtype: 'method',
                  name: 'child',
                  return: {
                    description: 'an array of child nodes',
                    type: 'Node[]'
                  },
                  example: [
                    "\n <div class='norender'><code>\n let div0 = createDiv('this is the parent');\n let div1 = createDiv('this is the child');\n div0.child(div1); // use p5.Element\n </code></div>\n <div class='norender'><code>\n let div0 = createDiv('this is the parent');\n let div1 = createDiv('this is the child');\n div1.id('apples');\n div0.child('apples'); // use id\n </code></div>\n <div class='norender notest'><code>\n // this example assumes there is a div already on the page\n // with id \"myChildDiv\"\n let div0 = createDiv('this is the parent');\n let elt = document.getElementById('myChildDiv');\n div0.child(elt); // use element from page\n </code></div>"
                  ],
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM',
                  overloads: [
                    {
                      line: 1480,
                      params: [],
                      return: {
                        description: 'an array of child nodes',
                        type: 'Node[]'
                      }
                    },
                    {
                      line: 1508,
                      params: [
                        {
                          name: 'child',
                          description:
                            '<p>the ID, DOM node, or <a href="#/p5.Element">p5.Element</a>\n                        to add to the current element</p>\n',
                          type: 'String|p5.Element',
                          optional: true
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/dom/dom.js',
                  line: 1530,
                  description:
                    '<p>Centers a p5 Element either vertically, horizontally,\nor both, relative to its parent or according to\nthe body if the Element has no parent. If no argument is passed\nthe Element is aligned both vertically and horizontally.</p>\n',
                  itemtype: 'method',
                  name: 'center',
                  params: [
                    {
                      name: 'align',
                      description:
                        '<p>passing &#39;vertical&#39;, &#39;horizontal&#39; aligns element accordingly</p>\n',
                      type: 'String',
                      optional: true
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n<div><code>\nfunction setup() {\n  let div = createDiv('').size(10, 10);\n  div.style('background-color', 'orange');\n  div.center();\n}\n</code></div>"
                  ],
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 1584,
                  description:
                    '<p>If an argument is given, sets the inner HTML of the element,\n replacing any existing html. If true is included as a second\n argument, html is appended instead of replacing existing html.\n If no arguments are given, returns\n the inner HTML of the element.</p>\n',
                  itemtype: 'method',
                  name: 'html',
                  return: {
                    description: 'the inner HTML of the element',
                    type: 'String'
                  },
                  example: [
                    "\n <div class='norender'><code>\n let div = createDiv('').size(100, 100);\n div.html('hi');\n </code></div>\n <div class='norender'><code>\n let div = createDiv('Hello ').size(100, 100);\n div.html('World', true);\n </code></div>"
                  ],
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM',
                  overloads: [
                    {
                      line: 1584,
                      params: [],
                      return: {
                        description: 'the inner HTML of the element',
                        type: 'String'
                      }
                    },
                    {
                      line: 1605,
                      params: [
                        {
                          name: 'html',
                          description: '<p>the HTML to be placed inside the element</p>\n',
                          type: 'String',
                          optional: true
                        },
                        {
                          name: 'append',
                          description: '<p>whether to append HTML to existing</p>\n',
                          type: 'Boolean',
                          optional: true
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/dom/dom.js',
                  line: 1623,
                  description:
                    '<p>Sets the position of the element relative to (0, 0) of the\n window. Essentially, sets position:absolute and left and top\n properties of style. If no arguments given returns the x and y position\n of the element in an object.</p>\n',
                  itemtype: 'method',
                  name: 'position',
                  return: {
                    description: 'the x and y position of the element in an object',
                    type: 'Object'
                  },
                  example: [
                    "\n <div><code class='norender'>\n function setup() {\n   let cnv = createCanvas(100, 100);\n   // positions canvas 50px to the right and 100px\n   // below upper left corner of the window\n   cnv.position(50, 100);\n }\n </code></div>"
                  ],
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM',
                  overloads: [
                    {
                      line: 1623,
                      params: [],
                      return: {
                        description: 'the x and y position of the element in an object',
                        type: 'Object'
                      }
                    },
                    {
                      line: 1642,
                      params: [
                        {
                          name: 'x',
                          description: '<p>x-position relative to upper left of window</p>\n',
                          type: 'Number',
                          optional: true
                        },
                        {
                          name: 'y',
                          description: '<p>y-position relative to upper left of window</p>\n',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/dom/dom.js',
                  line: 1717,
                  description:
                    '<p>Sets the given style (css) property (1st arg) of the element with the\ngiven value (2nd arg). If a single argument is given, .style()\nreturns the value of the given property; however, if the single argument\nis given in css syntax (&#39;text-align:center&#39;), .style() sets the css\nappropriately.</p>\n',
                  itemtype: 'method',
                  name: 'style',
                  return: {
                    description: 'value of property',
                    type: 'String'
                  },
                  example: [
                    "\n<div><code class='norender'>\nlet myDiv = createDiv('I like pandas.');\nmyDiv.style('font-size', '18px');\nmyDiv.style('color', '#ff0000');\n</code></div>\n<div><code class='norender'>\nlet col = color(25, 23, 200, 50);\nlet button = createButton('button');\nbutton.style('background-color', col);\nbutton.position(10, 10);\n</code></div>\n<div><code class='norender'>\nlet myDiv;\nfunction setup() {\n  background(200);\n  myDiv = createDiv('I like gray.');\n  myDiv.position(20, 20);\n}\n\nfunction draw() {\n  myDiv.style('font-size', mouseX + 'px');\n}\n</code></div>"
                  ],
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM',
                  overloads: [
                    {
                      line: 1717,
                      params: [
                        {
                          name: 'property',
                          description: '<p>property to be set</p>\n',
                          type: 'String'
                        }
                      ],
                      return: {
                        description: 'value of property',
                        type: 'String'
                      }
                    },
                    {
                      line: 1752,
                      params: [
                        {
                          name: 'property',
                          description: '',
                          type: 'String'
                        },
                        {
                          name: 'value',
                          description: '<p>value to assign to property</p>\n',
                          type: 'String|Number|p5.Color'
                        }
                      ],
                      chainable: 1,
                      return: {
                        description:
                          'current value of property, if no value is given as second argument',
                        type: 'String'
                      }
                    }
                  ]
                },
                {
                  file: 'src/dom/dom.js',
                  line: 1806,
                  description:
                    '<p>Adds a new attribute or changes the value of an existing attribute\n on the specified element. If no value is specified, returns the\n value of the given attribute, or null if attribute is not set.</p>\n',
                  itemtype: 'method',
                  name: 'attribute',
                  return: {
                    description: 'value of attribute',
                    type: 'String'
                  },
                  example: [
                    "\n <div class='norender'><code>\n let myDiv = createDiv('I like pandas.');\n myDiv.attribute('align', 'center');\n </code></div>"
                  ],
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM',
                  overloads: [
                    {
                      line: 1806,
                      params: [],
                      return: {
                        description: 'value of attribute',
                        type: 'String'
                      }
                    },
                    {
                      line: 1821,
                      params: [
                        {
                          name: 'attr',
                          description: '<p>attribute to set</p>\n',
                          type: 'String'
                        },
                        {
                          name: 'value',
                          description: '<p>value to assign to attribute</p>\n',
                          type: 'String'
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/dom/dom.js',
                  line: 1850,
                  description: '<p>Removes an attribute on the specified element.</p>\n',
                  itemtype: 'method',
                  name: 'removeAttribute',
                  params: [
                    {
                      name: 'attr',
                      description: '<p>attribute to remove</p>\n',
                      type: 'String'
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n <div><code>\n let button;\n let checkbox;\nfunction setup() {\n   checkbox = createCheckbox('enable', true);\n   checkbox.changed(enableButton);\n   button = createButton('button');\n   button.position(10, 10);\n }\nfunction enableButton() {\n   if (this.checked()) {\n     // Re-enable the button\n     button.removeAttribute('disabled');\n   } else {\n     // Disable the button\n     button.attribute('disabled', '');\n   }\n }\n </code></div>"
                  ],
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 1895,
                  description:
                    '<p>Either returns the value of the element if no arguments\ngiven, or sets the value of the element.</p>\n',
                  itemtype: 'method',
                  name: 'value',
                  return: {
                    description: 'value of the element',
                    type: 'String|Number'
                  },
                  example: [
                    "\n<div class='norender'><code>\n// gets the value\nlet inp;\nfunction setup() {\n  inp = createInput('');\n}\n\nfunction mousePressed() {\n  print(inp.value());\n}\n</code></div>\n<div class='norender'><code>\n// sets the value\nlet inp;\nfunction setup() {\n  inp = createInput('myValue');\n}\n\nfunction mousePressed() {\n  inp.value('myValue');\n}\n</code></div>"
                  ],
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM',
                  overloads: [
                    {
                      line: 1895,
                      params: [],
                      return: {
                        description: 'value of the element',
                        type: 'String|Number'
                      }
                    },
                    {
                      line: 1925,
                      params: [
                        {
                          name: 'value',
                          description: '',
                          type: 'String|Number'
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/dom/dom.js',
                  line: 1941,
                  description:
                    '<p>Shows the current element. Essentially, setting display:block for the style.</p>\n',
                  itemtype: 'method',
                  name: 'show',
                  chainable: 1,
                  example: [
                    "\n <div class='norender'><code>\n let div = createDiv('div');\n div.style('display', 'none');\n div.show(); // turns display to block\n </code></div>"
                  ],
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 1959,
                  description:
                    '<p>Hides the current element. Essentially, setting display:none for the style.</p>\n',
                  itemtype: 'method',
                  name: 'hide',
                  chainable: 1,
                  example: [
                    "\n<div class='norender'><code>\nlet div = createDiv('this is a div');\ndiv.hide();\n</code></div>"
                  ],
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 1975,
                  description:
                    '<p>Sets the width and height of the element. AUTO can be used to\n only adjust one dimension at a time. If no arguments are given, it\n returns the width and height of the element in an object. In case of\n elements which need to be loaded, such as images, it is recommended\n to call the function after the element has finished loading.</p>\n',
                  itemtype: 'method',
                  name: 'size',
                  return: {
                    description: 'the width and height of the element in an object',
                    type: 'Object'
                  },
                  example: [
                    "\n <div class='norender'><code>\n let div = createDiv('this is a div');\n div.size(100, 100);\n let img = createImg(\n   'assets/rockies.jpg',\n   'A tall mountain with a small forest and field in front of it on a sunny day',\n   '',\n   () => {\n     img.size(10, AUTO);\n   }\n );\n </code></div>"
                  ],
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM',
                  overloads: [
                    {
                      line: 1975,
                      params: [],
                      return: {
                        description: 'the width and height of the element in an object',
                        type: 'Object'
                      }
                    },
                    {
                      line: 1999,
                      params: [
                        {
                          name: 'w',
                          description:
                            '<p>width of the element, either AUTO, or a number</p>\n',
                          type: 'Number|Constant'
                        },
                        {
                          name: 'h',
                          description:
                            '<p>height of the element, either AUTO, or a number</p>\n',
                          type: 'Number|Constant',
                          optional: true
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/dom/dom.js',
                  line: 2056,
                  description: '<p>Removes the element and deregisters all listeners.</p>\n',
                  itemtype: 'method',
                  name: 'remove',
                  example: [
                    "\n<div class='norender'><code>\nlet myDiv = createDiv('this is some text');\nmyDiv.remove();\n</code></div>"
                  ],
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 2076,
                  description:
                    '<p>Registers a callback that gets called every time a file that is\ndropped on the element has been loaded.\np5 will load every dropped file into memory and pass it as a p5.File object to the callback.\nMultiple files dropped at the same time will result in multiple calls to the callback.</p>\n<p>You can optionally pass a second callback which will be registered to the raw\n<a href="https://developer.mozilla.org/en-US/docs/Web/Events/drop">drop</a> event.\nThe callback will thus be provided the original\n<a href="https://developer.mozilla.org/en-US/docs/Web/API/DragEvent">DragEvent</a>.\nDropping multiple files at the same time will trigger the second callback once per drop,\nwhereas the first callback will trigger for each loaded file.</p>\n',
                  itemtype: 'method',
                  name: 'drop',
                  params: [
                    {
                      name: 'callback',
                      description:
                        '<p>callback to receive loaded file, called for each file dropped.</p>\n',
                      type: 'Function'
                    },
                    {
                      name: 'fxn',
                      description:
                        '<p>callback triggered once when files are dropped with the drop event.</p>\n',
                      type: 'Function',
                      optional: true
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n<div><code>\nfunction setup() {\n  let c = createCanvas(100, 100);\n  background(200);\n  textAlign(CENTER);\n  text('drop file', width / 2, height / 2);\n  c.drop(gotFile);\n}\n\nfunction gotFile(file) {\n  background(200);\n  text('received file:', width / 2, height / 2);\n  text(file.name, width / 2, height / 2 + 50);\n}\n</code></div>\n\n<div><code>\nlet img;\n\nfunction setup() {\n  let c = createCanvas(100, 100);\n  background(200);\n  textAlign(CENTER);\n  text('drop image', width / 2, height / 2);\n  c.drop(gotFile);\n}\n\nfunction draw() {\n  if (img) {\n    image(img, 0, 0, width, height);\n  }\n}\n\nfunction gotFile(file) {\n  img = createImg(file.data, '').hide();\n}\n</code></div>"
                  ],
                  alt: 'Canvas turns into whatever image is dragged/dropped onto it.',
                  class: 'p5.Element',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 2208,
                  description: '<p>Path to the media element source.</p>\n',
                  itemtype: 'property',
                  name: 'src',
                  return: {
                    description: 'src',
                    type: 'String'
                  },
                  example: [
                    "\n<div><code>\nlet ele;\n\nfunction setup() {\n  background(250);\n\n  //p5.MediaElement objects are usually created\n  //by calling the createAudio(), createVideo(),\n  //and createCapture() functions.\n\n  //In this example we create\n  //a new p5.MediaElement via createAudio().\n  ele = createAudio('assets/beat.mp3');\n\n  //We'll set up our example so that\n  //when you click on the text,\n  //an alert box displays the MediaElement's\n  //src field.\n  textAlign(CENTER);\n  text('Click Me!', width / 2, height / 2);\n}\n\nfunction mouseClicked() {\n  //here we test if the mouse is over the\n  //canvas element when it's clicked\n  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {\n    //Show our p5.MediaElement's src field\n    alert(ele.src);\n  }\n}\n</code></div>"
                  ],
                  class: 'p5.MediaElement',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 2273,
                  description: '<p>Play an HTML5 media element.</p>\n',
                  itemtype: 'method',
                  name: 'play',
                  chainable: 1,
                  example: [
                    "\n<div><code>\nlet ele;\n\nfunction setup() {\n  //p5.MediaElement objects are usually created\n  //by calling the createAudio(), createVideo(),\n  //and createCapture() functions.\n\n  //In this example we create\n  //a new p5.MediaElement via createAudio().\n  ele = createAudio('assets/beat.mp3');\n\n  background(250);\n  textAlign(CENTER);\n  text('Click to Play!', width / 2, height / 2);\n}\n\nfunction mouseClicked() {\n  //here we test if the mouse is over the\n  //canvas element when it's clicked\n  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {\n    //Here we call the play() function on\n    //the p5.MediaElement we created above.\n    //This will start the audio sample.\n    ele.play();\n\n    background(200);\n    text('You clicked Play!', width / 2, height / 2);\n  }\n}\n</code></div>"
                  ],
                  class: 'p5.MediaElement',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 2334,
                  description:
                    '<p>Stops an HTML5 media element (sets current time to zero).</p>\n',
                  itemtype: 'method',
                  name: 'stop',
                  chainable: 1,
                  example: [
                    "\n<div><code>\n//This example both starts\n//and stops a sound sample\n//when the user clicks the canvas\n\n//We will store the p5.MediaElement\n//object in here\nlet ele;\n\n//while our audio is playing,\n//this will be set to true\nlet sampleIsPlaying = false;\n\nfunction setup() {\n  //Here we create a p5.MediaElement object\n  //using the createAudio() function.\n  ele = createAudio('assets/beat.mp3');\n  background(200);\n  textAlign(CENTER);\n  text('Click to play!', width / 2, height / 2);\n}\n\nfunction mouseClicked() {\n  //here we test if the mouse is over the\n  //canvas element when it's clicked\n  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {\n    background(200);\n\n    if (sampleIsPlaying) {\n      //if the sample is currently playing\n      //calling the stop() function on\n      //our p5.MediaElement will stop\n      //it and reset its current\n      //time to 0 (i.e. it will start\n      //at the beginning the next time\n      //you play it)\n      ele.stop();\n\n      sampleIsPlaying = false;\n      text('Click to play!', width / 2, height / 2);\n    } else {\n      //loop our sound element until we\n      //call ele.stop() on it.\n      ele.loop();\n\n      sampleIsPlaying = true;\n      text('Click to stop!', width / 2, height / 2);\n    }\n  }\n}\n</code></div>"
                  ],
                  class: 'p5.MediaElement',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 2398,
                  description: '<p>Pauses an HTML5 media element.</p>\n',
                  itemtype: 'method',
                  name: 'pause',
                  chainable: 1,
                  example: [
                    "\n<div><code>\n//This example both starts\n//and pauses a sound sample\n//when the user clicks the canvas\n\n//We will store the p5.MediaElement\n//object in here\nlet ele;\n\n//while our audio is playing,\n//this will be set to true\nlet sampleIsPlaying = false;\n\nfunction setup() {\n  //Here we create a p5.MediaElement object\n  //using the createAudio() function.\n  ele = createAudio('assets/lucky_dragons.mp3');\n  background(200);\n  textAlign(CENTER);\n  text('Click to play!', width / 2, height / 2);\n}\n\nfunction mouseClicked() {\n  //here we test if the mouse is over the\n  //canvas element when it's clicked\n  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {\n    background(200);\n\n    if (sampleIsPlaying) {\n      //Calling pause() on our\n      //p5.MediaElement will stop it\n      //playing, but when we call the\n      //loop() or play() functions\n      //the sample will start from\n      //where we paused it.\n      ele.pause();\n\n      sampleIsPlaying = false;\n      text('Click to resume!', width / 2, height / 2);\n    } else {\n      //loop our sound element until we\n      //call ele.pause() on it.\n      ele.loop();\n\n      sampleIsPlaying = true;\n      text('Click to pause!', width / 2, height / 2);\n    }\n  }\n}\n</code></div>"
                  ],
                  class: 'p5.MediaElement',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 2460,
                  description:
                    '<p>Set &#39;loop&#39; to true for an HTML5 media element, and starts playing.</p>\n',
                  itemtype: 'method',
                  name: 'loop',
                  chainable: 1,
                  example: [
                    "\n<div><code>\n//Clicking the canvas will loop\n//the audio sample until the user\n//clicks again to stop it\n\n//We will store the p5.MediaElement\n//object in here\nlet ele;\n\n//while our audio is playing,\n//this will be set to true\nlet sampleIsLooping = false;\n\nfunction setup() {\n  //Here we create a p5.MediaElement object\n  //using the createAudio() function.\n  ele = createAudio('assets/lucky_dragons.mp3');\n  background(200);\n  textAlign(CENTER);\n  text('Click to loop!', width / 2, height / 2);\n}\n\nfunction mouseClicked() {\n  //here we test if the mouse is over the\n  //canvas element when it's clicked\n  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {\n    background(200);\n\n    if (!sampleIsLooping) {\n      //loop our sound element until we\n      //call ele.stop() on it.\n      ele.loop();\n\n      sampleIsLooping = true;\n      text('Click to stop!', width / 2, height / 2);\n    } else {\n      ele.stop();\n\n      sampleIsLooping = false;\n      text('Click to loop!', width / 2, height / 2);\n    }\n  }\n}\n</code></div>"
                  ],
                  class: 'p5.MediaElement',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 2516,
                  description:
                    '<p>Set &#39;loop&#39; to false for an HTML5 media element. Element will stop\nwhen it reaches the end.</p>\n',
                  itemtype: 'method',
                  name: 'noLoop',
                  chainable: 1,
                  example: [
                    "\n<div><code>\n//This example both starts\n//and stops loop of sound sample\n//when the user clicks the canvas\n\n//We will store the p5.MediaElement\n//object in here\nlet ele;\n//while our audio is playing,\n//this will be set to true\nlet sampleIsPlaying = false;\n\nfunction setup() {\n  //Here we create a p5.MediaElement object\n  //using the createAudio() function.\n  ele = createAudio('assets/beat.mp3');\n  background(200);\n  textAlign(CENTER);\n  text('Click to play!', width / 2, height / 2);\n}\n\nfunction mouseClicked() {\n  //here we test if the mouse is over the\n  //canvas element when it's clicked\n  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {\n    background(200);\n\n    if (sampleIsPlaying) {\n      ele.noLoop();\n      text('No more Loops!', width / 2, height / 2);\n    } else {\n      ele.loop();\n      sampleIsPlaying = true;\n      text('Click to stop looping!', width / 2, height / 2);\n    }\n  }\n}\n</code></div>\n"
                  ],
                  class: 'p5.MediaElement',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 2568,
                  description: '<p>Set HTML5 media element to autoplay or not.</p>\n',
                  itemtype: 'method',
                  name: 'autoplay',
                  params: [
                    {
                      name: 'autoplay',
                      description: '<p>whether the element should autoplay</p>\n',
                      type: 'Boolean'
                    }
                  ],
                  chainable: 1,
                  class: 'p5.MediaElement',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 2580,
                  description:
                    '<p>Sets volume for this HTML5 media element. If no argument is given,\nreturns the current volume.</p>\n',
                  itemtype: 'method',
                  name: 'volume',
                  return: {
                    description: 'current volume',
                    type: 'Number'
                  },
                  example: [
                    "\n<div><code>\nlet ele;\nfunction setup() {\n  // p5.MediaElement objects are usually created\n  // by calling the createAudio(), createVideo(),\n  // and createCapture() functions.\n  // In this example we create\n  // a new p5.MediaElement via createAudio().\n  ele = createAudio('assets/lucky_dragons.mp3');\n  background(250);\n  textAlign(CENTER);\n  text('Click to Play!', width / 2, height / 2);\n}\nfunction mouseClicked() {\n  // Here we call the volume() function\n  // on the sound element to set its volume\n  // Volume must be between 0.0 and 1.0\n  ele.volume(0.2);\n  ele.play();\n  background(200);\n  text('You clicked Play!', width / 2, height / 2);\n}\n</code></div>\n<div><code>\nlet audio;\nlet counter = 0;\n\nfunction loaded() {\n  audio.play();\n}\n\nfunction setup() {\n  audio = createAudio('assets/lucky_dragons.mp3', loaded);\n  textAlign(CENTER);\n}\n\nfunction draw() {\n  if (counter === 0) {\n    background(0, 255, 0);\n    text('volume(0.9)', width / 2, height / 2);\n  } else if (counter === 1) {\n    background(255, 255, 0);\n    text('volume(0.5)', width / 2, height / 2);\n  } else if (counter === 2) {\n    background(255, 0, 0);\n    text('volume(0.1)', width / 2, height / 2);\n  }\n}\n\nfunction mousePressed() {\n  counter++;\n  if (counter === 0) {\n    audio.volume(0.9);\n  } else if (counter === 1) {\n    audio.volume(0.5);\n  } else if (counter === 2) {\n    audio.volume(0.1);\n  } else {\n    counter = 0;\n    audio.volume(0.9);\n  }\n}\n</code>\n</div>"
                  ],
                  class: 'p5.MediaElement',
                  module: 'DOM',
                  submodule: 'DOM',
                  overloads: [
                    {
                      line: 2580,
                      params: [],
                      return: {
                        description: 'current volume',
                        type: 'Number'
                      }
                    },
                    {
                      line: 2653,
                      params: [
                        {
                          name: 'val',
                          description: '<p>volume between 0.0 and 1.0</p>\n',
                          type: 'Number'
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/dom/dom.js',
                  line: 2666,
                  description:
                    '<p>If no arguments are given, returns the current playback speed of the\nelement. The speed parameter sets the speed where 2.0 will play the\nelement twice as fast, 0.5 will play at half the speed, and -1 will play\nthe element in normal speed in reverse.(Note that not all browsers support\nbackward playback and even if they do, playback might not be smooth.)</p>\n',
                  itemtype: 'method',
                  name: 'speed',
                  return: {
                    description: 'current playback speed of the element',
                    type: 'Number'
                  },
                  example: [
                    "\n<div class='norender notest'><code>\n//Clicking the canvas will loop\n//the audio sample until the user\n//clicks again to stop it\n\n//We will store the p5.MediaElement\n//object in here\nlet ele;\nlet button;\n\nfunction setup() {\n  createCanvas(710, 400);\n  //Here we create a p5.MediaElement object\n  //using the createAudio() function.\n  ele = createAudio('assets/beat.mp3');\n  ele.loop();\n  background(200);\n\n  button = createButton('2x speed');\n  button.position(100, 68);\n  button.mousePressed(twice_speed);\n\n  button = createButton('half speed');\n  button.position(200, 68);\n  button.mousePressed(half_speed);\n\n  button = createButton('reverse play');\n  button.position(300, 68);\n  button.mousePressed(reverse_speed);\n\n  button = createButton('STOP');\n  button.position(400, 68);\n  button.mousePressed(stop_song);\n\n  button = createButton('PLAY!');\n  button.position(500, 68);\n  button.mousePressed(play_speed);\n}\n\nfunction twice_speed() {\n  ele.speed(2);\n}\n\nfunction half_speed() {\n  ele.speed(0.5);\n}\n\nfunction reverse_speed() {\n  ele.speed(-1);\n}\n\nfunction stop_song() {\n  ele.stop();\n}\n\nfunction play_speed() {\n  ele.play();\n}\n</code></div>"
                  ],
                  class: 'p5.MediaElement',
                  module: 'DOM',
                  submodule: 'DOM',
                  overloads: [
                    {
                      line: 2666,
                      params: [],
                      return: {
                        description: 'current playback speed of the element',
                        type: 'Number'
                      }
                    },
                    {
                      line: 2737,
                      params: [
                        {
                          name: 'speed',
                          description: '<p>speed multiplier for element playback</p>\n',
                          type: 'Number'
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/dom/dom.js',
                  line: 2754,
                  description:
                    '<p>If no arguments are given, returns the current time of the element.\nIf an argument is given the current time of the element is set to it.</p>\n',
                  itemtype: 'method',
                  name: 'time',
                  return: {
                    description: 'current time (in seconds)',
                    type: 'Number'
                  },
                  example: [
                    "\n<div><code>\nlet ele;\nlet beginning = true;\nfunction setup() {\n  //p5.MediaElement objects are usually created\n  //by calling the createAudio(), createVideo(),\n  //and createCapture() functions.\n\n  //In this example we create\n  //a new p5.MediaElement via createAudio().\n  ele = createAudio('assets/lucky_dragons.mp3');\n  background(250);\n  textAlign(CENTER);\n  text('start at beginning', width / 2, height / 2);\n}\n\n// this function fires with click anywhere\nfunction mousePressed() {\n  if (beginning === true) {\n    // here we start the sound at the beginning\n    // time(0) is not necessary here\n    // as this produces the same result as\n    // play()\n    ele.play().time(0);\n    background(200);\n    text('jump 2 sec in', width / 2, height / 2);\n    beginning = false;\n  } else {\n    // here we jump 2 seconds into the sound\n    ele.play().time(2);\n    background(250);\n    text('start at beginning', width / 2, height / 2);\n    beginning = true;\n  }\n}\n</code></div>"
                  ],
                  class: 'p5.MediaElement',
                  module: 'DOM',
                  submodule: 'DOM',
                  overloads: [
                    {
                      line: 2754,
                      params: [],
                      return: {
                        description: 'current time (in seconds)',
                        type: 'Number'
                      }
                    },
                    {
                      line: 2799,
                      params: [
                        {
                          name: 'time',
                          description: '<p>time to jump to (in seconds)</p>\n',
                          type: 'Number'
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/dom/dom.js',
                  line: 2813,
                  description: '<p>Returns the duration of the HTML5 media element.</p>\n',
                  itemtype: 'method',
                  name: 'duration',
                  return: {
                    description: 'duration',
                    type: 'Number'
                  },
                  example: [
                    "\n<div><code>\nlet ele;\nfunction setup() {\n  //p5.MediaElement objects are usually created\n  //by calling the createAudio(), createVideo(),\n  //and createCapture() functions.\n  //In this example we create\n  //a new p5.MediaElement via createAudio().\n  ele = createAudio('assets/doorbell.mp3');\n  background(250);\n  textAlign(CENTER);\n  text('Click to know the duration!', 10, 25, 70, 80);\n}\nfunction mouseClicked() {\n  ele.play();\n  background(200);\n  //ele.duration dislpays the duration\n  text(ele.duration() + ' seconds', width / 2, height / 2);\n}\n</code></div>"
                  ],
                  class: 'p5.MediaElement',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 2935,
                  description:
                    '<p>Schedule an event to be called when the audio or video\nelement reaches the end. If the element is looping,\nthis will not be called. The element is passed in\nas the argument to the onended callback.</p>\n',
                  itemtype: 'method',
                  name: 'onended',
                  params: [
                    {
                      name: 'callback',
                      description:
                        '<p>function to call when the\n                            soundfile has ended. The\n                            media element will be passed\n                            in as the argument to the\n                            callback.</p>\n',
                      type: 'Function'
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n<div><code>\nfunction setup() {\n  let audioEl = createAudio('assets/beat.mp3');\n  audioEl.showControls();\n  audioEl.onended(sayDone);\n}\n\nfunction sayDone(elt) {\n  alert('done playing ' + elt.src);\n}\n</code></div>"
                  ],
                  class: 'p5.MediaElement',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 2966,
                  class: 'p5.MediaElement',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 2968,
                  description:
                    '<p>Send the audio output of this element to a specified audioNode or\np5.sound object. If no element is provided, connects to p5&#39;s master\noutput. That connection is established when this method is first called.\nAll connections are removed by the .disconnect() method.</p>\n<p>This method is meant to be used with the p5.sound.js addon library.</p>\n',
                  itemtype: 'method',
                  name: 'connect',
                  params: [
                    {
                      name: 'audioNode',
                      description:
                        '<p>AudioNode from the Web Audio API,\nor an object from the p5.sound library</p>\n',
                      type: 'AudioNode|Object'
                    }
                  ],
                  class: 'p5.MediaElement',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 3017,
                  description:
                    '<p>Disconnect all Web Audio routing, including to master output.\nThis is useful if you want to re-route the output through\naudio effects, for example.</p>\n',
                  itemtype: 'method',
                  name: 'disconnect',
                  class: 'p5.MediaElement',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 3032,
                  class: 'p5.MediaElement',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 3034,
                  description:
                    '<p>Show the default MediaElement controls, as determined by the web browser.</p>\n',
                  itemtype: 'method',
                  name: 'showControls',
                  example: [
                    "\n<div><code>\nlet ele;\nfunction setup() {\n  //p5.MediaElement objects are usually created\n  //by calling the createAudio(), createVideo(),\n  //and createCapture() functions.\n  //In this example we create\n  //a new p5.MediaElement via createAudio()\n  ele = createAudio('assets/lucky_dragons.mp3');\n  background(200);\n  textAlign(CENTER);\n  text('Click to Show Controls!', 10, 25, 70, 80);\n}\nfunction mousePressed() {\n  ele.showControls();\n  background(200);\n  text('Controls Shown', width / 2, height / 2);\n}\n</code></div>"
                  ],
                  class: 'p5.MediaElement',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 3065,
                  description: '<p>Hide the default mediaElement controls.</p>\n',
                  itemtype: 'method',
                  name: 'hideControls',
                  example: [
                    "\n<div><code>\nlet ele;\nfunction setup() {\n  //p5.MediaElement objects are usually created\n  //by calling the createAudio(), createVideo(),\n  //and createCapture() functions.\n  //In this example we create\n  //a new p5.MediaElement via createAudio()\n  ele = createAudio('assets/lucky_dragons.mp3');\n  ele.showControls();\n  background(200);\n  textAlign(CENTER);\n  text('Click to hide Controls!', 10, 25, 70, 80);\n}\nfunction mousePressed() {\n  ele.hideControls();\n  background(200);\n  text('Controls hidden', width / 2, height / 2);\n}\n</code></div>"
                  ],
                  class: 'p5.MediaElement',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 3094,
                  class: 'p5.MediaElement',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 3105,
                  description:
                    '<p>Schedule events to trigger every time a MediaElement\n(audio/video) reaches a playback cue point.</p>\n<p>Accepts a callback function, a time (in seconds) at which to trigger\nthe callback, and an optional parameter for the callback.</p>\n<p>Time will be passed as the first parameter to the callback function,\nand param will be the second parameter.</p>\n',
                  itemtype: 'method',
                  name: 'addCue',
                  params: [
                    {
                      name: 'time',
                      description:
                        '<p>Time in seconds, relative to this media\n                            element&#39;s playback. For example, to trigger\n                            an event every time playback reaches two\n                            seconds, pass in the number 2. This will be\n                            passed as the first parameter to\n                            the callback function.</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'callback',
                      description:
                        '<p>Name of a function that will be\n                            called at the given time. The callback will\n                            receive time and (optionally) param as its\n                            two parameters.</p>\n',
                      type: 'Function'
                    },
                    {
                      name: 'value',
                      description:
                        '<p>An object to be passed as the\n                            second parameter to the\n                            callback function.</p>\n',
                      type: 'Object',
                      optional: true
                    }
                  ],
                  return: {
                    description:
                      'id ID of this cue,\n                    useful for removeCue(id)',
                    type: 'Number'
                  },
                  example: [
                    "\n<div><code>\n//\n//\nfunction setup() {\n  noCanvas();\n\n  let audioEl = createAudio('assets/beat.mp3');\n  audioEl.showControls();\n\n  // schedule three calls to changeBackground\n  audioEl.addCue(0.5, changeBackground, color(255, 0, 0));\n  audioEl.addCue(1.0, changeBackground, color(0, 255, 0));\n  audioEl.addCue(2.5, changeBackground, color(0, 0, 255));\n  audioEl.addCue(3.0, changeBackground, color(0, 255, 255));\n  audioEl.addCue(4.2, changeBackground, color(255, 255, 0));\n  audioEl.addCue(5.0, changeBackground, color(255, 255, 0));\n}\n\nfunction changeBackground(val) {\n  background(val);\n}\n</code></div>"
                  ],
                  class: 'p5.MediaElement',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 3169,
                  description:
                    '<p>Remove a callback based on its ID. The ID is returned by the\naddCue method.</p>\n',
                  itemtype: 'method',
                  name: 'removeCue',
                  params: [
                    {
                      name: 'id',
                      description: '<p>ID of the cue, as returned by addCue</p>\n',
                      type: 'Number'
                    }
                  ],
                  example: [
                    "\n<div><code>\nlet audioEl, id1, id2;\nfunction setup() {\n  background(255, 255, 255);\n  audioEl = createAudio('assets/beat.mp3');\n  audioEl.showControls();\n  // schedule five calls to changeBackground\n  id1 = audioEl.addCue(0.5, changeBackground, color(255, 0, 0));\n  audioEl.addCue(1.0, changeBackground, color(0, 255, 0));\n  audioEl.addCue(2.5, changeBackground, color(0, 0, 255));\n  audioEl.addCue(3.0, changeBackground, color(0, 255, 255));\n  id2 = audioEl.addCue(4.2, changeBackground, color(255, 255, 0));\n  text('Click to remove first and last Cue!', 10, 25, 70, 80);\n}\nfunction mousePressed() {\n  audioEl.removeCue(id1);\n  audioEl.removeCue(id2);\n}\nfunction changeBackground(val) {\n  background(val);\n}\n</code></div>"
                  ],
                  class: 'p5.MediaElement',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 3211,
                  description:
                    '<p>Remove all of the callbacks that had originally been scheduled\nvia the addCue method.</p>\n',
                  itemtype: 'method',
                  name: 'clearCues',
                  params: [
                    {
                      name: 'id',
                      description: '<p>ID of the cue, as returned by addCue</p>\n',
                      type: 'Number'
                    }
                  ],
                  example: [
                    "\n<div><code>\nlet audioEl;\nfunction setup() {\n  background(255, 255, 255);\n  audioEl = createAudio('assets/beat.mp3');\n  //Show the default MediaElement controls, as determined by the web browser\n  audioEl.showControls();\n  // schedule calls to changeBackground\n  background(200);\n  text('Click to change Cue!', 10, 25, 70, 80);\n  audioEl.addCue(0.5, changeBackground, color(255, 0, 0));\n  audioEl.addCue(1.0, changeBackground, color(0, 255, 0));\n  audioEl.addCue(2.5, changeBackground, color(0, 0, 255));\n  audioEl.addCue(3.0, changeBackground, color(0, 255, 255));\n  audioEl.addCue(4.2, changeBackground, color(255, 255, 0));\n}\nfunction mousePressed() {\n  // here we clear the scheduled callbacks\n  audioEl.clearCues();\n  // then we add some more callbacks\n  audioEl.addCue(1, changeBackground, color(2, 2, 2));\n  audioEl.addCue(3, changeBackground, color(255, 255, 0));\n}\nfunction changeBackground(val) {\n  background(val);\n}\n</code></div>"
                  ],
                  class: 'p5.MediaElement',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 3277,
                  description:
                    '<p>Underlying File object. All normal File methods can be called on this.</p>\n',
                  itemtype: 'property',
                  name: 'file',
                  class: 'p5.File',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 3289,
                  description: '<p>File type (image, text, etc.)</p>\n',
                  itemtype: 'property',
                  name: 'type',
                  class: 'p5.File',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 3295,
                  description:
                    '<p>File subtype (usually the file extension jpg, png, xml, etc.)</p>\n',
                  itemtype: 'property',
                  name: 'subtype',
                  class: 'p5.File',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 3301,
                  description: '<p>File name</p>\n',
                  itemtype: 'property',
                  name: 'name',
                  class: 'p5.File',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 3307,
                  description: '<p>File size</p>\n',
                  itemtype: 'property',
                  name: 'size',
                  class: 'p5.File',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/dom/dom.js',
                  line: 3314,
                  description: '<p>URL string containing image data.</p>\n',
                  itemtype: 'property',
                  name: 'data',
                  class: 'p5.File',
                  module: 'DOM',
                  submodule: 'DOM'
                },
                {
                  file: 'src/events/acceleration.js',
                  line: 10,
                  description:
                    '<p>The system variable deviceOrientation always contains the orientation of\nthe device. The value of this variable will either be set &#39;landscape&#39;\nor &#39;portrait&#39;. If no data is available it will be set to &#39;undefined&#39;.\neither LANDSCAPE or PORTRAIT.</p>\n',
                  itemtype: 'property',
                  name: 'deviceOrientation',
                  type: 'Constant',
                  readonly: '',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Acceleration'
                },
                {
                  file: 'src/events/acceleration.js',
                  line: 21,
                  description:
                    '<p>The system variable accelerationX always contains the acceleration of the\ndevice along the x axis. Value is represented as meters per second squared.</p>\n',
                  itemtype: 'property',
                  name: 'accelerationX',
                  type: 'Number',
                  readonly: '',
                  example: [
                    "\n<div>\n<code>\n// Move a touchscreen device to register\n// acceleration changes.\nfunction draw() {\n  background(220, 50);\n  fill('magenta');\n  ellipse(width / 2, height / 2, accelerationX);\n}\n</code>\n</div>"
                  ],
                  alt: 'Magnitude of device acceleration is displayed as ellipse size',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Acceleration'
                },
                {
                  file: 'src/events/acceleration.js',
                  line: 44,
                  description:
                    '<p>The system variable accelerationY always contains the acceleration of the\ndevice along the y axis. Value is represented as meters per second squared.</p>\n',
                  itemtype: 'property',
                  name: 'accelerationY',
                  type: 'Number',
                  readonly: '',
                  example: [
                    "\n<div>\n<code>\n// Move a touchscreen device to register\n// acceleration changes.\nfunction draw() {\n  background(220, 50);\n  fill('magenta');\n  ellipse(width / 2, height / 2, accelerationY);\n}\n</code>\n</div>"
                  ],
                  alt: 'Magnitude of device acceleration is displayed as ellipse size',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Acceleration'
                },
                {
                  file: 'src/events/acceleration.js',
                  line: 67,
                  description:
                    '<p>The system variable accelerationZ always contains the acceleration of the\ndevice along the z axis. Value is represented as meters per second squared.</p>\n',
                  itemtype: 'property',
                  name: 'accelerationZ',
                  type: 'Number',
                  readonly: '',
                  example: [
                    "\n<div>\n<code>\n// Move a touchscreen device to register\n// acceleration changes.\nfunction draw() {\n  background(220, 50);\n  fill('magenta');\n  ellipse(width / 2, height / 2, accelerationZ);\n}\n</code>\n</div>"
                  ],
                  alt: 'Magnitude of device acceleration is displayed as ellipse size',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Acceleration'
                },
                {
                  file: 'src/events/acceleration.js',
                  line: 92,
                  description:
                    '<p>The system variable pAccelerationX always contains the acceleration of the\ndevice along the x axis in the frame previous to the current frame. Value\nis represented as meters per second squared.</p>\n',
                  itemtype: 'property',
                  name: 'pAccelerationX',
                  type: 'Number',
                  readonly: '',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Acceleration'
                },
                {
                  file: 'src/events/acceleration.js',
                  line: 102,
                  description:
                    '<p>The system variable pAccelerationY always contains the acceleration of the\ndevice along the y axis in the frame previous to the current frame. Value\nis represented as meters per second squared.</p>\n',
                  itemtype: 'property',
                  name: 'pAccelerationY',
                  type: 'Number',
                  readonly: '',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Acceleration'
                },
                {
                  file: 'src/events/acceleration.js',
                  line: 112,
                  description:
                    '<p>The system variable pAccelerationZ always contains the acceleration of the\ndevice along the z axis in the frame previous to the current frame. Value\nis represented as meters per second squared.</p>\n',
                  itemtype: 'property',
                  name: 'pAccelerationZ',
                  type: 'Number',
                  readonly: '',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Acceleration'
                },
                {
                  file: 'src/events/acceleration.js',
                  line: 133,
                  description:
                    '<p>The system variable rotationX always contains the rotation of the\ndevice along the x axis. Value is represented as 0 to +/-180 degrees.\n<br><br>\nNote: The order the rotations are called is important, ie. if used\ntogether, it must be called in the order Z-X-Y or there might be\nunexpected behaviour.</p>\n',
                  itemtype: 'property',
                  name: 'rotationX',
                  type: 'Number',
                  readonly: '',
                  example: [
                    '\n<div>\n<code>\nfunction setup() {\n  createCanvas(100, 100, WEBGL);\n}\n\nfunction draw() {\n  background(200);\n  //rotateZ(radians(rotationZ));\n  rotateX(radians(rotationX));\n  //rotateY(radians(rotationY));\n  box(200, 200, 200);\n}\n</code>\n</div>'
                  ],
                  alt:
                    'red horizontal line right, green vertical line bottom. black background.',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Acceleration'
                },
                {
                  file: 'src/events/acceleration.js',
                  line: 164,
                  description:
                    '<p>The system variable rotationY always contains the rotation of the\ndevice along the y axis. Value is represented as 0 to +/-90 degrees.\n<br><br>\nNote: The order the rotations are called is important, ie. if used\ntogether, it must be called in the order Z-X-Y or there might be\nunexpected behaviour.</p>\n',
                  itemtype: 'property',
                  name: 'rotationY',
                  type: 'Number',
                  readonly: '',
                  example: [
                    '\n<div>\n<code>\nfunction setup() {\n  createCanvas(100, 100, WEBGL);\n}\n\nfunction draw() {\n  background(200);\n  //rotateZ(radians(rotationZ));\n  //rotateX(radians(rotationX));\n  rotateY(radians(rotationY));\n  box(200, 200, 200);\n}\n</code>\n</div>'
                  ],
                  alt:
                    'red horizontal line right, green vertical line bottom. black background.',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Acceleration'
                },
                {
                  file: 'src/events/acceleration.js',
                  line: 195,
                  description:
                    '<p>The system variable rotationZ always contains the rotation of the\ndevice along the z axis. Value is represented as 0 to 359 degrees.\n<br><br>\nUnlike rotationX and rotationY, this variable is available for devices\nwith a built-in compass only.\n<br><br>\nNote: The order the rotations are called is important, ie. if used\ntogether, it must be called in the order Z-X-Y or there might be\nunexpected behaviour.</p>\n',
                  example: [
                    '\n<div>\n<code>\nfunction setup() {\n  createCanvas(100, 100, WEBGL);\n}\n\nfunction draw() {\n  background(200);\n  rotateZ(radians(rotationZ));\n  //rotateX(radians(rotationX));\n  //rotateY(radians(rotationY));\n  box(200, 200, 200);\n}\n</code>\n</div>'
                  ],
                  itemtype: 'property',
                  name: 'rotationZ',
                  type: 'Number',
                  readonly: '',
                  alt:
                    'red horizontal line right, green vertical line bottom. black background.',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Acceleration'
                },
                {
                  file: 'src/events/acceleration.js',
                  line: 231,
                  description:
                    '<p>The system variable pRotationX always contains the rotation of the\ndevice along the x axis in the frame previous to the current frame. Value\nis represented as 0 to +/-180 degrees.\n<br><br>\npRotationX can also be used with rotationX to determine the rotate\ndirection of the device along the X-axis.</p>\n',
                  example: [
                    "\n<div class='norender'>\n<code>\n// A simple if statement looking at whether\n// rotationX - pRotationX < 0 is true or not will be\n// sufficient for determining the rotate direction\n// in most cases.\n\n// Some extra logic is needed to account for cases where\n// the angles wrap around.\nlet rotateDirection = 'clockwise';\n\n// Simple range conversion to make things simpler.\n// This is not absolutely necessary but the logic\n// will be different in that case.\n\nlet rX = rotationX + 180;\nlet pRX = pRotationX + 180;\n\nif ((rX - pRX > 0 && rX - pRX < 270) || rX - pRX < -270) {\n  rotateDirection = 'clockwise';\n} else if (rX - pRX < 0 || rX - pRX > 270) {\n  rotateDirection = 'counter-clockwise';\n}\n\nprint(rotateDirection);\n</code>\n</div>"
                  ],
                  alt: 'no image to display.',
                  itemtype: 'property',
                  name: 'pRotationX',
                  type: 'Number',
                  readonly: '',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Acceleration'
                },
                {
                  file: 'src/events/acceleration.js',
                  line: 276,
                  description:
                    '<p>The system variable pRotationY always contains the rotation of the\ndevice along the y axis in the frame previous to the current frame. Value\nis represented as 0 to +/-90 degrees.\n<br><br>\npRotationY can also be used with rotationY to determine the rotate\ndirection of the device along the Y-axis.</p>\n',
                  example: [
                    "\n<div class='norender'>\n<code>\n// A simple if statement looking at whether\n// rotationY - pRotationY < 0 is true or not will be\n// sufficient for determining the rotate direction\n// in most cases.\n\n// Some extra logic is needed to account for cases where\n// the angles wrap around.\nlet rotateDirection = 'clockwise';\n\n// Simple range conversion to make things simpler.\n// This is not absolutely necessary but the logic\n// will be different in that case.\n\nlet rY = rotationY + 180;\nlet pRY = pRotationY + 180;\n\nif ((rY - pRY > 0 && rY - pRY < 270) || rY - pRY < -270) {\n  rotateDirection = 'clockwise';\n} else if (rY - pRY < 0 || rY - pRY > 270) {\n  rotateDirection = 'counter-clockwise';\n}\nprint(rotateDirection);\n</code>\n</div>"
                  ],
                  alt: 'no image to display.',
                  itemtype: 'property',
                  name: 'pRotationY',
                  type: 'Number',
                  readonly: '',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Acceleration'
                },
                {
                  file: 'src/events/acceleration.js',
                  line: 320,
                  description:
                    '<p>The system variable pRotationZ always contains the rotation of the\ndevice along the z axis in the frame previous to the current frame. Value\nis represented as 0 to 359 degrees.\n<br><br>\npRotationZ can also be used with rotationZ to determine the rotate\ndirection of the device along the Z-axis.</p>\n',
                  example: [
                    "\n<div class='norender'>\n<code>\n// A simple if statement looking at whether\n// rotationZ - pRotationZ < 0 is true or not will be\n// sufficient for determining the rotate direction\n// in most cases.\n\n// Some extra logic is needed to account for cases where\n// the angles wrap around.\nlet rotateDirection = 'clockwise';\n\nif (\n  (rotationZ - pRotationZ > 0 && rotationZ - pRotationZ < 270) ||\n  rotationZ - pRotationZ < -270\n) {\n  rotateDirection = 'clockwise';\n} else if (rotationZ - pRotationZ < 0 || rotationZ - pRotationZ > 270) {\n  rotateDirection = 'counter-clockwise';\n}\nprint(rotateDirection);\n</code>\n</div>"
                  ],
                  alt: 'no image to display.',
                  itemtype: 'property',
                  name: 'pRotationZ',
                  type: 'Number',
                  readonly: '',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Acceleration'
                },
                {
                  file: 'src/events/acceleration.js',
                  line: 378,
                  description:
                    '<p>When a device is rotated, the axis that triggers the <a href="#/p5/deviceTurned">deviceTurned()</a>\nmethod is stored in the turnAxis variable. The turnAxis variable is only defined within\nthe scope of deviceTurned().</p>\n',
                  itemtype: 'property',
                  name: 'turnAxis',
                  type: 'String',
                  readonly: '',
                  example: [
                    "\n<div>\n<code>\n// Run this example on a mobile device\n// Rotate the device by 90 degrees in the\n// X-axis to change the value.\n\nlet value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction deviceTurned() {\n  if (turnAxis === 'X') {\n    if (value === 0) {\n      value = 255;\n    } else if (value === 255) {\n      value = 0;\n    }\n  }\n}\n</code>\n</div>"
                  ],
                  alt:
                    '50x50 black rect in center of canvas. turns white on mobile when device turns\n50x50 black rect in center of canvas. turns white on mobile when x-axis turns',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Acceleration'
                },
                {
                  file: 'src/events/acceleration.js',
                  line: 417,
                  description:
                    '<p>The <a href="#/p5/setMoveThreshold">setMoveThreshold()</a> function is used to set the movement threshold for\nthe <a href="#/p5/deviceMoved">deviceMoved()</a> function. The default threshold is set to 0.5.</p>\n',
                  itemtype: 'method',
                  name: 'setMoveThreshold',
                  params: [
                    {
                      name: 'value',
                      description: '<p>The threshold value</p>\n',
                      type: 'Number'
                    }
                  ],
                  example: [
                    '\n<div class="norender">\n<code>\n// Run this example on a mobile device\n// You will need to move the device incrementally further\n// the closer the square\'s color gets to white in order to change the value.\n\nlet value = 0;\nlet threshold = 0.5;\nfunction setup() {\n  setMoveThreshold(threshold);\n}\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction deviceMoved() {\n  value = value + 5;\n  threshold = threshold + 0.1;\n  if (value > 255) {\n    value = 0;\n    threshold = 30;\n  }\n  setMoveThreshold(threshold);\n}\n</code>\n</div>'
                  ],
                  alt:
                    '50x50 black rect in center of canvas. turns white on mobile when device moves',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Acceleration'
                },
                {
                  file: 'src/events/acceleration.js',
                  line: 460,
                  description:
                    '<p>The <a href="#/p5/setShakeThreshold">setShakeThreshold()</a> function is used to set the movement threshold for\nthe <a href="#/p5/deviceShaken">deviceShaken()</a> function. The default threshold is set to 30.</p>\n',
                  itemtype: 'method',
                  name: 'setShakeThreshold',
                  params: [
                    {
                      name: 'value',
                      description: '<p>The threshold value</p>\n',
                      type: 'Number'
                    }
                  ],
                  example: [
                    '\n<div class="norender">\n<code>\n// Run this example on a mobile device\n// You will need to shake the device more firmly\n// the closer the box\'s fill gets to white in order to change the value.\n\nlet value = 0;\nlet threshold = 30;\nfunction setup() {\n  setShakeThreshold(threshold);\n}\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction deviceMoved() {\n  value = value + 5;\n  threshold = threshold + 5;\n  if (value > 255) {\n    value = 0;\n    threshold = 30;\n  }\n  setShakeThreshold(threshold);\n}\n</code>\n</div>'
                  ],
                  alt:
                    '50x50 black rect in center of canvas. turns white on mobile when device\nis being shaked',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Acceleration'
                },
                {
                  file: 'src/events/acceleration.js',
                  line: 504,
                  description:
                    '<p>The <a href="#/p5/deviceMoved">deviceMoved()</a> function is called when the device is moved by more than\nthe threshold value along X, Y or Z axis. The default threshold is set to 0.5.\nThe threshold value can be changed using <a href="https://p5js.org/reference/#/p5/setMoveThreshold">setMoveThreshold()</a>.</p>\n',
                  itemtype: 'method',
                  name: 'deviceMoved',
                  example: [
                    '\n<div class="norender">\n<code>\n// Run this example on a mobile device\n// Move the device around\n// to change the value.\n\nlet value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction deviceMoved() {\n  value = value + 5;\n  if (value > 255) {\n    value = 0;\n  }\n}\n</code>\n</div>'
                  ],
                  alt:
                    '50x50 black rect in center of canvas. turns white on mobile when device moves',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Acceleration'
                },
                {
                  file: 'src/events/acceleration.js',
                  line: 536,
                  description:
                    '<p>The <a href="#/p5/deviceTurned">deviceTurned()</a> function is called when the device rotates by\nmore than 90 degrees continuously.\n<br><br>\nThe axis that triggers the <a href="#/p5/deviceTurned">deviceTurned()</a> method is stored in the turnAxis\nvariable. The <a href="#/p5/deviceTurned">deviceTurned()</a> method can be locked to trigger on any axis:\nX, Y or Z by comparing the turnAxis variable to &#39;X&#39;, &#39;Y&#39; or &#39;Z&#39;.</p>\n',
                  itemtype: 'method',
                  name: 'deviceTurned',
                  example: [
                    '\n<div class="norender">\n<code>\n// Run this example on a mobile device\n// Rotate the device by 90 degrees\n// to change the value.\n\nlet value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction deviceTurned() {\n  if (value === 0) {\n    value = 255;\n  } else if (value === 255) {\n    value = 0;\n  }\n}\n</code>\n</div>\n<div>\n<code>\n// Run this example on a mobile device\n// Rotate the device by 90 degrees in the\n// X-axis to change the value.\n\nlet value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction deviceTurned() {\n  if (turnAxis === \'X\') {\n    if (value === 0) {\n      value = 255;\n    } else if (value === 255) {\n      value = 0;\n    }\n  }\n}\n</code>\n</div>'
                  ],
                  alt:
                    '50x50 black rect in center of canvas. turns white on mobile when device turns\n50x50 black rect in center of canvas. turns white on mobile when x-axis turns',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Acceleration'
                },
                {
                  file: 'src/events/acceleration.js',
                  line: 595,
                  description:
                    '<p>The <a href="#/p5/deviceShaken">deviceShaken()</a> function is called when the device total acceleration\nchanges of accelerationX and accelerationY values is more than\nthe threshold value. The default threshold is set to 30.\nThe threshold value can be changed using <a href="https://p5js.org/reference/#/p5/setShakeThreshold">setShakeThreshold()</a>.</p>\n',
                  itemtype: 'method',
                  name: 'deviceShaken',
                  example: [
                    '\n<div class="norender">\n<code>\n// Run this example on a mobile device\n// Shake the device to change the value.\n\nlet value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction deviceShaken() {\n  value = value + 5;\n  if (value > 255) {\n    value = 0;\n  }\n}\n</code>\n</div>'
                  ],
                  alt:
                    '50x50 black rect in center of canvas. turns white on mobile when device shakes',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Acceleration'
                },
                {
                  file: 'src/events/keyboard.js',
                  line: 10,
                  description:
                    '<p>The boolean system variable <a href="#/p5/keyIsPressed">keyIsPressed</a> is true if any key is pressed\nand false if no keys are pressed.</p>\n',
                  itemtype: 'property',
                  name: 'keyIsPressed',
                  type: 'Boolean',
                  readonly: '',
                  example: [
                    '\n<div>\n<code>\nfunction draw() {\n  if (keyIsPressed === true) {\n    fill(0);\n  } else {\n    fill(255);\n  }\n  rect(25, 25, 50, 50);\n}\n</code>\n</div>'
                  ],
                  alt: '50x50 white rect that turns black on keypress.',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Keyboard'
                },
                {
                  file: 'src/events/keyboard.js',
                  line: 37,
                  description:
                    '<p>The system variable key always contains the value of the most recent\nkey on the keyboard that was typed. To get the proper capitalization, it\nis best to use it within <a href="#/p5/keyTyped">keyTyped()</a>. For non-ASCII keys, use the <a href="#/p5/keyCode">keyCode</a>\nvariable.</p>\n',
                  itemtype: 'property',
                  name: 'key',
                  type: 'String',
                  readonly: '',
                  example: [
                    '\n<div><code>\n// Click any key to display it!\n// (Not Guaranteed to be Case Sensitive)\nfunction setup() {\n  fill(245, 123, 158);\n  textSize(50);\n}\n\nfunction draw() {\n  background(200);\n  text(key, 33, 65); // Display last key pressed.\n}\n</code></div>'
                  ],
                  alt: 'canvas displays any key value that is pressed in pink font.',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Keyboard'
                },
                {
                  file: 'src/events/keyboard.js',
                  line: 66,
                  description:
                    '<p>The variable keyCode is used to detect special keys such as BACKSPACE,\nDELETE, ENTER, RETURN, TAB, ESCAPE, SHIFT, CONTROL, OPTION, ALT, UP_ARROW,\nDOWN_ARROW, LEFT_ARROW, RIGHT_ARROW.\nYou can also check for custom keys by looking up the keyCode of any key\non a site like this: <a href="http://keycode.info/">keycode.info</a>.</p>\n',
                  itemtype: 'property',
                  name: 'keyCode',
                  type: 'Integer',
                  readonly: '',
                  example: [
                    "\n<div><code>\nlet fillVal = 126;\nfunction draw() {\n  fill(fillVal);\n  rect(25, 25, 50, 50);\n}\n\nfunction keyPressed() {\n  if (keyCode === UP_ARROW) {\n    fillVal = 255;\n  } else if (keyCode === DOWN_ARROW) {\n    fillVal = 0;\n  }\n  return false; // prevent default\n}\n</code></div>\n<div><code>\nfunction draw() {}\nfunction keyPressed() {\n  background('yellow');\n  text(`${key} ${keyCode}`, 10, 40);\n  print(key, ' ', keyCode);\n  return false; // prevent default\n}\n</code></div>"
                  ],
                  alt:
                    'Grey rect center. turns white when up arrow pressed and black when down\nDisplay key pressed and its keyCode in a yellow box',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Keyboard'
                },
                {
                  file: 'src/events/keyboard.js',
                  line: 107,
                  description:
                    '<p>The <a href="#/p5/keyPressed">keyPressed()</a> function is called once every time a key is pressed. The\nkeyCode for the key that was pressed is stored in the <a href="#/p5/keyCode">keyCode</a> variable.\n<br><br>\nFor non-ASCII keys, use the keyCode variable. You can check if the keyCode\nequals BACKSPACE, DELETE, ENTER, RETURN, TAB, ESCAPE, SHIFT, CONTROL,\nOPTION, ALT, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW.\n<br><br>\nFor ASCII keys, the key that was pressed is stored in the key variable. However, it\ndoes not distinguish between uppercase and lowercase. For this reason, it\nis recommended to use <a href="#/p5/keyTyped">keyTyped()</a> to read the key variable, in which the\ncase of the variable will be distinguished.\n<br><br>\nBecause of how operating systems handle key repeats, holding down a key\nmay cause multiple calls to <a href="#/p5/keyTyped">keyTyped()</a> (and <a href="#/p5/keyReleased">keyReleased()</a> as well). The\nrate of repeat is set by the operating system and how each computer is\nconfigured.<br><br>\nBrowsers may have different default\nbehaviors attached to various key events. To prevent any default\nbehavior for this event, add &quot;return false&quot; to the end of the method.</p>\n',
                  itemtype: 'method',
                  name: 'keyPressed',
                  example: [
                    '\n<div>\n<code>\nlet value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction keyPressed() {\n  if (value === 0) {\n    value = 255;\n  } else {\n    value = 0;\n  }\n}\n</code>\n</div>\n<div>\n<code>\nlet value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction keyPressed() {\n  if (keyCode === LEFT_ARROW) {\n    value = 255;\n  } else if (keyCode === RIGHT_ARROW) {\n    value = 0;\n  }\n}\n</code>\n</div>\n<div class="norender">\n<code>\nfunction keyPressed() {\n  // Do something\n  return false; // prevent any default behaviour\n}\n</code>\n</div>'
                  ],
                  alt:
                    'black rect center. turns white when key pressed and black when released\nblack rect center. turns white when left arrow pressed and black when right.',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Keyboard'
                },
                {
                  file: 'src/events/keyboard.js',
                  line: 194,
                  description:
                    '<p>The <a href="#/p5/keyReleased">keyReleased()</a> function is called once every time a key is released.\nSee <a href="#/p5/key">key</a> and <a href="#/p5/keyCode">keyCode</a> for more information.<br><br>\nBrowsers may have different default\nbehaviors attached to various key events. To prevent any default\nbehavior for this event, add &quot;return false&quot; to the end of the method.</p>\n',
                  itemtype: 'method',
                  name: 'keyReleased',
                  example: [
                    '\n<div>\n<code>\nlet value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction keyReleased() {\n  if (value === 0) {\n    value = 255;\n  } else {\n    value = 0;\n  }\n  return false; // prevent any default behavior\n}\n</code>\n</div>'
                  ],
                  alt:
                    'black rect center. turns white when key pressed and black when pressed again',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Keyboard'
                },
                {
                  file: 'src/events/keyboard.js',
                  line: 246,
                  description:
                    '<p>The <a href="#/p5/keyTyped">keyTyped()</a> function is called once every time a key is pressed, but\naction keys such as Backspace, Delete, Ctrl, Shift, and Alt are ignored. If you are trying to detect\na keyCode for one of these keys, use the <a href="#/p5/keyPressed">keyPressed()</a> function instead.\nThe most recent key typed will be stored in the key variable.\n<br><br>\nBecause of how operating systems handle key repeats, holding down a key\nwill cause multiple calls to <a href="#/p5/keyTyped">keyTyped()</a> (and <a href="#/p5/keyReleased">keyReleased()</a> as well). The\nrate of repeat is set by the operating system and how each computer is\nconfigured.<br><br>\nBrowsers may have different default behaviors attached to various key\nevents. To prevent any default behavior for this event, add &quot;return false&quot;\nto the end of the method.</p>\n',
                  itemtype: 'method',
                  name: 'keyTyped',
                  example: [
                    "\n<div>\n<code>\nlet value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction keyTyped() {\n  if (key === 'a') {\n    value = 255;\n  } else if (key === 'b') {\n    value = 0;\n  }\n  // uncomment to prevent any default behavior\n  // return false;\n}\n</code>\n</div>"
                  ],
                  alt:
                    "black rect center. turns white when 'a' key typed and black when 'b' pressed",
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Keyboard'
                },
                {
                  file: 'src/events/keyboard.js',
                  line: 300,
                  description:
                    '<p>The onblur function is called when the user is no longer focused\non the p5 element. Because the keyup events will not fire if the user is\nnot focused on the element we must assume all keys currently down have\nbeen released.</p>\n',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Keyboard'
                },
                {
                  file: 'src/events/keyboard.js',
                  line: 310,
                  description:
                    '<p>The <a href="#/p5/keyIsDown">keyIsDown()</a> function checks if the key is currently down, i.e. pressed.\nIt can be used if you have an object that moves, and you want several keys\nto be able to affect its behaviour simultaneously, such as moving a\nsprite diagonally. You can put in any number representing the keyCode of\nthe key, or use any of the variable <a href="#/p5/keyCode">keyCode</a> names listed\n<a href="http://p5js.org/reference/#p5/keyCode">here</a>.</p>\n',
                  itemtype: 'method',
                  name: 'keyIsDown',
                  params: [
                    {
                      name: 'code',
                      description: '<p>The key to check for.</p>\n',
                      type: 'Number'
                    }
                  ],
                  return: {
                    description: 'whether key is down or not',
                    type: 'Boolean'
                  },
                  example: [
                    '\n<div><code>\nlet x = 100;\nlet y = 100;\n\nfunction setup() {\n  createCanvas(512, 512);\n  fill(255, 0, 0);\n}\n\nfunction draw() {\n  if (keyIsDown(LEFT_ARROW)) {\n    x -= 5;\n  }\n\n  if (keyIsDown(RIGHT_ARROW)) {\n    x += 5;\n  }\n\n  if (keyIsDown(UP_ARROW)) {\n    y -= 5;\n  }\n\n  if (keyIsDown(DOWN_ARROW)) {\n    y += 5;\n  }\n\n  clear();\n  ellipse(x, y, 50, 50);\n}\n</code></div>\n\n<div><code>\nlet diameter = 50;\n\nfunction setup() {\n  createCanvas(512, 512);\n}\n\nfunction draw() {\n  // 107 and 187 are keyCodes for "+"\n  if (keyIsDown(107) || keyIsDown(187)) {\n    diameter += 1;\n  }\n\n  // 109 and 189 are keyCodes for "-"\n  if (keyIsDown(109) || keyIsDown(189)) {\n    diameter -= 1;\n  }\n\n  clear();\n  fill(255, 0, 0);\n  ellipse(50, 50, diameter, diameter);\n}\n</code></div>'
                  ],
                  alt:
                    '50x50 red ellipse moves left, right, up and down with arrow presses.\n50x50 red ellipse gets bigger or smaller when + or - are pressed.',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Keyboard'
                },
                {
                  file: 'src/events/mouse.js',
                  line: 12,
                  description:
                    '<p>The variable movedX contains the horizontal movement of the mouse since the last frame</p>\n',
                  itemtype: 'property',
                  name: 'movedX',
                  type: 'Number',
                  readonly: '',
                  example: [
                    '\n <div class="notest">\n <code>\n let x = 50;\n function setup() {\n   rectMode(CENTER);\n }\nfunction draw() {\n   if (x > 48) {\n     x -= 2;\n   } else if (x < 48) {\n     x += 2;\n   }\n   x += floor(movedX / 5);\n   background(237, 34, 93);\n   fill(0);\n   rect(x, 50, 50, 50);\n }\n </code>\n </div>'
                  ],
                  alt:
                    'box moves left and right according to mouse movement then slowly back towards the center',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Mouse'
                },
                {
                  file: 'src/events/mouse.js',
                  line: 44,
                  description:
                    '<p>The variable movedY contains the vertical movement of the mouse since the last frame</p>\n',
                  itemtype: 'property',
                  name: 'movedY',
                  type: 'Number',
                  readonly: '',
                  example: [
                    '\n<div class="notest">\n<code>\nlet y = 50;\nfunction setup() {\n  rectMode(CENTER);\n}\n\nfunction draw() {\n  if (y > 48) {\n    y -= 2;\n  } else if (y < 48) {\n    y += 2;\n  }\n  y += floor(movedY / 5);\n  background(237, 34, 93);\n  fill(0);\n  rect(y, 50, 50, 50);\n}\n</code>\n</div>'
                  ],
                  alt:
                    'box moves up and down according to mouse movement then slowly back towards the center',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Mouse'
                },
                {
                  file: 'src/events/mouse.js',
                  line: 82,
                  description:
                    '<p>The system variable mouseX always contains the current horizontal\nposition of the mouse, relative to (0, 0) of the canvas. The value at\nthe top-left corner is (0, 0) for 2-D and (-width/2, -height/2) for WebGL.\nIf touch is used instead of mouse input, mouseX will hold the x value\nof the most recent touch point.</p>\n',
                  itemtype: 'property',
                  name: 'mouseX',
                  type: 'Number',
                  readonly: '',
                  example: [
                    '\n<div>\n<code>\n// Move the mouse across the canvas\nfunction draw() {\n  background(244, 248, 252);\n  line(mouseX, 0, mouseX, 100);\n}\n</code>\n</div>'
                  ],
                  alt: 'horizontal black line moves left and right with mouse x-position',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Mouse'
                },
                {
                  file: 'src/events/mouse.js',
                  line: 109,
                  description:
                    '<p>The system variable mouseY always contains the current vertical\nposition of the mouse, relative to (0, 0) of the canvas. The value at\nthe top-left corner is (0, 0) for 2-D and (-width/2, -height/2) for WebGL.\nIf touch is used instead of mouse input, mouseY will hold the y value\nof the most recent touch point.</p>\n',
                  itemtype: 'property',
                  name: 'mouseY',
                  type: 'Number',
                  readonly: '',
                  example: [
                    '\n<div>\n<code>\n// Move the mouse across the canvas\nfunction draw() {\n  background(244, 248, 252);\n  line(0, mouseY, 100, mouseY);\n}\n</code>\n</div>'
                  ],
                  alt: 'vertical black line moves up and down with mouse y-position',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Mouse'
                },
                {
                  file: 'src/events/mouse.js',
                  line: 136,
                  description:
                    '<p>The system variable pmouseX always contains the horizontal position of\nthe mouse or finger in the frame previous to the current frame, relative to\n(0, 0) of the canvas. The value at the top-left corner is (0, 0) for 2-D and\n(-width/2, -height/2) for WebGL. Note: pmouseX will be reset to the current mouseX\nvalue at the start of each touch event.</p>\n',
                  itemtype: 'property',
                  name: 'pmouseX',
                  type: 'Number',
                  readonly: '',
                  example: [
                    "\n<div>\n<code>\n// Move the mouse across the canvas to leave a trail\nfunction setup() {\n  //slow down the frameRate to make it more visible\n  frameRate(10);\n}\n\nfunction draw() {\n  background(244, 248, 252);\n  line(mouseX, mouseY, pmouseX, pmouseY);\n  print(pmouseX + ' -> ' + mouseX);\n}\n</code>\n</div>"
                  ],
                  alt:
                    'line trail is created from cursor movements. faster movement make longer line.',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Mouse'
                },
                {
                  file: 'src/events/mouse.js',
                  line: 169,
                  description:
                    '<p>The system variable pmouseY always contains the vertical position of\nthe mouse or finger in the frame previous to the current frame, relative to\n(0, 0) of the canvas. The value at the top-left corner is (0, 0) for 2-D and\n(-width/2, -height/2) for WebGL. Note: pmouseY will be reset to the current mouseY\nvalue at the start of each touch event.</p>\n',
                  itemtype: 'property',
                  name: 'pmouseY',
                  type: 'Number',
                  readonly: '',
                  example: [
                    "\n<div>\n<code>\nfunction draw() {\n  background(237, 34, 93);\n  fill(0);\n  //draw a square only if the mouse is not moving\n  if (mouseY === pmouseY && mouseX === pmouseX) {\n    rect(20, 20, 60, 60);\n  }\n\n  print(pmouseY + ' -> ' + mouseY);\n}\n</code>\n</div>"
                  ],
                  alt:
                    '60x60 black rect center, fuchsia background. rect flickers on mouse movement',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Mouse'
                },
                {
                  file: 'src/events/mouse.js',
                  line: 201,
                  description:
                    '<p>The system variable winMouseX always contains the current horizontal\nposition of the mouse, relative to (0, 0) of the window.</p>\n',
                  itemtype: 'property',
                  name: 'winMouseX',
                  type: 'Number',
                  readonly: '',
                  example: [
                    "\n<div>\n<code>\nlet myCanvas;\n\nfunction setup() {\n  //use a variable to store a pointer to the canvas\n  myCanvas = createCanvas(100, 100);\n  let body = document.getElementsByTagName('body')[0];\n  myCanvas.parent(body);\n}\n\nfunction draw() {\n  background(237, 34, 93);\n  fill(0);\n\n  //move the canvas to the horizontal mouse position\n  //relative to the window\n  myCanvas.position(winMouseX + 1, windowHeight / 2);\n\n  //the y of the square is relative to the canvas\n  rect(20, mouseY, 60, 60);\n}\n</code>\n</div>"
                  ],
                  alt:
                    '60x60 black rect y moves with mouse y and fuchsia canvas moves with mouse x',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Mouse'
                },
                {
                  file: 'src/events/mouse.js',
                  line: 240,
                  description:
                    '<p>The system variable winMouseY always contains the current vertical\nposition of the mouse, relative to (0, 0) of the window.</p>\n',
                  itemtype: 'property',
                  name: 'winMouseY',
                  type: 'Number',
                  readonly: '',
                  example: [
                    "\n<div>\n<code>\nlet myCanvas;\n\nfunction setup() {\n  //use a variable to store a pointer to the canvas\n  myCanvas = createCanvas(100, 100);\n  let body = document.getElementsByTagName('body')[0];\n  myCanvas.parent(body);\n}\n\nfunction draw() {\n  background(237, 34, 93);\n  fill(0);\n\n  //move the canvas to the vertical mouse position\n  //relative to the window\n  myCanvas.position(windowWidth / 2, winMouseY + 1);\n\n  //the x of the square is relative to the canvas\n  rect(mouseX, 20, 60, 60);\n}\n</code>\n</div>"
                  ],
                  alt:
                    '60x60 black rect x moves with mouse x and fuchsia canvas y moves with mouse y',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Mouse'
                },
                {
                  file: 'src/events/mouse.js',
                  line: 279,
                  description:
                    '<p>The system variable pwinMouseX always contains the horizontal position\nof the mouse in the frame previous to the current frame, relative to\n(0, 0) of the window. Note: pwinMouseX will be reset to the current winMouseX\nvalue at the start of each touch event.</p>\n',
                  itemtype: 'property',
                  name: 'pwinMouseX',
                  type: 'Number',
                  readonly: '',
                  example: [
                    '\n<div>\n<code>\nlet myCanvas;\n\nfunction setup() {\n  //use a variable to store a pointer to the canvas\n  myCanvas = createCanvas(100, 100);\n  noStroke();\n  fill(237, 34, 93);\n}\n\nfunction draw() {\n  clear();\n  //the difference between previous and\n  //current x position is the horizontal mouse speed\n  let speed = abs(winMouseX - pwinMouseX);\n  //change the size of the circle\n  //according to the horizontal speed\n  ellipse(50, 50, 10 + speed * 5, 10 + speed * 5);\n  //move the canvas to the mouse position\n  myCanvas.position(winMouseX + 1, winMouseY + 1);\n}\n</code>\n</div>'
                  ],
                  alt:
                    'fuchsia ellipse moves with mouse x and y. Grows and shrinks with mouse speed',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Mouse'
                },
                {
                  file: 'src/events/mouse.js',
                  line: 320,
                  description:
                    '<p>The system variable pwinMouseY always contains the vertical position of\nthe mouse in the frame previous to the current frame, relative to (0, 0)\nof the window. Note: pwinMouseY will be reset to the current winMouseY\nvalue at the start of each touch event.</p>\n',
                  itemtype: 'property',
                  name: 'pwinMouseY',
                  type: 'Number',
                  readonly: '',
                  example: [
                    '\n<div>\n<code>\nlet myCanvas;\n\nfunction setup() {\n  //use a variable to store a pointer to the canvas\n  myCanvas = createCanvas(100, 100);\n  noStroke();\n  fill(237, 34, 93);\n}\n\nfunction draw() {\n  clear();\n  //the difference between previous and\n  //current y position is the vertical mouse speed\n  let speed = abs(winMouseY - pwinMouseY);\n  //change the size of the circle\n  //according to the vertical speed\n  ellipse(50, 50, 10 + speed * 5, 10 + speed * 5);\n  //move the canvas to the mouse position\n  myCanvas.position(winMouseX + 1, winMouseY + 1);\n}\n</code>\n</div>'
                  ],
                  alt:
                    'fuchsia ellipse moves with mouse x and y. Grows and shrinks with mouse speed',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Mouse'
                },
                {
                  file: 'src/events/mouse.js',
                  line: 362,
                  description:
                    '<p>Processing automatically tracks if the mouse button is pressed and which\nbutton is pressed. The value of the system variable mouseButton is either\nLEFT, RIGHT, or CENTER depending on which button was pressed last.\nWarning: different browsers may track mouseButton differently.</p>\n',
                  itemtype: 'property',
                  name: 'mouseButton',
                  type: 'Constant',
                  readonly: '',
                  example: [
                    '\n<div>\n<code>\nfunction draw() {\n  background(237, 34, 93);\n  fill(0);\n\n  if (mouseIsPressed) {\n    if (mouseButton === LEFT) {\n      ellipse(50, 50, 50, 50);\n    }\n    if (mouseButton === RIGHT) {\n      rect(25, 25, 50, 50);\n    }\n    if (mouseButton === CENTER) {\n      triangle(23, 75, 50, 20, 78, 75);\n    }\n  }\n\n  print(mouseButton);\n}\n</code>\n</div>'
                  ],
                  alt:
                    '50x50 black ellipse appears on center of fuchsia canvas on mouse click/press.',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Mouse'
                },
                {
                  file: 'src/events/mouse.js',
                  line: 401,
                  description:
                    '<p>The boolean system variable mouseIsPressed is true if the mouse is pressed\nand false if not.</p>\n',
                  itemtype: 'property',
                  name: 'mouseIsPressed',
                  type: 'Boolean',
                  readonly: '',
                  example: [
                    '\n<div>\n<code>\nfunction draw() {\n  background(237, 34, 93);\n  fill(0);\n\n  if (mouseIsPressed) {\n    ellipse(50, 50, 50, 50);\n  } else {\n    rect(25, 25, 50, 50);\n  }\n\n  print(mouseIsPressed);\n}\n</code>\n</div>'
                  ],
                  alt:
                    'black 50x50 rect becomes ellipse with mouse click/press. fuchsia background.',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Mouse'
                },
                {
                  file: 'src/events/mouse.js',
                  line: 494,
                  description:
                    '<p>The <a href="#/p5/mouseMoved">mouseMoved()</a> function is called every time the mouse moves and a mouse\nbutton is not pressed.<br><br>\nBrowsers may have different default\nbehaviors attached to various mouse events. To prevent any default\nbehavior for this event, add &quot;return false&quot; to the end of the method.</p>\n',
                  itemtype: 'method',
                  name: 'mouseMoved',
                  params: [
                    {
                      name: 'event',
                      description: '<p>optional MouseEvent callback argument.</p>\n',
                      type: 'Object',
                      optional: true
                    }
                  ],
                  example: [
                    '\n<div>\n<code>\n// Move the mouse across the page\n// to change its value\n\nlet value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction mouseMoved() {\n  value = value + 5;\n  if (value > 255) {\n    value = 0;\n  }\n}\n</code>\n</div>\n\n<div class="norender">\n<code>\nfunction mouseMoved() {\n  ellipse(mouseX, mouseY, 5, 5);\n  // prevent default\n  return false;\n}\n</code>\n</div>\n\n<div class="norender">\n<code>\n// returns a MouseEvent object\n// as a callback argument\nfunction mouseMoved(event) {\n  console.log(event);\n}\n</code>\n</div>'
                  ],
                  alt:
                    'black 50x50 rect becomes lighter with mouse movements until white then resets\nno image displayed',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Mouse'
                },
                {
                  file: 'src/events/mouse.js',
                  line: 549,
                  description:
                    '<p>The <a href="#/p5/mouseDragged">mouseDragged()</a> function is called once every time the mouse moves and\na mouse button is pressed. If no <a href="#/p5/mouseDragged">mouseDragged()</a> function is defined, the\n<a href="#/p5/touchMoved">touchMoved()</a> function will be called instead if it is defined.<br><br>\nBrowsers may have different default\nbehaviors attached to various mouse events. To prevent any default\nbehavior for this event, add &quot;return false&quot; to the end of the method.</p>\n',
                  itemtype: 'method',
                  name: 'mouseDragged',
                  params: [
                    {
                      name: 'event',
                      description: '<p>optional MouseEvent callback argument.</p>\n',
                      type: 'Object',
                      optional: true
                    }
                  ],
                  example: [
                    '\n<div>\n<code>\n// Drag the mouse across the page\n// to change its value\n\nlet value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction mouseDragged() {\n  value = value + 5;\n  if (value > 255) {\n    value = 0;\n  }\n}\n</code>\n</div>\n\n<div class="norender">\n<code>\nfunction mouseDragged() {\n  ellipse(mouseX, mouseY, 5, 5);\n  // prevent default\n  return false;\n}\n</code>\n</div>\n\n<div class="norender">\n<code>\n// returns a MouseEvent object\n// as a callback argument\nfunction mouseDragged(event) {\n  console.log(event);\n}\n</code>\n</div>'
                  ],
                  alt:
                    'black 50x50 rect turns lighter with mouse click and drag until white, resets\nno image displayed',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Mouse'
                },
                {
                  file: 'src/events/mouse.js',
                  line: 630,
                  description:
                    '<p>The <a href="#/p5/mousePressed">mousePressed()</a> function is called once after every time a mouse button\nis pressed. The mouseButton variable (see the related reference entry)\ncan be used to determine which button has been pressed. If no\n<a href="#/p5/mousePressed">mousePressed()</a> function is defined, the <a href="#/p5/touchStarted">touchStarted()</a> function will be\ncalled instead if it is defined.<br><br>\nBrowsers may have different default\nbehaviors attached to various mouse events. To prevent any default\nbehavior for this event, add &quot;return false&quot; to the end of the method.</p>\n',
                  itemtype: 'method',
                  name: 'mousePressed',
                  params: [
                    {
                      name: 'event',
                      description: '<p>optional MouseEvent callback argument.</p>\n',
                      type: 'Object',
                      optional: true
                    }
                  ],
                  example: [
                    '\n<div>\n<code>\n// Click within the image to change\n// the value of the rectangle\n\nlet value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction mousePressed() {\n  if (value === 0) {\n    value = 255;\n  } else {\n    value = 0;\n  }\n}\n</code>\n</div>\n\n<div class="norender">\n<code>\nfunction mousePressed() {\n  ellipse(mouseX, mouseY, 5, 5);\n  // prevent default\n  return false;\n}\n</code>\n</div>\n\n<div class="norender">\n<code>\n// returns a MouseEvent object\n// as a callback argument\nfunction mousePressed(event) {\n  console.log(event);\n}\n</code>\n</div>'
                  ],
                  alt:
                    'black 50x50 rect turns white with mouse click/press.\nno image displayed',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Mouse'
                },
                {
                  file: 'src/events/mouse.js',
                  line: 712,
                  description:
                    '<p>The <a href="#/p5/mouseReleased">mouseReleased()</a> function is called every time a mouse button is\nreleased. If no <a href="#/p5/mouseReleased">mouseReleased()</a> function is defined, the <a href="#/p5/touchEnded">touchEnded()</a>\nfunction will be called instead if it is defined.<br><br>\nBrowsers may have different default\nbehaviors attached to various mouse events. To prevent any default\nbehavior for this event, add &quot;return false&quot; to the end of the method.</p>\n',
                  itemtype: 'method',
                  name: 'mouseReleased',
                  params: [
                    {
                      name: 'event',
                      description: '<p>optional MouseEvent callback argument.</p>\n',
                      type: 'Object',
                      optional: true
                    }
                  ],
                  example: [
                    '\n<div>\n<code>\n// Click within the image to change\n// the value of the rectangle\n// after the mouse has been clicked\n\nlet value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction mouseReleased() {\n  if (value === 0) {\n    value = 255;\n  } else {\n    value = 0;\n  }\n}\n</code>\n</div>\n\n<div class="norender">\n<code>\nfunction mouseReleased() {\n  ellipse(mouseX, mouseY, 5, 5);\n  // prevent default\n  return false;\n}\n</code>\n</div>\n\n<div class="norender">\n<code>\n// returns a MouseEvent object\n// as a callback argument\nfunction mouseReleased(event) {\n  console.log(event);\n}\n</code>\n</div>'
                  ],
                  alt:
                    'black 50x50 rect turns white with mouse click/press.\nno image displayed',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Mouse'
                },
                {
                  file: 'src/events/mouse.js',
                  line: 790,
                  description:
                    '<p>The <a href="#/p5/mouseClicked">mouseClicked()</a> function is called once after a mouse button has been\npressed and then released.<br><br>\nBrowsers handle clicks differently, so this function is only guaranteed to be\nrun when the left mouse button is clicked. To handle other mouse buttons\nbeing pressed or released, see <a href="#/p5/mousePressed">mousePressed()</a> or <a href="#/p5/mouseReleased">mouseReleased()</a>.<br><br>\nBrowsers may have different default\nbehaviors attached to various mouse events. To prevent any default\nbehavior for this event, add &quot;return false&quot; to the end of the method.</p>\n',
                  itemtype: 'method',
                  name: 'mouseClicked',
                  params: [
                    {
                      name: 'event',
                      description: '<p>optional MouseEvent callback argument.</p>\n',
                      type: 'Object',
                      optional: true
                    }
                  ],
                  example: [
                    '\n<div>\n<code>\n// Click within the image to change\n// the value of the rectangle\n// after the mouse has been clicked\n\nlet value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\n\nfunction mouseClicked() {\n  if (value === 0) {\n    value = 255;\n  } else {\n    value = 0;\n  }\n}\n</code>\n</div>\n\n<div class="norender">\n<code>\nfunction mouseClicked() {\n  ellipse(mouseX, mouseY, 5, 5);\n  // prevent default\n  return false;\n}\n</code>\n</div>\n\n<div class="norender">\n<code>\n// returns a MouseEvent object\n// as a callback argument\nfunction mouseClicked(event) {\n  console.log(event);\n}\n</code>\n</div>'
                  ],
                  alt:
                    'black 50x50 rect turns white with mouse click/press.\nno image displayed',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Mouse'
                },
                {
                  file: 'src/events/mouse.js',
                  line: 860,
                  description:
                    '<p>The <a href="#/p5/doubleClicked">doubleClicked()</a> function is executed every time a event\nlistener has detected a dblclick event which is a part of the\nDOM L3 specification. The doubleClicked event is fired when a\npointing device button (usually a mouse&#39;s primary button)\nis clicked twice on a single element. For more info on the\ndblclick event refer to mozilla&#39;s documentation here:\n<a href="https://developer.mozilla.org/en-US/docs/Web/Events/dblclick">https://developer.mozilla.org/en-US/docs/Web/Events/dblclick</a></p>\n',
                  itemtype: 'method',
                  name: 'doubleClicked',
                  params: [
                    {
                      name: 'event',
                      description: '<p>optional MouseEvent callback argument.</p>\n',
                      type: 'Object',
                      optional: true
                    }
                  ],
                  example: [
                    '\n<div>\n<code>\n// Click within the image to change\n// the value of the rectangle\n// after the mouse has been double clicked\n\nlet value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\n\nfunction doubleClicked() {\n  if (value === 0) {\n    value = 255;\n  } else {\n    value = 0;\n  }\n}\n</code>\n</div>\n\n<div class="norender">\n<code>\nfunction doubleClicked() {\n  ellipse(mouseX, mouseY, 5, 5);\n  // prevent default\n  return false;\n}\n</code>\n</div>\n\n<div class="norender">\n<code>\n// returns a MouseEvent object\n// as a callback argument\nfunction doubleClicked(event) {\n  console.log(event);\n}\n</code>\n</div>'
                  ],
                  alt:
                    'black 50x50 rect turns white with mouse doubleClick/press.\nno image displayed',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Mouse'
                },
                {
                  file: 'src/events/mouse.js',
                  line: 945,
                  description:
                    '<p>The function <a href="#/p5/mouseWheel">mouseWheel()</a> is executed every time a vertical mouse wheel\nevent is detected either triggered by an actual mouse wheel or by a\ntouchpad.<br><br>\nThe event.delta property returns the amount the mouse wheel\nhave scrolled. The values can be positive or negative depending on the\nscroll direction (on OS X with &quot;natural&quot; scrolling enabled, the signs\nare inverted).<br><br>\nBrowsers may have different default behaviors attached to various\nmouse events. To prevent any default behavior for this event, add\n&quot;return false&quot; to the end of the method.<br><br>\nDue to the current support of the &quot;wheel&quot; event on Safari, the function\nmay only work as expected if &quot;return false&quot; is included while using Safari.</p>\n',
                  itemtype: 'method',
                  name: 'mouseWheel',
                  params: [
                    {
                      name: 'event',
                      description: '<p>optional WheelEvent callback argument.</p>\n',
                      type: 'Object',
                      optional: true
                    }
                  ],
                  example: [
                    '\n<div>\n<code>\nlet pos = 25;\n\nfunction draw() {\n  background(237, 34, 93);\n  fill(0);\n  rect(25, pos, 50, 50);\n}\n\nfunction mouseWheel(event) {\n  print(event.delta);\n  //move the square according to the vertical scroll amount\n  pos += event.delta;\n  //uncomment to block page scrolling\n  //return false;\n}\n</code>\n</div>'
                  ],
                  alt:
                    'black 50x50 rect moves up and down with vertical scroll. fuchsia background',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Mouse'
                },
                {
                  file: 'src/events/mouse.js',
                  line: 999,
                  description:
                    '<p>The function <a href="#/p5/requestPointerLock">requestPointerLock()</a>\nlocks the pointer to its current position and makes it invisible.\nUse <a href="#/p5/movedX">movedX</a> and <a href="#/p5/movedY">movedY</a> to get the difference the mouse was moved since\nthe last call of draw</p>\n<p>Note that not all browsers support this feature</p>\n<p>This enables you to create experiences that aren\'t limited by the mouse moving out of the screen\neven if it is repeatedly moved into one direction. </p>\n<p>For example a first person perspective experience</p>',
                  itemtype: 'method',
                  name: 'requestPointerLock',
                  example: [
                    '\n<div class="notest">\n<code>\nlet cam;\nfunction setup() {\n  createCanvas(100, 100, WEBGL);\n  requestPointerLock();\n  cam = createCamera();\n}\n\nfunction draw() {\n  background(255);\n  cam.pan(-movedX * 0.001);\n  cam.tilt(movedY * 0.001);\n  sphere(25);\n}\n</code>\n</div>'
                  ],
                  alt:
                    '3D scene moves according to mouse mouse movement in a first person perspective',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Mouse'
                },
                {
                  file: 'src/events/mouse.js',
                  line: 1046,
                  description:
                    '<p>The function <a href="#/p5/exitPointerLock">exitPointerLock()</a>\nexits a previously triggered <a href="#/p5/requestPointerLock">pointer Lock</a>\nfor example to make ui elements usable etc',
                  itemtype: 'method',
                  name: 'exitPointerLock',
                  example: [
                    '\n<div class="notest">\n<code>\n//click the canvas to lock the pointer\n//click again to exit (otherwise escape)\nlet locked = false;\nfunction draw() {\n  background(237, 34, 93);\n}\nfunction mouseClicked() {\n  if (!locked) {\n    locked = true;\n    requestPointerLock();\n  } else {\n    exitPointerLock();\n    locked = false;\n  }\n}\n</code>\n</div>'
                  ],
                  alt: 'cursor gets locked / unlocked on mouse-click',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Mouse'
                },
                {
                  file: 'src/events/touch.js',
                  line: 10,
                  description:
                    '<p>The system variable touches[] contains an array of the positions of all\ncurrent touch points, relative to (0, 0) of the canvas, and IDs identifying a\nunique touch as it moves. Each element in the array is an object with x, y,\nand id properties.</p>\n<p>The touches[] array is not supported on Safari and IE on touch-based\ndesktops (laptops).</p>\n',
                  itemtype: 'property',
                  name: 'touches',
                  type: 'Object[]',
                  readonly: '',
                  example: [
                    "\n<div>\n<code>\n// On a touchscreen device, touch\n// the canvas using one or more fingers\n// at the same time\nfunction draw() {\n  clear();\n  let display = touches.length + ' touches';\n  text(display, 5, 10);\n}\n</code>\n</div>"
                  ],
                  alt: 'Number of touches currently registered are displayed on the canvas',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Touch'
                },
                {
                  file: 'src/events/touch.js',
                  line: 71,
                  description:
                    '<p>The touchStarted() function is called once after every time a touch is\nregistered. If no <a href="#/p5/touchStarted">touchStarted()</a> function is defined, the <a href="#/p5/mousePressed">mousePressed()</a>\nfunction will be called instead if it is defined.<br><br>\nBrowsers may have different default behaviors attached to various touch\nevents. To prevent any default behavior for this event, add &quot;return false&quot;\nto the end of the method.</p>\n',
                  itemtype: 'method',
                  name: 'touchStarted',
                  params: [
                    {
                      name: 'event',
                      description: '<p>optional TouchEvent callback argument.</p>\n',
                      type: 'Object',
                      optional: true
                    }
                  ],
                  example: [
                    '\n<div>\n<code>\n// Touch within the image to change\n// the value of the rectangle\n\nlet value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction touchStarted() {\n  if (value === 0) {\n    value = 255;\n  } else {\n    value = 0;\n  }\n}\n</code>\n</div>\n\n<div class="norender">\n<code>\nfunction touchStarted() {\n  ellipse(mouseX, mouseY, 5, 5);\n  // prevent default\n  return false;\n}\n</code>\n</div>\n\n<div class="norender">\n<code>\n// returns a TouchEvent object\n// as a callback argument\nfunction touchStarted(event) {\n  console.log(event);\n}\n</code>\n</div>'
                  ],
                  alt: '50x50 black rect turns white with touch event.\nno image displayed',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Touch'
                },
                {
                  file: 'src/events/touch.js',
                  line: 151,
                  description:
                    '<p>The <a href="#/p5/touchMoved">touchMoved()</a> function is called every time a touch move is registered.\nIf no <a href="#/p5/touchMoved">touchMoved()</a> function is defined, the <a href="#/p5/mouseDragged">mouseDragged()</a> function will\nbe called instead if it is defined.<br><br>\nBrowsers may have different default behaviors attached to various touch\nevents. To prevent any default behavior for this event, add &quot;return false&quot;\nto the end of the method.</p>\n',
                  itemtype: 'method',
                  name: 'touchMoved',
                  params: [
                    {
                      name: 'event',
                      description: '<p>optional TouchEvent callback argument.</p>\n',
                      type: 'Object',
                      optional: true
                    }
                  ],
                  example: [
                    '\n<div>\n<code>\n// Move your finger across the page\n// to change its value\n\nlet value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction touchMoved() {\n  value = value + 5;\n  if (value > 255) {\n    value = 0;\n  }\n}\n</code>\n</div>\n\n<div class="norender">\n<code>\nfunction touchMoved() {\n  ellipse(mouseX, mouseY, 5, 5);\n  // prevent default\n  return false;\n}\n</code>\n</div>\n\n<div class="norender">\n<code>\n// returns a TouchEvent object\n// as a callback argument\nfunction touchMoved(event) {\n  console.log(event);\n}\n</code>\n</div>'
                  ],
                  alt:
                    '50x50 black rect turns lighter with touch until white. resets\nno image displayed',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Touch'
                },
                {
                  file: 'src/events/touch.js',
                  line: 224,
                  description:
                    '<p>The <a href="#/p5/touchEnded">touchEnded()</a> function is called every time a touch ends. If no\n<a href="#/p5/touchEnded">touchEnded()</a> function is defined, the <a href="#/p5/mouseReleased">mouseReleased()</a> function will be\ncalled instead if it is defined.<br><br>\nBrowsers may have different default behaviors attached to various touch\nevents. To prevent any default behavior for this event, add &quot;return false&quot;\nto the end of the method.</p>\n',
                  itemtype: 'method',
                  name: 'touchEnded',
                  params: [
                    {
                      name: 'event',
                      description: '<p>optional TouchEvent callback argument.</p>\n',
                      type: 'Object',
                      optional: true
                    }
                  ],
                  example: [
                    '\n<div>\n<code>\n// Release touch within the image to\n// change the value of the rectangle\n\nlet value = 0;\nfunction draw() {\n  fill(value);\n  rect(25, 25, 50, 50);\n}\nfunction touchEnded() {\n  if (value === 0) {\n    value = 255;\n  } else {\n    value = 0;\n  }\n}\n</code>\n</div>\n\n<div class="norender">\n<code>\nfunction touchEnded() {\n  ellipse(mouseX, mouseY, 5, 5);\n  // prevent default\n  return false;\n}\n</code>\n</div>\n\n<div class="norender">\n<code>\n// returns a TouchEvent object\n// as a callback argument\nfunction touchEnded(event) {\n  console.log(event);\n}\n</code>\n</div>'
                  ],
                  alt: '50x50 black rect turns white with touch.\nno image displayed',
                  class: 'p5',
                  module: 'Events',
                  submodule: 'Touch'
                },
                {
                  file: 'src/image/filters.js',
                  line: 3,
                  description:
                    '<p>This module defines the filters for use with image buffers.</p>\n<p>This module is basically a collection of functions stored in an object\nas opposed to modules. The functions are destructive, modifying\nthe passed in canvas rather than creating a copy.</p>\n<p>Generally speaking users of this module will use the Filters.apply method\non a canvas to create an effect.</p>\n<p>A number of functions are borrowed/adapted from\n<a href="http://www.html5rocks.com/en/tutorials/canvas/imagefilters/">http://www.html5rocks.com/en/tutorials/canvas/imagefilters/</a>\nor the java processing implementation.</p>\n',
                  class: 'p5',
                  module: 'Events'
                },
                {
                  file: 'src/image/image.js',
                  line: 8,
                  description:
                    '<p>This module defines the p5 methods for the <a href="#/p5.Image">p5.Image</a> class\nfor drawing images to the main display canvas.</p>\n',
                  class: 'p5',
                  module: 'Image',
                  submodule: 'Image'
                },
                {
                  file: 'src/image/image.js',
                  line: 22,
                  description:
                    '<p>Creates a new <a href="#/p5.Image">p5.Image</a> (the datatype for storing images). This provides a\nfresh buffer of pixels to play with. Set the size of the buffer with the\nwidth and height parameters.\n<br><br>\n.<a href="#/p5.Image/pixels">pixels</a> gives access to an array containing the values for all the pixels\nin the display window.\nThese values are numbers. This array is the size (including an appropriate\nfactor for the <a href="#/p5/pixelDensity">pixelDensity</a>) of the display window x4,\nrepresenting the R, G, B, A values in order for each pixel, moving from\nleft to right across each row, then down each column. See .<a href="#/p5.Image/pixels">pixels</a> for\nmore info. It may also be simpler to use <a href="#/p5.Image/set">set()</a> or <a href="#/p5.Image/get">get()</a>.\n<br><br>\nBefore accessing the pixels of an image, the data must loaded with the\n<a href="#/p5.Image/loadPixels">loadPixels()</a> function. After the array data has been modified, the\n<a href="#/p5.Image/updatePixels">updatePixels()</a> function must be run to update the changes.</p>\n',
                  itemtype: 'method',
                  name: 'createImage',
                  params: [
                    {
                      name: 'width',
                      description: '<p>width in pixels</p>\n',
                      type: 'Integer'
                    },
                    {
                      name: 'height',
                      description: '<p>height in pixels</p>\n',
                      type: 'Integer'
                    }
                  ],
                  return: {
                    description: 'the <a href="#/p5.Image">p5.Image</a> object',
                    type: 'p5.Image'
                  },
                  example: [
                    '\n<div>\n<code>\nlet img = createImage(66, 66);\nimg.loadPixels();\nfor (let i = 0; i < img.width; i++) {\n  for (let j = 0; j < img.height; j++) {\n    img.set(i, j, color(0, 90, 102));\n  }\n}\nimg.updatePixels();\nimage(img, 17, 17);\n</code>\n</div>\n\n<div>\n<code>\nlet img = createImage(66, 66);\nimg.loadPixels();\nfor (let i = 0; i < img.width; i++) {\n  for (let j = 0; j < img.height; j++) {\n    img.set(i, j, color(0, 90, 102, (i % img.width) * 2));\n  }\n}\nimg.updatePixels();\nimage(img, 17, 17);\nimage(img, 34, 34);\n</code>\n</div>\n\n<div>\n<code>\nlet pink = color(255, 102, 204);\nlet img = createImage(66, 66);\nimg.loadPixels();\nlet d = pixelDensity();\nlet halfImage = 4 * (img.width * d) * (img.height / 2 * d);\nfor (let i = 0; i < halfImage; i += 4) {\n  img.pixels[i] = red(pink);\n  img.pixels[i + 1] = green(pink);\n  img.pixels[i + 2] = blue(pink);\n  img.pixels[i + 3] = alpha(pink);\n}\nimg.updatePixels();\nimage(img, 17, 17);\n</code>\n</div>'
                  ],
                  alt:
                    '66x66 dark turquoise rect in center of canvas.\n2 gradated dark turquoise rects fade left. 1 center 1 bottom right of canvas\nno image displayed',
                  class: 'p5',
                  module: 'Image',
                  submodule: 'Image'
                },
                {
                  file: 'src/image/image.js',
                  line: 102,
                  description:
                    '<p>Save the current canvas as an image. The browser will either save the\nfile immediately, or prompt the user with a dialogue window.</p>\n',
                  itemtype: 'method',
                  name: 'saveCanvas',
                  example: [
                    "\n <div class='norender notest'><code>\n function setup() {\n let c = createCanvas(100, 100);\n background(255, 0, 0);\n saveCanvas(c, 'myCanvas', 'jpg');\n }\n </code></div>\n <div class='norender notest'><code>\n // note that this example has the same result as above\n // if no canvas is specified, defaults to main canvas\n function setup() {\n let c = createCanvas(100, 100);\n background(255, 0, 0);\n saveCanvas('myCanvas', 'jpg');\n\n // all of the following are valid\n saveCanvas(c, 'myCanvas', 'jpg');\n saveCanvas(c, 'myCanvas.jpg');\n saveCanvas(c, 'myCanvas');\n saveCanvas(c);\n saveCanvas('myCanvas', 'png');\n saveCanvas('myCanvas');\n saveCanvas();\n }\n </code></div>"
                  ],
                  alt: 'no image displayed\n no image displayed\n no image displayed',
                  class: 'p5',
                  module: 'Image',
                  submodule: 'Image',
                  overloads: [
                    {
                      line: 102,
                      params: [
                        {
                          name: 'selectedCanvas',
                          description:
                            '<p>a variable\n                                representing a specific html5 canvas (optional)</p>\n',
                          type: 'p5.Element|HTMLCanvasElement'
                        },
                        {
                          name: 'filename',
                          description: '',
                          type: 'String',
                          optional: true
                        },
                        {
                          name: 'extension',
                          description: '<p>&#39;jpg&#39; or &#39;png&#39;</p>\n',
                          type: 'String',
                          optional: true
                        }
                      ]
                    },
                    {
                      line: 144,
                      params: [
                        {
                          name: 'filename',
                          description: '',
                          type: 'String',
                          optional: true
                        },
                        {
                          name: 'extension',
                          description: '',
                          type: 'String',
                          optional: true
                        }
                      ]
                    }
                  ]
                },
                {
                  file: 'src/image/image.js',
                  line: 249,
                  description:
                    '<p>Capture a sequence of frames that can be used to create a movie.\nAccepts a callback. For example, you may wish to send the frames\nto a server where they can be stored or converted into a movie.\nIf no callback is provided, the browser will pop up save dialogues in an\nattempt to download all of the images that have just been created. With the\ncallback provided the image data isn&#39;t saved by default but instead passed\nas an argument to the callback function as an array of objects, with the\nsize of array equal to the total number of frames.</p>\n<p>Note that <a href="#/p5.Image/saveFrames">saveFrames()</a> will only save the first 15 frames of an animation.\nTo export longer animations, you might look into a library like\n<a href="https://github.com/spite/ccapture.js/">ccapture.js</a>.</p>\n',
                  itemtype: 'method',
                  name: 'saveFrames',
                  params: [
                    {
                      name: 'filename',
                      description: '',
                      type: 'String'
                    },
                    {
                      name: 'extension',
                      description: '<p>&#39;jpg&#39; or &#39;png&#39;</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'duration',
                      description: '<p>Duration in seconds to save the frames for.</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'framerate',
                      description: '<p>Framerate to save the frames in.</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'callback',
                      description:
                        '<p>A callback function that will be executed\n                                to handle the image data. This function\n                                should accept an array as argument. The\n                                array will contain the specified number of\n                                frames of objects. Each object has three\n                                properties: imageData - an\n                                image/octet-stream, filename and extension.</p>\n',
                      type: 'Function(Array)',
                      optional: true
                    }
                  ],
                  example: [
                    "\n<div><code>\n function draw() {\n background(mouseX);\n }\n\n function mousePressed() {\n saveFrames('out', 'png', 1, 25, data => {\n   print(data);\n });\n }\n</code></div>"
                  ],
                  alt: 'canvas background goes from light to dark with mouse x.',
                  class: 'p5',
                  module: 'Image',
                  submodule: 'Image'
                },
                {
                  file: 'src/image/loading_displaying.js',
                  line: 16,
                  description:
                    '<p>Loads an image from a path and creates a <a href="#/p5.Image">p5.Image</a> from it.\n<br><br>\nThe image may not be immediately available for rendering\nIf you want to ensure that the image is ready before doing\nanything with it, place the <a href="#/p5/loadImage">loadImage()</a> call in <a href="#/p5/preload">preload()</a>.\nYou may also supply a callback function to handle the image when it&#39;s ready.\n<br><br>\nThe path to the image should be relative to the HTML file\nthat links in your sketch. Loading an image from a URL or other\nremote location may be blocked due to your browser&#39;s built-in\nsecurity.</p>\n',
                  itemtype: 'method',
                  name: 'loadImage',
                  params: [
                    {
                      name: 'path',
                      description: '<p>Path of the image to be loaded</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'successCallback',
                      description:
                        '<p>Function to be called once\n                               the image is loaded. Will be passed the\n                               <a href="#/p5.Image">p5.Image</a>.</p>\n',
                      type: 'function(p5.Image)',
                      optional: true
                    },
                    {
                      name: 'failureCallback',
                      description:
                        '<p>called with event error if\n                               the image fails to load.</p>\n',
                      type: 'Function(Event)',
                      optional: true
                    }
                  ],
                  return: {
                    description: 'the <a href="#/p5.Image">p5.Image</a> object',
                    type: 'p5.Image'
                  },
                  example: [
                    "\n<div>\n<code>\nlet img;\nfunction preload() {\n  img = loadImage('assets/laDefense.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n}\n</code>\n</div>\n<div>\n<code>\nfunction setup() {\n  // here we use a callback to display the image after loading\n  loadImage('assets/laDefense.jpg', img => {\n    image(img, 0, 0);\n  });\n}\n</code>\n</div>"
                  ],
                  alt:
                    'image of the underside of a white umbrella and grided ceililng above\nimage of the underside of a white umbrella and grided ceililng above',
                  class: 'p5',
                  module: 'Image',
                  submodule: 'Loading & Displaying'
                },
                {
                  file: 'src/image/loading_displaying.js',
                  line: 143,
                  description: '<p>Helper function for loading GIF-based images</p>\n',
                  class: 'p5',
                  module: 'Image',
                  submodule: 'Loading & Displaying'
                },
                {
                  file: 'src/image/loading_displaying.js',
                  line: 251,
                  description:
                    '<p>Draw an image to the p5.js canvas.</p>\n<p>This function can be used with different numbers of parameters. The\nsimplest use requires only three parameters: img, x, and y—where (x, y) is\nthe position of the image. Two more parameters can optionally be added to\nspecify the width and height of the image.</p>\n<p>This function can also be used with all eight Number parameters. To\ndifferentiate between all these parameters, p5.js uses the language of\n&quot;destination rectangle&quot; (which corresponds to &quot;dx&quot;, &quot;dy&quot;, etc.) and &quot;source\nimage&quot; (which corresponds to &quot;sx&quot;, &quot;sy&quot;, etc.) below. Specifying the\n&quot;source image&quot; dimensions can be useful when you want to display a\nsubsection of the source image instead of the whole thing. Here&#39;s a diagram\nto explain further:\n<img src="assets/drawImage.png"></img></p>\n',
                  itemtype: 'method',
                  name: 'image',
                  example: [
                    "\n<div>\n<code>\nlet img;\nfunction preload() {\n  img = loadImage('assets/laDefense.jpg');\n}\nfunction setup() {\n  // Top-left corner of the img is at (0, 0)\n  // Width and height are the img's original width and height\n  image(img, 0, 0);\n}\n</code>\n</div>\n<div>\n<code>\nlet img;\nfunction preload() {\n  img = loadImage('assets/laDefense.jpg');\n}\nfunction setup() {\n  background(50);\n  // Top-left corner of the img is at (10, 10)\n  // Width and height are 50 x 50\n  image(img, 10, 10, 50, 50);\n}\n</code>\n</div>\n<div>\n<code>\nfunction setup() {\n  // Here, we use a callback to display the image after loading\n  loadImage('assets/laDefense.jpg', img => {\n    image(img, 0, 0);\n  });\n}\n</code>\n</div>\n<div>\n<code>\nlet img;\nfunction preload() {\n  img = loadImage('assets/gradient.png');\n}\nfunction setup() {\n  // 1. Background image\n  // Top-left corner of the img is at (0, 0)\n  // Width and height are the img's original width and height, 100 x 100\n  image(img, 0, 0);\n  // 2. Top right image\n  // Top-left corner of destination rectangle is at (50, 0)\n  // Destination rectangle width and height are 40 x 20\n  // The next parameters are relative to the source image:\n  // - Starting at position (50, 50) on the source image, capture a 50 x 50\n  // subsection\n  // - Draw this subsection to fill the dimensions of the destination rectangle\n  image(img, 50, 0, 40, 20, 50, 50, 50, 50);\n}\n</code>\n</div>"
                  ],
                  alt:
                    'image of the underside of a white umbrella and gridded ceiling above\nimage of the underside of a white umbrella and gridded ceiling above',
                  class: 'p5',
                  module: 'Image',
                  submodule: 'Loading & Displaying',
                  overloads: [
                    {
                      line: 251,
                      params: [
                        {
                          name: 'img',
                          description: '<p>the image to display</p>\n',
                          type: 'p5.Image|p5.Element'
                        },
                        {
                          name: 'x',
                          description:
                            '<p>the x-coordinate of the top-left corner of the image</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y',
                          description:
                            '<p>the y-coordinate of the top-left corner of the image</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'width',
                          description: '<p>the width to draw the image</p>\n',
                          type: 'Number',
                          optional: true
                        },
                        {
                          name: 'height',
                          description: '<p>the height to draw the image</p>\n',
                          type: 'Number',
                          optional: true
                        }
                      ]
                    },
                    {
                      line: 339,
                      params: [
                        {
                          name: 'img',
                          description: '',
                          type: 'p5.Image|p5.Element'
                        },
                        {
                          name: 'dx',
                          description:
                            '<p>the x-coordinate of the destination\n                          rectangle in which to draw the source image</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'dy',
                          description:
                            '<p>the y-coordinate of the destination\n                          rectangle in which to draw the source image</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'dWidth',
                          description: '<p>the width of the destination rectangle</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'dHeight',
                          description: '<p>the height of the destination rectangle</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'sx',
                          description:
                            '<p>the x-coordinate of the subsection of the source\nimage to draw into the destination rectangle</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'sy',
                          description:
                            '<p>the y-coordinate of the subsection of the source\nimage to draw into the destination rectangle</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'sWidth',
                          description:
                            '<p>the width of the subsection of the\n                          source image to draw into the destination\n                          rectangle</p>\n',
                          type: 'Number',
                          optional: true
                        },
                        {
                          name: 'sHeight',
                          description:
                            '<p>the height of the subsection of the\n                           source image to draw into the destination rectangle</p>\n',
                          type: 'Number',
                          optional: true
                        }
                      ]
                    }
                  ]
                },
                {
                  file: 'src/image/loading_displaying.js',
                  line: 422,
                  description:
                    '<p>Sets the fill value for displaying images. Images can be tinted to\nspecified colors or made transparent by including an alpha value.\n<br><br>\nTo apply transparency to an image without affecting its color, use\nwhite as the tint color and specify an alpha value. For instance,\ntint(255, 128) will make an image 50% transparent (assuming the default\nalpha range of 0-255, which can be changed with <a href="#/p5/colorMode">colorMode()</a>).\n<br><br>\nThe value for the gray parameter must be less than or equal to the current\nmaximum value as specified by <a href="#/p5/colorMode">colorMode()</a>. The default maximum value is\n255.</p>\n',
                  itemtype: 'method',
                  name: 'tint',
                  example: [
                    "\n<div>\n<code>\nlet img;\nfunction preload() {\n  img = loadImage('assets/laDefense.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  tint(0, 153, 204); // Tint blue\n  image(img, 50, 0);\n}\n</code>\n</div>\n\n<div>\n<code>\nlet img;\nfunction preload() {\n  img = loadImage('assets/laDefense.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  tint(0, 153, 204, 126); // Tint blue and set transparency\n  image(img, 50, 0);\n}\n</code>\n</div>\n\n<div>\n<code>\nlet img;\nfunction preload() {\n  img = loadImage('assets/laDefense.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  tint(255, 126); // Apply transparency without changing color\n  image(img, 50, 0);\n}\n</code>\n</div>"
                  ],
                  alt:
                    '2 side by side images of umbrella and ceiling, one image with blue tint\nImages of umbrella and ceiling, one half of image with blue tint\n2 side by side images of umbrella and ceiling, one image translucent',
                  class: 'p5',
                  module: 'Image',
                  submodule: 'Loading & Displaying',
                  overloads: [
                    {
                      line: 422,
                      params: [
                        {
                          name: 'v1',
                          description:
                            '<p>red or hue value relative to\n                                the current color range</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'v2',
                          description:
                            '<p>green or saturation value\n                                relative to the current color range</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'v3',
                          description:
                            '<p>blue or brightness value\n                                relative to the current color range</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'alpha',
                          description: '',
                          type: 'Number',
                          optional: true
                        }
                      ]
                    },
                    {
                      line: 495,
                      params: [
                        {
                          name: 'value',
                          description: '<p>a color string</p>\n',
                          type: 'String'
                        }
                      ]
                    },
                    {
                      line: 500,
                      params: [
                        {
                          name: 'gray',
                          description: '<p>a gray value</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'alpha',
                          description: '',
                          type: 'Number',
                          optional: true
                        }
                      ]
                    },
                    {
                      line: 506,
                      params: [
                        {
                          name: 'values',
                          description:
                            '<p>an array containing the red,green,blue &amp;\n                                and alpha components of the color</p>\n',
                          type: 'Number[]'
                        }
                      ]
                    },
                    {
                      line: 512,
                      params: [
                        {
                          name: 'color',
                          description: '<p>the tint color</p>\n',
                          type: 'p5.Color'
                        }
                      ]
                    }
                  ]
                },
                {
                  file: 'src/image/loading_displaying.js',
                  line: 522,
                  description:
                    '<p>Removes the current fill value for displaying images and reverts to\ndisplaying images with their original hues.</p>\n',
                  itemtype: 'method',
                  name: 'noTint',
                  example: [
                    "\n<div>\n<code>\nlet img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  tint(0, 153, 204); // Tint blue\n  image(img, 0, 0);\n  noTint(); // Disable tint\n  image(img, 50, 0);\n}\n</code>\n</div>"
                  ],
                  alt: '2 side by side images of bricks, left image with blue tint',
                  class: 'p5',
                  module: 'Image',
                  submodule: 'Loading & Displaying'
                },
                {
                  file: 'src/image/loading_displaying.js',
                  line: 588,
                  description:
                    '<p>Set image mode. Modifies the location from which images are drawn by\nchanging the way in which parameters given to <a href="#/p5/image">image()</a> are interpreted.\nThe default mode is imageMode(CORNER), which interprets the second and\nthird parameters of <a href="#/p5/image">image()</a> as the upper-left corner of the image. If\ntwo additional parameters are specified, they are used to set the image&#39;s\nwidth and height.\n<br><br>\nimageMode(CORNERS) interprets the second and third parameters of <a href="#/p5/image">image()</a>\nas the location of one corner, and the fourth and fifth parameters as the\nopposite corner.\n<br><br>\nimageMode(CENTER) interprets the second and third parameters of <a href="#/p5/image">image()</a>\nas the image&#39;s center point. If two additional parameters are specified,\nthey are used to set the image&#39;s width and height.</p>\n',
                  itemtype: 'method',
                  name: 'imageMode',
                  params: [
                    {
                      name: 'mode',
                      description: '<p>either CORNER, CORNERS, or CENTER</p>\n',
                      type: 'Constant'
                    }
                  ],
                  example: [
                    "\n\n<div>\n<code>\nlet img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  imageMode(CORNER);\n  image(img, 10, 10, 50, 50);\n}\n</code>\n</div>\n\n<div>\n<code>\nlet img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  imageMode(CORNERS);\n  image(img, 10, 10, 90, 40);\n}\n</code>\n</div>\n\n<div>\n<code>\nlet img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  imageMode(CENTER);\n  image(img, 50, 50, 80, 80);\n}\n</code>\n</div>"
                  ],
                  alt:
                    'small square image of bricks\nhorizontal rectangle image of bricks\nlarge square image of bricks',
                  class: 'p5',
                  module: 'Image',
                  submodule: 'Loading & Displaying'
                },
                {
                  file: 'src/image/p5.Image.js',
                  line: 9,
                  description:
                    '<p>This module defines the <a href="#/p5.Image">p5.Image</a> class and P5 methods for\ndrawing images to the main display canvas.</p>\n',
                  class: 'p5.Image',
                  module: 'Image',
                  submodule: 'Image'
                },
                {
                  file: 'src/image/p5.Image.js',
                  line: 88,
                  description: '<p>Image width.</p>\n',
                  itemtype: 'property',
                  name: 'width',
                  type: 'Number',
                  readonly: '',
                  example: [
                    "\n<div><code>\nlet img;\nfunction preload() {\n  img = loadImage('assets/rockies.jpg');\n}\n\nfunction setup() {\n  createCanvas(100, 100);\n  image(img, 0, 0);\n  for (let i = 0; i < img.width; i++) {\n    let c = img.get(i, img.height / 2);\n    stroke(c);\n    line(i, height / 2, i, height);\n  }\n}\n</code></div>"
                  ],
                  alt:
                    'rocky mountains in top and horizontal lines in corresponding colors in bottom.',
                  class: 'p5.Image',
                  module: 'Image',
                  submodule: 'Image'
                },
                {
                  file: 'src/image/p5.Image.js',
                  line: 115,
                  description: '<p>Image height.</p>\n',
                  itemtype: 'property',
                  name: 'height',
                  type: 'Number',
                  readonly: '',
                  example: [
                    "\n<div><code>\nlet img;\nfunction preload() {\n  img = loadImage('assets/rockies.jpg');\n}\n\nfunction setup() {\n  createCanvas(100, 100);\n  image(img, 0, 0);\n  for (let i = 0; i < img.height; i++) {\n    let c = img.get(img.width / 2, i);\n    stroke(c);\n    line(0, i, width / 2, i);\n  }\n}\n</code></div>"
                  ],
                  alt:
                    'rocky mountains on right and vertical lines in corresponding colors on left.',
                  class: 'p5.Image',
                  module: 'Image',
                  submodule: 'Image'
                },
                {
                  file: 'src/image/p5.Image.js',
                  line: 152,
                  description:
                    '<p>Array containing the values for all the pixels in the display window.\nThese values are numbers. This array is the size (include an appropriate\nfactor for pixelDensity) of the display window x4,\nrepresenting the R, G, B, A values in order for each pixel, moving from\nleft to right across each row, then down each column. Retina and other\nhigh denisty displays may have more pixels (by a factor of\npixelDensity^2).\nFor example, if the image is 100x100 pixels, there will be 40,000. With\npixelDensity = 2, there will be 160,000. The first four values\n(indices 0-3) in the array will be the R, G, B, A values of the pixel at\n(0, 0). The second four values (indices 4-7) will contain the R, G, B, A\nvalues of the pixel at (1, 0). More generally, to set values for a pixel\nat (x, y):</p>\n<pre><code class="language-javascript">let d = pixelDensity();\nfor (let i = 0; i &lt; d; i++) {\n  for (let j = 0; j &lt; d; j++) {\n    // loop over\n    index = 4 * ((y * d + j) * width * d + (x * d + i));\n    pixels[index] = r;\n    pixels[index+1] = g;\n    pixels[index+2] = b;\n    pixels[index+3] = a;\n  }\n}</code></pre>\n<p><br><br>\nBefore accessing this array, the data must loaded with the <a href="#/p5.Image/loadPixels">loadPixels()</a>\nfunction. After the array data has been modified, the <a href="#/p5.Image/updatePixels">updatePixels()</a>\nfunction must be run to update the changes.</p>\n',
                  itemtype: 'property',
                  name: 'pixels',
                  type: 'Number[]',
                  example: [
                    '\n<div>\n<code>\nlet img = createImage(66, 66);\nimg.loadPixels();\nfor (let i = 0; i < img.width; i++) {\n  for (let j = 0; j < img.height; j++) {\n    img.set(i, j, color(0, 90, 102));\n  }\n}\nimg.updatePixels();\nimage(img, 17, 17);\n</code>\n</div>\n<div>\n<code>\nlet pink = color(255, 102, 204);\nlet img = createImage(66, 66);\nimg.loadPixels();\nfor (let i = 0; i < 4 * (width * height / 2); i += 4) {\n  img.pixels[i] = red(pink);\n  img.pixels[i + 1] = green(pink);\n  img.pixels[i + 2] = blue(pink);\n  img.pixels[i + 3] = alpha(pink);\n}\nimg.updatePixels();\nimage(img, 17, 17);\n</code>\n</div>'
                  ],
                  alt:
                    '66x66 turquoise rect in center of canvas\n66x66 pink rect in center of canvas',
                  class: 'p5.Image',
                  module: 'Image',
                  submodule: 'Image'
                },
                {
                  file: 'src/image/p5.Image.js',
                  line: 222,
                  description:
                    '<p>Helper function for animating GIF-based images with time</p>\n',
                  class: 'p5.Image',
                  module: 'Image',
                  submodule: 'Image'
                },
                {
                  file: 'src/image/p5.Image.js',
                  line: 249,
                  description: '<p>Helper fxn for sharing pixel methods</p>\n',
                  class: 'p5.Image',
                  module: 'Image',
                  submodule: 'Image'
                },
                {
                  file: 'src/image/p5.Image.js',
                  line: 258,
                  description:
                    '<p>Loads the pixels data for this image into the [pixels] attribute.</p>\n',
                  itemtype: 'method',
                  name: 'loadPixels',
                  example: [
                    "\n<div><code>\nlet myImage;\nlet halfImage;\n\nfunction preload() {\n  myImage = loadImage('assets/rockies.jpg');\n}\n\nfunction setup() {\n  myImage.loadPixels();\n  halfImage = 4 * myImage.width * myImage.height / 2;\n  for (let i = 0; i < halfImage; i++) {\n    myImage.pixels[i + halfImage] = myImage.pixels[i];\n  }\n  myImage.updatePixels();\n}\n\nfunction draw() {\n  image(myImage, 0, 0, width, height);\n}\n</code></div>"
                  ],
                  alt: '2 images of rocky mountains vertically stacked',
                  class: 'p5.Image',
                  module: 'Image',
                  submodule: 'Image'
                },
                {
                  file: 'src/image/p5.Image.js',
                  line: 294,
                  description:
                    '<p>Updates the backing canvas for this image with the contents of\nthe [pixels] array.\n<br><br>\nIf this image is an animated GIF then the pixels will be updated\nin the frame that is currently displayed.</p>\n',
                  itemtype: 'method',
                  name: 'updatePixels',
                  example: [
                    "\n<div><code>\nlet myImage;\nlet halfImage;\n\nfunction preload() {\n  myImage = loadImage('assets/rockies.jpg');\n}\n\nfunction setup() {\n  myImage.loadPixels();\n  halfImage = 4 * myImage.width * myImage.height / 2;\n  for (let i = 0; i < halfImage; i++) {\n    myImage.pixels[i + halfImage] = myImage.pixels[i];\n  }\n  myImage.updatePixels();\n}\n\nfunction draw() {\n  image(myImage, 0, 0, width, height);\n}\n</code></div>"
                  ],
                  alt: '2 images of rocky mountains vertically stacked',
                  class: 'p5.Image',
                  module: 'Image',
                  submodule: 'Image',
                  overloads: [
                    {
                      line: 294,
                      params: [
                        {
                          name: 'x',
                          description:
                            '<p>x-offset of the target update area for the\n                             underlying canvas</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'y',
                          description:
                            '<p>y-offset of the target update area for the\n                             underlying canvas</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'w',
                          description:
                            '<p>height of the target update area for the\n                             underlying canvas</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'h',
                          description:
                            '<p>height of the target update area for the\n                             underlying canvas</p>\n',
                          type: 'Integer'
                        }
                      ]
                    },
                    {
                      line: 337,
                      params: []
                    }
                  ]
                },
                {
                  file: 'src/image/p5.Image.js',
                  line: 345,
                  description:
                    '<p>Get a region of pixels from an image.</p>\n<p>If no params are passed, the whole image is returned.\nIf x and y are the only params passed a single pixel is extracted.\nIf all params are passed a rectangle region is extracted and a <a href="#/p5.Image">p5.Image</a>\nis returned.</p>\n',
                  itemtype: 'method',
                  name: 'get',
                  return: {
                    description: 'the rectangle <a href="#/p5.Image">p5.Image</a>',
                    type: 'p5.Image'
                  },
                  example: [
                    "\n<div><code>\nlet myImage;\nlet c;\n\nfunction preload() {\n  myImage = loadImage('assets/rockies.jpg');\n}\n\nfunction setup() {\n  background(myImage);\n  noStroke();\n  c = myImage.get(60, 90);\n  fill(c);\n  rect(25, 25, 50, 50);\n}\n\n//get() returns color here\n</code></div>"
                  ],
                  alt: 'image of rocky mountains with 50x50 green rect in front',
                  class: 'p5.Image',
                  module: 'Image',
                  submodule: 'Image',
                  overloads: [
                    {
                      line: 345,
                      params: [
                        {
                          name: 'x',
                          description: '<p>x-coordinate of the pixel</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y',
                          description: '<p>y-coordinate of the pixel</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'w',
                          description: '<p>width</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'h',
                          description: '<p>height</p>\n',
                          type: 'Number'
                        }
                      ],
                      return: {
                        description: 'the rectangle <a href="#/p5.Image">p5.Image</a>',
                        type: 'p5.Image'
                      }
                    },
                    {
                      line: 383,
                      params: [],
                      return: {
                        description: 'the whole <a href="#/p5.Image">p5.Image</a>',
                        type: 'p5.Image'
                      }
                    },
                    {
                      line: 387,
                      params: [
                        {
                          name: 'x',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y',
                          description: '',
                          type: 'Number'
                        }
                      ],
                      return: {
                        description: 'color of pixel at x,y in array format [R, G, B, A]',
                        type: 'Number[]'
                      }
                    }
                  ]
                },
                {
                  file: 'src/image/p5.Image.js',
                  line: 400,
                  description:
                    '<p>Set the color of a single pixel or write an image into\nthis <a href="#/p5.Image">p5.Image</a>.</p>\n<p>Note that for a large number of pixels this will\nbe slower than directly manipulating the pixels array\nand then calling <a href="#/p5.Image/updatePixels">updatePixels()</a>.</p>\n',
                  itemtype: 'method',
                  name: 'set',
                  params: [
                    {
                      name: 'x',
                      description: '<p>x-coordinate of the pixel</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'y',
                      description: '<p>y-coordinate of the pixel</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'a',
                      description:
                        '<p>grayscale value | pixel array |\n                               a <a href="#/p5.Color">p5.Color</a> | image to copy</p>\n',
                      type: 'Number|Number[]|Object'
                    }
                  ],
                  example: [
                    '\n<div>\n<code>\nlet img = createImage(66, 66);\nimg.loadPixels();\nfor (let i = 0; i < img.width; i++) {\n  for (let j = 0; j < img.height; j++) {\n    img.set(i, j, color(0, 90, 102, (i % img.width) * 2));\n  }\n}\nimg.updatePixels();\nimage(img, 17, 17);\nimage(img, 34, 34);\n</code>\n</div>'
                  ],
                  alt:
                    '2 gradated dark turquoise rects fade left. 1 center 1 bottom right of canvas',
                  class: 'p5.Image',
                  module: 'Image',
                  submodule: 'Image'
                },
                {
                  file: 'src/image/p5.Image.js',
                  line: 438,
                  description:
                    '<p>Resize the image to a new width and height. To make the image scale\nproportionally, use 0 as the value for the wide or high parameter.\nFor instance, to make the width of an image 150 pixels, and change\nthe height using the same proportion, use resize(150, 0).</p>\n',
                  itemtype: 'method',
                  name: 'resize',
                  params: [
                    {
                      name: 'width',
                      description: '<p>the resized image width</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'height',
                      description: '<p>the resized image height</p>\n',
                      type: 'Number'
                    }
                  ],
                  example: [
                    "\n<div><code>\nlet img;\n\nfunction preload() {\n  img = loadImage('assets/rockies.jpg');\n}\n\nfunction draw() {\n  image(img, 0, 0);\n}\n\nfunction mousePressed() {\n  img.resize(50, 100);\n}\n</code></div>"
                  ],
                  alt: 'image of rocky mountains. zoomed in',
                  class: 'p5.Image',
                  module: 'Image',
                  submodule: 'Image'
                },
                {
                  file: 'src/image/p5.Image.js',
                  line: 550,
                  description:
                    '<p>Copies a region of pixels from one image to another. If no\nsrcImage is specified this is used as the source. If the source\nand destination regions aren&#39;t the same size, it will\nautomatically resize source pixels to fit the specified\ntarget region.</p>\n',
                  itemtype: 'method',
                  name: 'copy',
                  example: [
                    "\n<div><code>\nlet photo;\nlet bricks;\nlet x;\nlet y;\n\nfunction preload() {\n  photo = loadImage('assets/rockies.jpg');\n  bricks = loadImage('assets/bricks.jpg');\n}\n\nfunction setup() {\n  x = bricks.width / 2;\n  y = bricks.height / 2;\n  photo.copy(bricks, 0, 0, x, y, 0, 0, x, y);\n  image(photo, 0, 0);\n}\n</code></div>"
                  ],
                  alt:
                    'image of rocky mountains and smaller image on top of bricks at top left',
                  class: 'p5.Image',
                  module: 'Image',
                  submodule: 'Image',
                  overloads: [
                    {
                      line: 550,
                      params: [
                        {
                          name: 'srcImage',
                          description: '<p>source image</p>\n',
                          type: 'p5.Image|p5.Element'
                        },
                        {
                          name: 'sx',
                          description:
                            '<p>X coordinate of the source&#39;s upper left corner</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'sy',
                          description:
                            '<p>Y coordinate of the source&#39;s upper left corner</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'sw',
                          description: '<p>source image width</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'sh',
                          description: '<p>source image height</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'dx',
                          description:
                            '<p>X coordinate of the destination&#39;s upper left corner</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'dy',
                          description:
                            '<p>Y coordinate of the destination&#39;s upper left corner</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'dw',
                          description: '<p>destination image width</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'dh',
                          description: '<p>destination image height</p>\n',
                          type: 'Integer'
                        }
                      ]
                    },
                    {
                      line: 591,
                      params: [
                        {
                          name: 'sx',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'sy',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'sw',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'sh',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'dx',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'dy',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'dw',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'dh',
                          description: '',
                          type: 'Integer'
                        }
                      ]
                    }
                  ]
                },
                {
                  file: 'src/image/p5.Image.js',
                  line: 606,
                  description:
                    '<p>Masks part of an image from displaying by loading another\nimage and using it&#39;s alpha channel as an alpha channel for\nthis image.</p>\n',
                  itemtype: 'method',
                  name: 'mask',
                  params: [
                    {
                      name: 'srcImage',
                      description: '<p>source image</p>\n',
                      type: 'p5.Image'
                    }
                  ],
                  example: [
                    "\n<div><code>\nlet photo, maskImage;\nfunction preload() {\n  photo = loadImage('assets/rockies.jpg');\n  maskImage = loadImage('assets/mask2.png');\n}\n\nfunction setup() {\n  createCanvas(100, 100);\n  photo.mask(maskImage);\n  image(photo, 0, 0);\n}\n</code></div>"
                  ],
                  alt:
                    'image of rocky mountains with white at right\n\n\nhttp://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/',
                  class: 'p5.Image',
                  module: 'Image',
                  submodule: 'Image'
                },
                {
                  file: 'src/image/p5.Image.js',
                  line: 669,
                  description:
                    '<p>Applies an image filter to a <a href="#/p5.Image">p5.Image</a></p>\n',
                  itemtype: 'method',
                  name: 'filter',
                  params: [
                    {
                      name: 'filterType',
                      description:
                        '<p>either THRESHOLD, GRAY, OPAQUE, INVERT,\n                               POSTERIZE, BLUR, ERODE, DILATE or BLUR.\n                               See Filters.js for docs on\n                               each available filter</p>\n',
                      type: 'Constant'
                    },
                    {
                      name: 'filterParam',
                      description:
                        '<p>an optional parameter unique\n                               to each filter, see above</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  example: [
                    "\n<div><code>\nlet photo1;\nlet photo2;\n\nfunction preload() {\n  photo1 = loadImage('assets/rockies.jpg');\n  photo2 = loadImage('assets/rockies.jpg');\n}\n\nfunction setup() {\n  photo2.filter(GRAY);\n  image(photo1, 0, 0);\n  image(photo2, width / 2, 0);\n}\n</code></div>"
                  ],
                  alt:
                    '2 images of rocky mountains left one in color, right in black and white',
                  class: 'p5.Image',
                  module: 'Image',
                  submodule: 'Image'
                },
                {
                  file: 'src/image/p5.Image.js',
                  line: 705,
                  description:
                    '<p>Copies a region of pixels from one image to another, using a specified\nblend mode to do the operation.</p>\n',
                  itemtype: 'method',
                  name: 'blend',
                  example: [
                    "\n<div><code>\nlet mountains;\nlet bricks;\n\nfunction preload() {\n  mountains = loadImage('assets/rockies.jpg');\n  bricks = loadImage('assets/bricks_third.jpg');\n}\n\nfunction setup() {\n  mountains.blend(bricks, 0, 0, 33, 100, 67, 0, 33, 100, ADD);\n  image(mountains, 0, 0);\n  image(bricks, 0, 0);\n}\n</code></div>\n<div><code>\nlet mountains;\nlet bricks;\n\nfunction preload() {\n  mountains = loadImage('assets/rockies.jpg');\n  bricks = loadImage('assets/bricks_third.jpg');\n}\n\nfunction setup() {\n  mountains.blend(bricks, 0, 0, 33, 100, 67, 0, 33, 100, DARKEST);\n  image(mountains, 0, 0);\n  image(bricks, 0, 0);\n}\n</code></div>\n<div><code>\nlet mountains;\nlet bricks;\n\nfunction preload() {\n  mountains = loadImage('assets/rockies.jpg');\n  bricks = loadImage('assets/bricks_third.jpg');\n}\n\nfunction setup() {\n  mountains.blend(bricks, 0, 0, 33, 100, 67, 0, 33, 100, LIGHTEST);\n  image(mountains, 0, 0);\n  image(bricks, 0, 0);\n}\n</code></div>"
                  ],
                  alt:
                    'image of rocky mountains. Brick images on left and right. Right overexposed\nimage of rockies. Brickwall images on left and right. Right mortar transparent\nimage of rockies. Brickwall images on left and right. Right translucent',
                  class: 'p5.Image',
                  module: 'Image',
                  submodule: 'Image',
                  overloads: [
                    {
                      line: 705,
                      params: [
                        {
                          name: 'srcImage',
                          description: '<p>source image</p>\n',
                          type: 'p5.Image'
                        },
                        {
                          name: 'sx',
                          description:
                            '<p>X coordinate of the source&#39;s upper left corner</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'sy',
                          description:
                            '<p>Y coordinate of the source&#39;s upper left corner</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'sw',
                          description: '<p>source image width</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'sh',
                          description: '<p>source image height</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'dx',
                          description:
                            '<p>X coordinate of the destination&#39;s upper left corner</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'dy',
                          description:
                            '<p>Y coordinate of the destination&#39;s upper left corner</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'dw',
                          description: '<p>destination image width</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'dh',
                          description: '<p>destination image height</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'blendMode',
                          description:
                            '<p>the blend mode. either\n    BLEND, DARKEST, LIGHTEST, DIFFERENCE,\n    MULTIPLY, EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT,\n    SOFT_LIGHT, DODGE, BURN, ADD or NORMAL.</p>\n<p>Available blend modes are: normal | multiply | screen | overlay |\n           darken | lighten | color-dodge | color-burn | hard-light |\n           soft-light | difference | exclusion | hue | saturation |\n           color | luminosity</p>\n<p><a href="http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/">http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/</a></p>\n',
                          type: 'Constant'
                        }
                      ]
                    },
                    {
                      line: 784,
                      params: [
                        {
                          name: 'sx',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'sy',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'sw',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'sh',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'dx',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'dy',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'dw',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'dh',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'blendMode',
                          description: '',
                          type: 'Constant'
                        }
                      ]
                    }
                  ]
                },
                {
                  file: 'src/image/p5.Image.js',
                  line: 827,
                  description:
                    '<p>Saves the image to a file and force the browser to download it.\nAccepts two strings for filename and file extension\nSupports png (default), jpg, and gif\n<br><br>\nNote that the file will only be downloaded as an animated GIF\nif the p5.Image was loaded from a GIF file.</p>\n',
                  itemtype: 'method',
                  name: 'save',
                  params: [
                    {
                      name: 'filename',
                      description: '<p>give your file a name</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'extension',
                      description: '<p>&#39;png&#39; or &#39;jpg&#39;</p>\n',
                      type: 'String'
                    }
                  ],
                  example: [
                    "\n<div><code>\nlet photo;\n\nfunction preload() {\n  photo = loadImage('assets/rockies.jpg');\n}\n\nfunction draw() {\n  image(photo, 0, 0);\n}\n\nfunction keyTyped() {\n  if (key === 's') {\n    photo.save('photo', 'png');\n  }\n}\n</code></div>"
                  ],
                  alt: 'image of rocky mountains.',
                  class: 'p5.Image',
                  module: 'Image',
                  submodule: 'Image'
                },
                {
                  file: 'src/image/p5.Image.js',
                  line: 869,
                  description: '<p>Starts an animated GIF over at the beginning state.</p>\n',
                  itemtype: 'method',
                  name: 'reset',
                  example: [
                    "\n<div><code>\nlet gif;\n\nfunction preload() {\n  gif = loadImage('assets/arnott-wallace-wink-loop-once.gif');\n}\n\nfunction draw() {\n  background(255);\n  // The GIF file that we loaded only loops once\n  // so it freezes on the last frame after playing through\n  image(gif, 0, 0);\n}\n\nfunction mousePressed() {\n  // Click to reset the GIF and begin playback from start\n  gif.reset();\n}\n</code></div>"
                  ],
                  alt:
                    'Animated image of a cartoon face that winks once and then freezes\nWhen you click it animates again, winks once and freezes',
                  class: 'p5.Image',
                  module: 'Image',
                  submodule: 'Image'
                },
                {
                  file: 'src/image/p5.Image.js',
                  line: 910,
                  description:
                    '<p>Gets the index for the frame that is currently visible in an animated GIF.</p>\n',
                  itemtype: 'method',
                  name: 'getCurrentFrame',
                  return: {
                    description:
                      'The index for the currently displaying frame in animated GIF',
                    type: 'Number'
                  },
                  example: [
                    "\n<div><code>\nlet gif;\n\nfunction preload() {\n  gif = loadImage('assets/arnott-wallace-eye-loop-forever.gif');\n}\n\nfunction draw() {\n  let frame = gif.getCurrentFrame();\n  image(gif, 0, 0);\n  text(frame, 10, 90);\n}\n</code></div>"
                  ],
                  alt:
                    'Animated image of a cartoon eye looking around and then\nlooking outwards, in the lower-left hand corner a number counts\nup quickly to 124 and then starts back over at 0',
                  class: 'p5.Image',
                  module: 'Image',
                  submodule: 'Image'
                },
                {
                  file: 'src/image/p5.Image.js',
                  line: 942,
                  description:
                    '<p>Sets the index of the frame that is currently visible in an animated GIF</p>\n',
                  itemtype: 'method',
                  name: 'setFrame',
                  params: [
                    {
                      name: 'index',
                      description:
                        '<p>the index for the frame that should be displayed</p>\n',
                      type: 'Number'
                    }
                  ],
                  example: [
                    "\n<div><code>\nlet gif;\n\nfunction preload() {\n  gif = loadImage('assets/arnott-wallace-eye-loop-forever.gif');\n}\n\n// Move your mouse up and down over canvas to see the GIF\n// frames animate\nfunction draw() {\n  gif.pause();\n  image(gif, 0, 0);\n  // Get the highest frame number which is the number of frames - 1\n  let maxFrame = gif.numFrames() - 1;\n  // Set the current frame that is mapped to be relative to mouse position\n  let frameNumber = floor(map(mouseY, 0, height, 0, maxFrame, true));\n  gif.setFrame(frameNumber);\n}\n</code></div>"
                  ],
                  alt:
                    'A still image of a cartoon eye that looks around when you move your mouse\nup and down over the canvas',
                  class: 'p5.Image',
                  module: 'Image',
                  submodule: 'Image'
                },
                {
                  file: 'src/image/p5.Image.js',
                  line: 987,
                  description: '<p>Returns the number of frames in an animated GIF</p>\n',
                  itemtype: 'method',
                  name: 'numFrames',
                  return: {
                    description: '',
                    type: 'Number'
                  },
                  example: [
                    "     The number of frames in the animated GIF\n<div><code>\nlet gif;\n\nfunction preload() {\n  gif = loadImage('assets/arnott-wallace-eye-loop-forever.gif');\n}\n\n// Move your mouse up and down over canvas to see the GIF\n// frames animate\nfunction draw() {\n  gif.pause();\n  image(gif, 0, 0);\n  // Get the highest frame number which is the number of frames - 1\n  let maxFrame = gif.numFrames() - 1;\n  // Set the current frame that is mapped to be relative to mouse position\n  let frameNumber = floor(map(mouseY, 0, height, 0, maxFrame, true));\n  gif.setFrame(frameNumber);\n}\n</code></div>"
                  ],
                  alt:
                    'A still image of a cartoon eye that looks around when you move your mouse\nup and down over the canvas',
                  class: 'p5.Image',
                  module: 'Image',
                  submodule: 'Image'
                },
                {
                  file: 'src/image/p5.Image.js',
                  line: 1023,
                  description:
                    '<p>Plays an animated GIF that was paused with\n<a href="#/p5.Image/pause">pause()</a></p>\n',
                  itemtype: 'method',
                  name: 'play',
                  example: [
                    "\n<div><code>\nlet gif;\n\nfunction preload() {\n  gif = loadImage('assets/nancy-liang-wind-loop-forever.gif');\n}\n\nfunction draw() {\n  background(255);\n  image(gif, 0, 0);\n}\n\nfunction mousePressed() {\n  gif.pause();\n}\n\nfunction mouseReleased() {\n  gif.play();\n}\n</code></div>"
                  ],
                  alt:
                    'An animated GIF of a drawing of small child with\nhair blowing in the wind, when you click the image\nfreezes when you release it animates again',
                  class: 'p5.Image',
                  module: 'Image',
                  submodule: 'Image'
                },
                {
                  file: 'src/image/p5.Image.js',
                  line: 1061,
                  description: '<p>Pauses an animated GIF.</p>\n',
                  itemtype: 'method',
                  name: 'pause',
                  example: [
                    "\n<div><code>\nlet gif;\n\nfunction preload() {\n  gif = loadImage('assets/nancy-liang-wind-loop-forever.gif');\n}\n\nfunction draw() {\n  background(255);\n  image(gif, 0, 0);\n}\n\nfunction mousePressed() {\n  gif.pause();\n}\n\nfunction mouseReleased() {\n  gif.play();\n}\n</code></div>"
                  ],
                  alt:
                    'An animated GIF of a drawing of small child with\nhair blowing in the wind, when you click the image\nfreezes when you release it animates again',
                  class: 'p5.Image',
                  module: 'Image',
                  submodule: 'Image'
                },
                {
                  file: 'src/image/p5.Image.js',
                  line: 1098,
                  description: '<p>Changes the delay between frames in an animated GIF</p>\n',
                  itemtype: 'method',
                  name: 'delay',
                  params: [
                    {
                      name: 'd',
                      description:
                        '<p>the amount in milliseconds to delay between switching frames</p>\n',
                      type: 'Number'
                    }
                  ],
                  example: [
                    "\n<div><code>\nlet gifFast, gifSlow;\n\nfunction preload() {\n  gifFast = loadImage('assets/arnott-wallace-eye-loop-forever.gif');\n  gifSlow = loadImage('assets/arnott-wallace-eye-loop-forever.gif');\n}\n\nfunction setup() {\n  gifFast.resize(width / 2, height / 2);\n  gifSlow.resize(width / 2, height / 2);\n\n  //Change the delay here\n  gifFast.delay(10);\n  gifSlow.delay(100);\n}\n\nfunction draw() {\n  background(255);\n  image(gifFast, 0, 0);\n  image(gifSlow, width / 2, 0);\n}\n</code></div>"
                  ],
                  alt:
                    'Two animated gifs of cartoon eyes looking around\nThe gif on the left animates quickly, on the right\nthe animation is much slower',
                  class: 'p5.Image',
                  module: 'Image',
                  submodule: 'Image'
                },
                {
                  file: 'src/image/pixels.js',
                  line: 12,
                  description:
                    '<p><a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference\n/Global_Objects/Uint8ClampedArray\' target=\'_blank\'>Uint8ClampedArray</a>\ncontaining the values for all the pixels in the display window.\nThese values are numbers. This array is the size (include an appropriate\nfactor for <a href="#/p5/pixelDensity">pixelDensity</a>) of the display window x4,\nrepresenting the R, G, B, A values in order for each pixel, moving from\nleft to right across each row, then down each column. Retina and other\nhigh density displays will have more pixels[] (by a factor of\npixelDensity^2).\nFor example, if the image is 100x100 pixels, there will be 40,000. On a\nretina display, there will be 160,000.\n<br><br>\nThe first four values (indices 0-3) in the array will be the R, G, B, A\nvalues of the pixel at (0, 0). The second four values (indices 4-7) will\ncontain the R, G, B, A values of the pixel at (1, 0). More generally, to\nset values for a pixel at (x, y):</p>\n<pre><code class="language-javascript">let d = pixelDensity();\nfor (let i = 0; i &lt; d; i++) {\n  for (let j = 0; j &lt; d; j++) {\n    // loop over\n    index = 4 * ((y * d + j) * width * d + (x * d + i));\n    pixels[index] = r;\n    pixels[index+1] = g;\n    pixels[index+2] = b;\n    pixels[index+3] = a;\n  }\n}</code></pre>\n<p>While the above method is complex, it is flexible enough to work with\nany pixelDensity. Note that <a href="#/p5/set">set()</a> will automatically take care of\nsetting all the appropriate values in <a href="#/p5/pixels">pixels[]</a> for a given (x, y) at\nany pixelDensity, but the performance may not be as fast when lots of\nmodifications are made to the pixel array.\n<br><br>\nBefore accessing this array, the data must loaded with the <a href="#/p5/loadPixels">loadPixels()</a>\nfunction. After the array data has been modified, the <a href="#/p5/updatePixels">updatePixels()</a>\nfunction must be run to update the changes.\n<br><br>\nNote that this is not a standard javascript array.  This means that\nstandard javascript functions such as <a href="#/p5/slice">slice()</a> or\n<a href="#/p5/arrayCopy">arrayCopy()</a> do not\nwork.</p>',
                  itemtype: 'property',
                  name: 'pixels',
                  type: 'Number[]',
                  example: [
                    '\n<div>\n<code>\nlet pink = color(255, 102, 204);\nloadPixels();\nlet d = pixelDensity();\nlet halfImage = 4 * (width * d) * (height / 2 * d);\nfor (let i = 0; i < halfImage; i += 4) {\n  pixels[i] = red(pink);\n  pixels[i + 1] = green(pink);\n  pixels[i + 2] = blue(pink);\n  pixels[i + 3] = alpha(pink);\n}\nupdatePixels();\n</code>\n</div>'
                  ],
                  alt: 'top half of canvas pink, bottom grey',
                  class: 'p5',
                  module: 'Image',
                  submodule: 'Pixels'
                },
                {
                  file: 'src/image/pixels.js',
                  line: 81,
                  description:
                    '<p>Copies a region of pixels from one image to another, using a specified\nblend mode to do the operation.</p>\n',
                  itemtype: 'method',
                  name: 'blend',
                  example: [
                    "\n<div><code>\nlet img0;\nlet img1;\n\nfunction preload() {\n  img0 = loadImage('assets/rockies.jpg');\n  img1 = loadImage('assets/bricks_third.jpg');\n}\n\nfunction setup() {\n  background(img0);\n  image(img1, 0, 0);\n  blend(img1, 0, 0, 33, 100, 67, 0, 33, 100, LIGHTEST);\n}\n</code></div>\n<div><code>\nlet img0;\nlet img1;\n\nfunction preload() {\n  img0 = loadImage('assets/rockies.jpg');\n  img1 = loadImage('assets/bricks_third.jpg');\n}\n\nfunction setup() {\n  background(img0);\n  image(img1, 0, 0);\n  blend(img1, 0, 0, 33, 100, 67, 0, 33, 100, DARKEST);\n}\n</code></div>\n<div><code>\nlet img0;\nlet img1;\n\nfunction preload() {\n  img0 = loadImage('assets/rockies.jpg');\n  img1 = loadImage('assets/bricks_third.jpg');\n}\n\nfunction setup() {\n  background(img0);\n  image(img1, 0, 0);\n  blend(img1, 0, 0, 33, 100, 67, 0, 33, 100, ADD);\n}\n</code></div>"
                  ],
                  alt:
                    'image of rocky mountains. Brick images on left and right. Right overexposed\nimage of rockies. Brickwall images on left and right. Right mortar transparent\nimage of rockies. Brickwall images on left and right. Right translucent',
                  class: 'p5',
                  module: 'Image',
                  submodule: 'Pixels',
                  overloads: [
                    {
                      line: 81,
                      params: [
                        {
                          name: 'srcImage',
                          description: '<p>source image</p>\n',
                          type: 'p5.Image'
                        },
                        {
                          name: 'sx',
                          description:
                            '<p>X coordinate of the source&#39;s upper left corner</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'sy',
                          description:
                            '<p>Y coordinate of the source&#39;s upper left corner</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'sw',
                          description: '<p>source image width</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'sh',
                          description: '<p>source image height</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'dx',
                          description:
                            '<p>X coordinate of the destination&#39;s upper left corner</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'dy',
                          description:
                            '<p>Y coordinate of the destination&#39;s upper left corner</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'dw',
                          description: '<p>destination image width</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'dh',
                          description: '<p>destination image height</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'blendMode',
                          description:
                            '<p>the blend mode. either\n    BLEND, DARKEST, LIGHTEST, DIFFERENCE,\n    MULTIPLY, EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT,\n    SOFT_LIGHT, DODGE, BURN, ADD or NORMAL.</p>\n',
                          type: 'Constant'
                        }
                      ]
                    },
                    {
                      line: 154,
                      params: [
                        {
                          name: 'sx',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'sy',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'sw',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'sh',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'dx',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'dy',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'dw',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'dh',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'blendMode',
                          description: '',
                          type: 'Constant'
                        }
                      ]
                    }
                  ]
                },
                {
                  file: 'src/image/pixels.js',
                  line: 175,
                  description:
                    '<p>Copies a region of the canvas to another region of the canvas\nand copies a region of pixels from an image used as the srcImg parameter\ninto the canvas srcImage is specified this is used as the source. If\nthe source and destination regions aren&#39;t the same size, it will\nautomatically resize source pixels to fit the specified\ntarget region.</p>\n',
                  itemtype: 'method',
                  name: 'copy',
                  example: [
                    "\n<div><code>\nlet img;\n\nfunction preload() {\n  img = loadImage('assets/rockies.jpg');\n}\n\nfunction setup() {\n  background(img);\n  copy(img, 7, 22, 10, 10, 35, 25, 50, 50);\n  stroke(255);\n  noFill();\n  // Rectangle shows area being copied\n  rect(7, 22, 10, 10);\n}\n</code></div>"
                  ],
                  alt:
                    'image of rocky mountains. Brick images on left and right. Right overexposed\nimage of rockies. Brickwall images on left and right. Right mortar transparent\nimage of rockies. Brickwall images on left and right. Right translucent',
                  class: 'p5',
                  module: 'Image',
                  submodule: 'Pixels',
                  overloads: [
                    {
                      line: 175,
                      params: [
                        {
                          name: 'srcImage',
                          description: '<p>source image</p>\n',
                          type: 'p5.Image|p5.Element'
                        },
                        {
                          name: 'sx',
                          description:
                            '<p>X coordinate of the source&#39;s upper left corner</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'sy',
                          description:
                            '<p>Y coordinate of the source&#39;s upper left corner</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'sw',
                          description: '<p>source image width</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'sh',
                          description: '<p>source image height</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'dx',
                          description:
                            '<p>X coordinate of the destination&#39;s upper left corner</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'dy',
                          description:
                            '<p>Y coordinate of the destination&#39;s upper left corner</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'dw',
                          description: '<p>destination image width</p>\n',
                          type: 'Integer'
                        },
                        {
                          name: 'dh',
                          description: '<p>destination image height</p>\n',
                          type: 'Integer'
                        }
                      ]
                    },
                    {
                      line: 218,
                      params: [
                        {
                          name: 'sx',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'sy',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'sw',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'sh',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'dx',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'dy',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'dw',
                          description: '',
                          type: 'Integer'
                        },
                        {
                          name: 'dh',
                          description: '',
                          type: 'Integer'
                        }
                      ]
                    }
                  ]
                },
                {
                  file: 'src/image/pixels.js',
                  line: 310,
                  description:
                    '<p>Applies a filter to the canvas.\n<br><br></p>\n<p>The presets options are:\n<br><br></p>\n<p>THRESHOLD\nConverts the image to black and white pixels depending if they are above or\nbelow the threshold defined by the level parameter. The parameter must be\nbetween 0.0 (black) and 1.0 (white). If no level is specified, 0.5 is used.\n<br><br></p>\n<p>GRAY\nConverts any colors in the image to grayscale equivalents. No parameter\nis used.\n<br><br></p>\n<p>OPAQUE\nSets the alpha channel to entirely opaque. No parameter is used.\n<br><br></p>\n<p>INVERT\nSets each pixel to its inverse value. No parameter is used.\n<br><br></p>\n<p>POSTERIZE\nLimits each channel of the image to the number of colors specified as the\nparameter. The parameter can be set to values between 2 and 255, but\nresults are most noticeable in the lower ranges.\n<br><br></p>\n<p>BLUR\nExecutes a Gaussian blur with the level parameter specifying the extent\nof the blurring. If no parameter is used, the blur is equivalent to\nGaussian blur of radius 1. Larger values increase the blur.\n<br><br></p>\n<p>ERODE\nReduces the light areas. No parameter is used.\n<br><br></p>\n<p>DILATE\nIncreases the light areas. No parameter is used.</p>\n',
                  itemtype: 'method',
                  name: 'filter',
                  params: [
                    {
                      name: 'filterType',
                      description:
                        '<p>either THRESHOLD, GRAY, OPAQUE, INVERT,\n                               POSTERIZE, BLUR, ERODE, DILATE or BLUR.\n                               See Filters.js for docs on\n                               each available filter</p>\n',
                      type: 'Constant'
                    },
                    {
                      name: 'filterParam',
                      description:
                        '<p>an optional parameter unique\n                               to each filter, see above</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  example: [
                    "\n<div>\n<code>\nlet img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  filter(THRESHOLD);\n}\n</code>\n</div>\n\n<div>\n<code>\nlet img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  filter(GRAY);\n}\n</code>\n</div>\n\n<div>\n<code>\nlet img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  filter(OPAQUE);\n}\n</code>\n</div>\n\n<div>\n<code>\nlet img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  filter(INVERT);\n}\n</code>\n</div>\n\n<div>\n<code>\nlet img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  filter(POSTERIZE, 3);\n}\n</code>\n</div>\n\n<div>\n<code>\nlet img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  filter(DILATE);\n}\n</code>\n</div>\n\n<div>\n<code>\nlet img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  filter(BLUR, 3);\n}\n</code>\n</div>\n\n<div>\n<code>\nlet img;\nfunction preload() {\n  img = loadImage('assets/bricks.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  filter(ERODE);\n}\n</code>\n</div>"
                  ],
                  alt:
                    'black and white image of a brick wall.\ngreyscale image of a brickwall\nimage of a brickwall\njade colored image of a brickwall\nred and pink image of a brickwall\nimage of a brickwall\nblurry image of a brickwall\nimage of a brickwall\nimage of a brickwall with less detail',
                  class: 'p5',
                  module: 'Image',
                  submodule: 'Pixels'
                },
                {
                  file: 'src/image/pixels.js',
                  line: 489,
                  description:
                    '<p>Get a region of pixels, or a single pixel, from the canvas.</p>\n<p>Returns an array of [R,G,B,A] values for any pixel or grabs a section of\nan image. If no parameters are specified, the entire image is returned.\nUse the x and y parameters to get the value of one pixel. Get a section of\nthe display window by specifying additional w and h parameters. When\ngetting an image, the x and y parameters define the coordinates for the\nupper-left corner of the image, regardless of the current <a href="#/p5/imageMode">imageMode()</a>.\n<br><br>\nGetting the color of a single pixel with get(x, y) is easy, but not as fast\nas grabbing the data directly from <a href="#/p5/pixels">pixels[]</a>. The equivalent statement to\nget(x, y) using <a href="#/p5/pixels">pixels[]</a> with pixel density d is</p>\n<pre><code class="language-javascript">let x, y, d; // set these to the coordinates\nlet off = (y * width + x) * d * 4;\nlet components = [\n  pixels[off],\n  pixels[off + 1],\n  pixels[off + 2],\n  pixels[off + 3]\n];\nprint(components);</code></pre>\n<p><br><br></p>\n<p>See the reference for <a href="#/p5/pixels">pixels[]</a> for more information.</p>\n<p>If you want to extract an array of colors or a subimage from an p5.Image object,\ntake a look at <a href="#/p5.Image/get">p5.Image.get()</a></p>\n',
                  itemtype: 'method',
                  name: 'get',
                  return: {
                    description: 'the rectangle <a href="#/p5.Image">p5.Image</a>',
                    type: 'p5.Image'
                  },
                  example: [
                    "\n<div>\n<code>\nlet img;\nfunction preload() {\n  img = loadImage('assets/rockies.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  let c = get();\n  image(c, width / 2, 0);\n}\n</code>\n</div>\n\n<div>\n<code>\nlet img;\nfunction preload() {\n  img = loadImage('assets/rockies.jpg');\n}\nfunction setup() {\n  image(img, 0, 0);\n  let c = get(50, 90);\n  fill(c);\n  noStroke();\n  rect(25, 25, 50, 50);\n}\n</code>\n</div>"
                  ],
                  alt:
                    '2 images of the rocky mountains, side-by-side\nImage of the rocky mountains with 50x50 green rect in center of canvas',
                  class: 'p5',
                  module: 'Image',
                  submodule: 'Pixels',
                  overloads: [
                    {
                      line: 489,
                      params: [
                        {
                          name: 'x',
                          description: '<p>x-coordinate of the pixel</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y',
                          description: '<p>y-coordinate of the pixel</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'w',
                          description: '<p>width</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'h',
                          description: '<p>height</p>\n',
                          type: 'Number'
                        }
                      ],
                      return: {
                        description: 'the rectangle <a href="#/p5.Image">p5.Image</a>',
                        type: 'p5.Image'
                      }
                    },
                    {
                      line: 562,
                      params: [],
                      return: {
                        description: 'the whole <a href="#/p5.Image">p5.Image</a>',
                        type: 'p5.Image'
                      }
                    },
                    {
                      line: 566,
                      params: [
                        {
                          name: 'x',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y',
                          description: '',
                          type: 'Number'
                        }
                      ],
                      return: {
                        description: 'color of pixel at x,y in array format [R, G, B, A]',
                        type: 'Number[]'
                      }
                    }
                  ]
                },
                {
                  file: 'src/image/pixels.js',
                  line: 577,
                  description:
                    '<p>Loads the pixel data for the display window into the <a href="#/p5/pixels">pixels[]</a> array. This\nfunction must always be called before reading from or writing to <a href="#/p5/pixels">pixels[]</a>.\nNote that only changes made with <a href="#/p5/set">set()</a> or direct manipulation of <a href="#/p5/pixels">pixels[]</a>\nwill occur.</p>\n',
                  itemtype: 'method',
                  name: 'loadPixels',
                  example: [
                    "\n<div>\n<code>\nlet img;\nfunction preload() {\n  img = loadImage('assets/rockies.jpg');\n}\n\nfunction setup() {\n  image(img, 0, 0, width, height);\n  let d = pixelDensity();\n  let halfImage = 4 * (width * d) * (height * d / 2);\n  loadPixels();\n  for (let i = 0; i < halfImage; i++) {\n    pixels[i + halfImage] = pixels[i];\n  }\n  updatePixels();\n}\n</code>\n</div>"
                  ],
                  alt:
                    'two images of the rocky mountains. one on top, one on bottom of canvas.',
                  class: 'p5',
                  module: 'Image',
                  submodule: 'Pixels'
                },
                {
                  file: 'src/image/pixels.js',
                  line: 614,
                  description:
                    '<p>Changes the color of any pixel, or writes an image directly to the\ndisplay window.</p>\n<p>The x and y parameters specify the pixel to change and the c parameter\nspecifies the color value. This can be a <a href="#/p5.Color">p5.Color</a> object, or [R, G, B, A]\npixel array. It can also be a single grayscale value.\nWhen setting an image, the x and y parameters define the coordinates for\nthe upper-left corner of the image, regardless of the current <a href="#/p5/imageMode">imageMode()</a>.\n</p>\n<p>\nAfter using <a href="#/p5/set">set()</a>, you must call <a href="#/p5/updatePixels">updatePixels()</a> for your changes to appear.\nThis should be called once all pixels have been set, and must be called before\ncalling .<a href="#/p5/get">get()</a> or drawing the image.\n</p>\n<p>Setting the color of a single pixel with set(x, y) is easy, but not as\nfast as putting the data directly into <a href="#/p5/pixels">pixels[]</a>. Setting the <a href="#/p5/pixels">pixels[]</a>\nvalues directly may be complicated when working with a retina display,\nbut will perform better when lots of pixels need to be set directly on\nevery loop.</p>\n<p>See the reference for <a href="#/p5/pixels">pixels[]</a> for more information.</p>',
                  itemtype: 'method',
                  name: 'set',
                  params: [
                    {
                      name: 'x',
                      description: '<p>x-coordinate of the pixel</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'y',
                      description: '<p>y-coordinate of the pixel</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'c',
                      description:
                        '<p>insert a grayscale value | a pixel array |\n                               a <a href="#/p5.Color">p5.Color</a> object | a <a href="#/p5.Image">p5.Image</a> to copy</p>\n',
                      type: 'Number|Number[]|Object'
                    }
                  ],
                  example: [
                    "\n<div>\n<code>\nlet black = color(0);\nset(30, 20, black);\nset(85, 20, black);\nset(85, 75, black);\nset(30, 75, black);\nupdatePixels();\n</code>\n</div>\n\n<div>\n<code>\nfor (let i = 30; i < width - 15; i++) {\n  for (let j = 20; j < height - 25; j++) {\n    let c = color(204 - j, 153 - i, 0);\n    set(i, j, c);\n  }\n}\nupdatePixels();\n</code>\n</div>\n\n<div>\n<code>\nlet img;\nfunction preload() {\n  img = loadImage('assets/rockies.jpg');\n}\n\nfunction setup() {\n  set(0, 0, img);\n  updatePixels();\n  line(0, 0, width, height);\n  line(0, height, width, 0);\n}\n</code>\n</div>"
                  ],
                  alt:
                    "4 black points in the shape of a square middle-right of canvas.\nsquare with orangey-brown gradient lightening at bottom right.\nimage of the rocky mountains. with lines like an 'x' through the center.",
                  class: 'p5',
                  module: 'Image',
                  submodule: 'Pixels'
                },
                {
                  file: 'src/image/pixels.js',
                  line: 688,
                  description:
                    '<p>Updates the display window with the data in the <a href="#/p5/pixels">pixels[]</a> array.\nUse in conjunction with <a href="#/p5/loadPixels">loadPixels()</a>. If you&#39;re only reading pixels from\nthe array, there&#39;s no need to call <a href="#/p5/updatePixels">updatePixels()</a> — updating is only\nnecessary to apply changes. <a href="#/p5/updatePixels">updatePixels()</a> should be called anytime the\npixels array is manipulated or <a href="#/p5/set">set()</a> is called, and only changes made with\n<a href="#/p5/set">set()</a> or direct changes to <a href="#/p5/pixels">pixels[]</a> will occur.</p>\n',
                  itemtype: 'method',
                  name: 'updatePixels',
                  params: [
                    {
                      name: 'x',
                      description:
                        '<p>x-coordinate of the upper-left corner of region\n                        to update</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'y',
                      description:
                        '<p>y-coordinate of the upper-left corner of region\n                        to update</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'w',
                      description: '<p>width of region to update</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'h',
                      description: '<p>height of region to update</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  example: [
                    "\n<div>\n<code>\nlet img;\nfunction preload() {\n  img = loadImage('assets/rockies.jpg');\n}\n\nfunction setup() {\n  image(img, 0, 0, width, height);\n  let d = pixelDensity();\n  let halfImage = 4 * (width * d) * (height * d / 2);\n  loadPixels();\n  for (let i = 0; i < halfImage; i++) {\n    pixels[i + halfImage] = pixels[i];\n  }\n  updatePixels();\n}\n</code>\n</div>"
                  ],
                  alt:
                    'two images of the rocky mountains. one on top, one on bottom of canvas.',
                  class: 'p5',
                  module: 'Image',
                  submodule: 'Pixels'
                },
                {
                  file: 'src/io/files.js',
                  line: 18,
                  description:
                    '<p>Loads a JSON file from a file or a URL, and returns an Object.\nNote that even if the JSON file contains an Array, an Object will be\nreturned with index numbers as keys.</p>\n<p>This method is asynchronous, meaning it may not finish before the next\nline in your sketch is executed. JSONP is supported via a polyfill and you\ncan pass in as the second argument an object with definitions of the json\ncallback following the syntax specified <a href="https://github.com/camsong/\nfetch-jsonp">here</a>.</p>\n<p>This method is suitable for fetching files up to size of 64MB.</p>\n',
                  itemtype: 'method',
                  name: 'loadJSON',
                  return: {
                    description: 'JSON data',
                    type: 'Object|Array'
                  },
                  example: [
                    '\n\n<p>Calling <a href="#/p5/loadJSON">loadJSON()</a> inside <a href="#/p5/preload">preload()</a> guarantees to complete the\noperation before <a href="#/p5/setup">setup()</a> and <a href="#/p5/draw">draw()</a> are called.</p>\n\n<div><code>\n// Examples use USGS Earthquake API:\n//   https://earthquake.usgs.gov/fdsnws/event/1/#methods\nlet earthquakes;\nfunction preload() {\n  // Get the most recent earthquake in the database\n  let url =\n   \'https://earthquake.usgs.gov/earthquakes/feed/v1.0/\' +\n    \'summary/all_day.geojson\';\n  earthquakes = loadJSON(url);\n}\n\nfunction setup() {\n  noLoop();\n}\n\nfunction draw() {\n  background(200);\n  // Get the magnitude and name of the earthquake out of the loaded JSON\n  let earthquakeMag = earthquakes.features[0].properties.mag;\n  let earthquakeName = earthquakes.features[0].properties.place;\n  ellipse(width / 2, height / 2, earthquakeMag * 10, earthquakeMag * 10);\n  textAlign(CENTER);\n  text(earthquakeName, 0, height - 30, width, 30);\n}\n</code></div>\n\n\n<p>Outside of preload(), you may supply a callback function to handle the\nobject:</p>\n<div><code>\nfunction setup() {\n  noLoop();\n  let url =\n   \'https://earthquake.usgs.gov/earthquakes/feed/v1.0/\' +\n    \'summary/all_day.geojson\';\n  loadJSON(url, drawEarthquake);\n}\n\nfunction draw() {\n  background(200);\n}\n\nfunction drawEarthquake(earthquakes) {\n  // Get the magnitude and name of the earthquake out of the loaded JSON\n  let earthquakeMag = earthquakes.features[0].properties.mag;\n  let earthquakeName = earthquakes.features[0].properties.place;\n  ellipse(width / 2, height / 2, earthquakeMag * 10, earthquakeMag * 10);\n  textAlign(CENTER);\n  text(earthquakeName, 0, height - 30, width, 30);\n}\n</code></div>'
                  ],
                  alt:
                    '50x50 ellipse that changes from black to white depending on the current humidity\n50x50 ellipse that changes from black to white depending on the current humidity',
                  class: 'p5',
                  module: 'IO',
                  submodule: 'Input',
                  overloads: [
                    {
                      line: 18,
                      params: [
                        {
                          name: 'path',
                          description: '<p>name of the file or url to load</p>\n',
                          type: 'String'
                        },
                        {
                          name: 'jsonpOptions',
                          description: '<p>options object for jsonp related settings</p>\n',
                          type: 'Object',
                          optional: true
                        },
                        {
                          name: 'datatype',
                          description: '<p>&quot;json&quot; or &quot;jsonp&quot;</p>\n',
                          type: 'String',
                          optional: true
                        },
                        {
                          name: 'callback',
                          description:
                            '<p>function to be executed after\n                                   <a href="#/p5/loadJSON">loadJSON()</a> completes, data is passed\n                                   in as first argument</p>\n',
                          type: 'Function',
                          optional: true
                        },
                        {
                          name: 'errorCallback',
                          description:
                            '<p>function to be executed if\n                                   there is an error, response is passed\n                                   in as first argument</p>\n',
                          type: 'Function',
                          optional: true
                        }
                      ],
                      return: {
                        description: 'JSON data',
                        type: 'Object|Array'
                      }
                    },
                    {
                      line: 104,
                      params: [
                        {
                          name: 'path',
                          description: '',
                          type: 'String'
                        },
                        {
                          name: 'datatype',
                          description: '',
                          type: 'String'
                        },
                        {
                          name: 'callback',
                          description: '',
                          type: 'Function',
                          optional: true
                        },
                        {
                          name: 'errorCallback',
                          description: '',
                          type: 'Function',
                          optional: true
                        }
                      ],
                      return: {
                        description: '',
                        type: 'Object|Array'
                      }
                    },
                    {
                      line: 112,
                      params: [
                        {
                          name: 'path',
                          description: '',
                          type: 'String'
                        },
                        {
                          name: 'callback',
                          description: '',
                          type: 'Function'
                        },
                        {
                          name: 'errorCallback',
                          description: '',
                          type: 'Function',
                          optional: true
                        }
                      ],
                      return: {
                        description: '',
                        type: 'Object|Array'
                      }
                    }
                  ]
                },
                {
                  file: 'src/io/files.js',
                  line: 183,
                  description:
                    '<p>Reads the contents of a file and creates a String array of its individual\nlines. If the name of the file is used as the parameter, as in the above\nexample, the file must be located in the sketch directory/folder.\n<br><br>\nAlternatively, the file maybe be loaded from anywhere on the local\ncomputer using an absolute path (something that starts with / on Unix and\nLinux, or a drive letter on Windows), or the filename parameter can be a\nURL for a file found on a network.\n<br><br>\nThis method is asynchronous, meaning it may not finish before the next\nline in your sketch is executed.</p>\n<p>This method is suitable for fetching files up to size of 64MB.</p>\n',
                  itemtype: 'method',
                  name: 'loadStrings',
                  params: [
                    {
                      name: 'filename',
                      description: '<p>name of the file or url to load</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'callback',
                      description:
                        '<p>function to be executed after <a href="#/p5/loadStrings">loadStrings()</a>\n                              completes, Array is passed in as first\n                              argument</p>\n',
                      type: 'Function',
                      optional: true
                    },
                    {
                      name: 'errorCallback',
                      description:
                        '<p>function to be executed if\n                              there is an error, response is passed\n                              in as first argument</p>\n',
                      type: 'Function',
                      optional: true
                    }
                  ],
                  return: {
                    description: 'Array of Strings',
                    type: 'String[]'
                  },
                  example: [
                    '\n\n<p>Calling loadStrings() inside <a href="#/p5/preload">preload()</a> guarantees to complete the\noperation before <a href="#/p5/setup">setup()</a> and <a href="#/p5/draw">draw()</a> are called.</p>\n\n<div><code>\nlet result;\nfunction preload() {\n  result = loadStrings(\'assets/test.txt\');\n}\n\nfunction setup() {\n  background(200);\n  text(random(result), 10, 10, 80, 80);\n}\n</code></div>\n\n<p>Outside of preload(), you may supply a callback function to handle the\nobject:</p>\n\n<div><code>\nfunction setup() {\n  loadStrings(\'assets/test.txt\', pickString);\n}\n\nfunction pickString(result) {\n  background(200);\n  text(random(result), 10, 10, 80, 80);\n}\n</code></div>'
                  ],
                  alt:
                    'randomly generated text from a file, for example "i smell like butter"\nrandomly generated text from a file, for example "i have three feet"',
                  class: 'p5',
                  module: 'IO',
                  submodule: 'Input'
                },
                {
                  file: 'src/io/files.js',
                  line: 294,
                  description:
                    '<p>Reads the contents of a file or URL and creates a <a href="#/p5.Table">p5.Table</a> object with\nits values. If a file is specified, it must be located in the sketch\'s\n"data" folder. The filename parameter can also be a URL to a file found\nonline. By default, the file is assumed to be comma-separated (in CSV\nformat). Table only looks for a header row if the \'header\' option is\nincluded.</p>\n\n<p>Possible options include:\n<ul>\n<li>csv - parse the table as comma-separated values</li>\n<li>tsv - parse the table as tab-separated values</li>\n<li>header - this table has a header (title) row</li>\n</ul>\n</p>\n\n<p>When passing in multiple options, pass them in as separate parameters,\nseperated by commas. For example:\n<br><br>\n<code>\nloadTable(\'my_csv_file.csv\', \'csv\', \'header\');\n</code>\n</p>\n\n<p> All files loaded and saved use UTF-8 encoding.</p>\n\n<p>This method is asynchronous, meaning it may not finish before the next\nline in your sketch is executed. Calling <a href="#/p5/loadTable">loadTable()</a> inside <a href="#/p5/preload">preload()</a>\nguarantees to complete the operation before <a href="#/p5/setup">setup()</a> and <a href="#/p5/draw">draw()</a> are called.\n<p>Outside of <a href="#/p5/preload">preload()</a>, you may supply a callback function to handle the\nobject:</p>\n</p>\n\n<p>This method is suitable for fetching files up to size of 64MB.</p>\n',
                  itemtype: 'method',
                  name: 'loadTable',
                  return: {
                    description: '<a href="#/p5.Table">Table</a> object containing data',
                    type: 'Object'
                  },
                  example: [
                    '\n<div class=\'norender\'>\n<code>\n// Given the following CSV file called "mammals.csv"\n// located in the project\'s "assets" folder:\n//\n// id,species,name\n// 0,Capra hircus,Goat\n// 1,Panthera pardus,Leopard\n// 2,Equus zebra,Zebra\n\nlet table;\n\nfunction preload() {\n  //my table is comma separated value "csv"\n  //and has a header specifying the columns labels\n  table = loadTable(\'assets/mammals.csv\', \'csv\', \'header\');\n  //the file can be remote\n  //table = loadTable("http://p5js.org/reference/assets/mammals.csv",\n  //                  "csv", "header");\n}\n\nfunction setup() {\n  //count the columns\n  print(table.getRowCount() + \' total rows in table\');\n  print(table.getColumnCount() + \' total columns in table\');\n\n  print(table.getColumn(\'name\'));\n  //["Goat", "Leopard", "Zebra"]\n\n  //cycle through the table\n  for (let r = 0; r < table.getRowCount(); r++)\n    for (let c = 0; c < table.getColumnCount(); c++) {\n      print(table.getString(r, c));\n    }\n}\n</code>\n</div>'
                  ],
                  alt:
                    'randomly generated text from a file, for example "i smell like butter"\nrandomly generated text from a file, for example "i have three feet"',
                  class: 'p5',
                  module: 'IO',
                  submodule: 'Input',
                  overloads: [
                    {
                      line: 294,
                      params: [
                        {
                          name: 'filename',
                          description: '<p>name of the file or URL to load</p>\n',
                          type: 'String'
                        },
                        {
                          name: 'options',
                          description:
                            '<p>&quot;header&quot; &quot;csv&quot; &quot;tsv&quot;</p>\n',
                          type: 'String'
                        },
                        {
                          name: 'callback',
                          description:
                            '<p>function to be executed after\n                                    <a href="#/p5/loadTable">loadTable()</a> completes. On success, the\n                                    <a href="#/p5.Table">Table</a> object is passed in as the\n                                    first argument.</p>\n',
                          type: 'Function',
                          optional: true
                        },
                        {
                          name: 'errorCallback',
                          description:
                            '<p>function to be executed if\n                                    there is an error, response is passed\n                                    in as first argument</p>\n',
                          type: 'Function',
                          optional: true
                        }
                      ],
                      return: {
                        description: '<a href="#/p5.Table">Table</a> object containing data',
                        type: 'Object'
                      }
                    },
                    {
                      line: 384,
                      params: [
                        {
                          name: 'filename',
                          description: '',
                          type: 'String'
                        },
                        {
                          name: 'callback',
                          description: '',
                          type: 'Function',
                          optional: true
                        },
                        {
                          name: 'errorCallback',
                          description: '',
                          type: 'Function',
                          optional: true
                        }
                      ],
                      return: {
                        description: '',
                        type: 'Object'
                      }
                    }
                  ]
                },
                {
                  file: 'src/io/files.js',
                  line: 604,
                  description:
                    '<p>Reads the contents of a file and creates an XML object with its values.\nIf the name of the file is used as the parameter, as in the above example,\nthe file must be located in the sketch directory/folder.</p>\n<p>Alternatively, the file maybe be loaded from anywhere on the local\ncomputer using an absolute path (something that starts with / on Unix and\nLinux, or a drive letter on Windows), or the filename parameter can be a\nURL for a file found on a network.</p>\n<p>This method is asynchronous, meaning it may not finish before the next\nline in your sketch is executed. Calling <a href="#/p5/loadXML">loadXML()</a> inside <a href="#/p5/preload">preload()</a>\nguarantees to complete the operation before <a href="#/p5/setup">setup()</a> and <a href="#/p5/draw">draw()</a> are called.</p>\n<p>Outside of <a href="#/p5/preload">preload()</a>, you may supply a callback function to handle the\nobject.</p>\n<p>This method is suitable for fetching files up to size of 64MB.</p>\n',
                  itemtype: 'method',
                  name: 'loadXML',
                  params: [
                    {
                      name: 'filename',
                      description: '<p>name of the file or URL to load</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'callback',
                      description:
                        '<p>function to be executed after <a href="#/p5/loadXML">loadXML()</a>\n                              completes, XML object is passed in as\n                              first argument</p>\n',
                      type: 'Function',
                      optional: true
                    },
                    {
                      name: 'errorCallback',
                      description:
                        '<p>function to be executed if\n                              there is an error, response is passed\n                              in as first argument</p>\n',
                      type: 'Function',
                      optional: true
                    }
                  ],
                  return: {
                    description: 'XML object containing data',
                    type: 'Object'
                  },
                  example: [
                    '\n<div class=\'norender\'><code>\n// The following short XML file called "mammals.xml" is parsed\n// in the code below.\n//\n// <?xml version="1.0"?>\n// &lt;mammals&gt;\n//   &lt;animal id="0" species="Capra hircus">Goat&lt;/animal&gt;\n//   &lt;animal id="1" species="Panthera pardus">Leopard&lt;/animal&gt;\n//   &lt;animal id="2" species="Equus zebra">Zebra&lt;/animal&gt;\n// &lt;/mammals&gt;\n\nlet xml;\n\nfunction preload() {\n  xml = loadXML(\'assets/mammals.xml\');\n}\n\nfunction setup() {\n  let children = xml.getChildren(\'animal\');\n\n  for (let i = 0; i < children.length; i++) {\n    let id = children[i].getNum(\'id\');\n    let coloring = children[i].getString(\'species\');\n    let name = children[i].getContent();\n    print(id + \', \' + coloring + \', \' + name);\n  }\n}\n\n// Sketch prints:\n// 0, Capra hircus, Goat\n// 1, Panthera pardus, Leopard\n// 2, Equus zebra, Zebra\n</code></div>'
                  ],
                  alt: 'no image displayed',
                  class: 'p5',
                  module: 'IO',
                  submodule: 'Input'
                },
                {
                  file: 'src/io/files.js',
                  line: 715,
                  description:
                    '<p>This method is suitable for fetching files up to size of 64MB.</p>\n',
                  itemtype: 'method',
                  name: 'loadBytes',
                  params: [
                    {
                      name: 'file',
                      description: '<p>name of the file or URL to load</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'callback',
                      description:
                        '<p>function to be executed after <a href="#/p5/loadBytes">loadBytes()</a>\n                                   completes</p>\n',
                      type: 'Function',
                      optional: true
                    },
                    {
                      name: 'errorCallback',
                      description:
                        '<p>function to be executed if there\n                                   is an error</p>\n',
                      type: 'Function',
                      optional: true
                    }
                  ],
                  return: {
                    description: "an object whose 'bytes' property will be the loaded buffer",
                    type: 'Object'
                  },
                  example: [
                    "\n<div class='norender'><code>\nlet data;\n\nfunction preload() {\n  data = loadBytes('assets/mammals.xml');\n}\n\nfunction setup() {\n  for (let i = 0; i < 5; i++) {\n    console.log(data.bytes[i].toString(16));\n  }\n}\n</code></div>"
                  ],
                  alt: 'no image displayed',
                  class: 'p5',
                  module: 'IO',
                  submodule: 'Input'
                },
                {
                  file: 'src/io/files.js',
                  line: 775,
                  description:
                    "<p>Method for executing an HTTP GET request. If data type is not specified,\np5 will try to guess based on the URL, defaulting to text. This is equivalent to\ncalling <code>httpDo(path, 'GET')</code>. The &#39;binary&#39; datatype will return\na Blob object, and the &#39;arrayBuffer&#39; datatype will return an ArrayBuffer\nwhich can be used to initialize typed arrays (such as Uint8Array).</p>\n",
                  itemtype: 'method',
                  name: 'httpGet',
                  return: {
                    description:
                      'A promise that resolves with the data when the operation\n                  completes successfully or rejects with the error after\n                  one occurs.',
                    type: 'Promise'
                  },
                  example: [
                    "\n<div class='norender'><code>\n// Examples use USGS Earthquake API:\n//   https://earthquake.usgs.gov/fdsnws/event/1/#methods\nlet earthquakes;\nfunction preload() {\n  // Get the most recent earthquake in the database\n  let url =\n   'https://earthquake.usgs.gov/fdsnws/event/1/query?' +\n    'format=geojson&limit=1&orderby=time';\n  httpGet(url, 'jsonp', false, function(response) {\n    // when the HTTP request completes, populate the variable that holds the\n    // earthquake data used in the visualization.\n    earthquakes = response;\n  });\n}\n\nfunction draw() {\n  if (!earthquakes) {\n    // Wait until the earthquake data has loaded before drawing.\n    return;\n  }\n  background(200);\n  // Get the magnitude and name of the earthquake out of the loaded JSON\n  let earthquakeMag = earthquakes.features[0].properties.mag;\n  let earthquakeName = earthquakes.features[0].properties.place;\n  ellipse(width / 2, height / 2, earthquakeMag * 10, earthquakeMag * 10);\n  textAlign(CENTER);\n  text(earthquakeName, 0, height - 30, width, 30);\n  noLoop();\n}\n</code></div>"
                  ],
                  class: 'p5',
                  module: 'IO',
                  submodule: 'Input',
                  overloads: [
                    {
                      line: 775,
                      params: [
                        {
                          name: 'path',
                          description: '<p>name of the file or url to load</p>\n',
                          type: 'String'
                        },
                        {
                          name: 'datatype',
                          description:
                            '<p>&quot;json&quot;, &quot;jsonp&quot;, &quot;binary&quot;, &quot;arrayBuffer&quot;,\n                                   &quot;xml&quot;, or &quot;text&quot;</p>\n',
                          type: 'String',
                          optional: true
                        },
                        {
                          name: 'data',
                          description: '<p>param data passed sent with request</p>\n',
                          type: 'Object|Boolean',
                          optional: true
                        },
                        {
                          name: 'callback',
                          description:
                            '<p>function to be executed after\n                                   <a href="#/p5/httpGet">httpGet()</a> completes, data is passed in\n                                   as first argument</p>\n',
                          type: 'Function',
                          optional: true
                        },
                        {
                          name: 'errorCallback',
                          description:
                            '<p>function to be executed if\n                                   there is an error, response is passed\n                                   in as first argument</p>\n',
                          type: 'Function',
                          optional: true
                        }
                      ],
                      return: {
                        description:
                          'A promise that resolves with the data when the operation\n                  completes successfully or rejects with the error after\n                  one occurs.',
                        type: 'Promise'
                      }
                    },
                    {
                      line: 829,
                      params: [
                        {
                          name: 'path',
                          description: '',
                          type: 'String'
                        },
                        {
                          name: 'data',
                          description: '',
                          type: 'Object|Boolean'
                        },
                        {
                          name: 'callback',
                          description: '',
                          type: 'Function',
                          optional: true
                        },
                        {
                          name: 'errorCallback',
                          description: '',
                          type: 'Function',
                          optional: true
                        }
                      ],
                      return: {
                        description: '',
                        type: 'Promise'
                      }
                    },
                    {
                      line: 837,
                      params: [
                        {
                          name: 'path',
                          description: '',
                          type: 'String'
                        },
                        {
                          name: 'callback',
                          description: '',
                          type: 'Function'
                        },
                        {
                          name: 'errorCallback',
                          description: '',
                          type: 'Function',
                          optional: true
                        }
                      ],
                      return: {
                        description: '',
                        type: 'Promise'
                      }
                    }
                  ]
                },
                {
                  file: 'src/io/files.js',
                  line: 852,
                  description:
                    "<p>Method for executing an HTTP POST request. If data type is not specified,\np5 will try to guess based on the URL, defaulting to text. This is equivalent to\ncalling <code>httpDo(path, 'POST')</code>.</p>\n",
                  itemtype: 'method',
                  name: 'httpPost',
                  return: {
                    description:
                      'A promise that resolves with the data when the operation\n                  completes successfully or rejects with the error after\n                  one occurs.',
                    type: 'Promise'
                  },
                  example: [
                    "\n<div>\n<code>\n// Examples use jsonplaceholder.typicode.com for a Mock Data API\n\nlet url = 'https://jsonplaceholder.typicode.com/posts';\nlet postData = { userId: 1, title: 'p5 Clicked!', body: 'p5.js is way cool.' };\n\nfunction setup() {\n  createCanvas(800, 800);\n}\n\nfunction mousePressed() {\n  // Pick new random color values\n  let r = random(255);\n  let g = random(255);\n  let b = random(255);\n\n  httpPost(url, 'json', postData, function(result) {\n    strokeWeight(2);\n    stroke(r, g, b);\n    fill(r, g, b, 127);\n    ellipse(mouseX, mouseY, 200, 200);\n    text(result.body, mouseX, mouseY);\n  });\n}\n</code>\n</div>\n\n\n<div><code>\nlet url = 'https://invalidURL'; // A bad URL that will cause errors\nlet postData = { title: 'p5 Clicked!', body: 'p5.js is way cool.' };\n\nfunction setup() {\n  createCanvas(800, 800);\n}\n\nfunction mousePressed() {\n  // Pick new random color values\n  let r = random(255);\n  let g = random(255);\n  let b = random(255);\n\n  httpPost(\n    url,\n    'json',\n    postData,\n    function(result) {\n      // ... won't be called\n    },\n    function(error) {\n      strokeWeight(2);\n      stroke(r, g, b);\n      fill(r, g, b, 127);\n      text(error.toString(), mouseX, mouseY);\n    }\n  );\n}\n</code></div>\n"
                  ],
                  class: 'p5',
                  module: 'IO',
                  submodule: 'Input',
                  overloads: [
                    {
                      line: 852,
                      params: [
                        {
                          name: 'path',
                          description: '<p>name of the file or url to load</p>\n',
                          type: 'String'
                        },
                        {
                          name: 'datatype',
                          description:
                            '<p>&quot;json&quot;, &quot;jsonp&quot;, &quot;xml&quot;, or &quot;text&quot;.\n                                   If omitted, <a href="#/p5/httpPost">httpPost()</a> will guess.</p>\n',
                          type: 'String',
                          optional: true
                        },
                        {
                          name: 'data',
                          description: '<p>param data passed sent with request</p>\n',
                          type: 'Object|Boolean',
                          optional: true
                        },
                        {
                          name: 'callback',
                          description:
                            '<p>function to be executed after\n                                   <a href="#/p5/httpPost">httpPost()</a> completes, data is passed in\n                                   as first argument</p>\n',
                          type: 'Function',
                          optional: true
                        },
                        {
                          name: 'errorCallback',
                          description:
                            '<p>function to be executed if\n                                   there is an error, response is passed\n                                   in as first argument</p>\n',
                          type: 'Function',
                          optional: true
                        }
                      ],
                      return: {
                        description:
                          'A promise that resolves with the data when the operation\n                  completes successfully or rejects with the error after\n                  one occurs.',
                        type: 'Promise'
                      }
                    },
                    {
                      line: 934,
                      params: [
                        {
                          name: 'path',
                          description: '',
                          type: 'String'
                        },
                        {
                          name: 'data',
                          description: '',
                          type: 'Object|Boolean'
                        },
                        {
                          name: 'callback',
                          description: '',
                          type: 'Function',
                          optional: true
                        },
                        {
                          name: 'errorCallback',
                          description: '',
                          type: 'Function',
                          optional: true
                        }
                      ],
                      return: {
                        description: '',
                        type: 'Promise'
                      }
                    },
                    {
                      line: 942,
                      params: [
                        {
                          name: 'path',
                          description: '',
                          type: 'String'
                        },
                        {
                          name: 'callback',
                          description: '',
                          type: 'Function'
                        },
                        {
                          name: 'errorCallback',
                          description: '',
                          type: 'Function',
                          optional: true
                        }
                      ],
                      return: {
                        description: '',
                        type: 'Promise'
                      }
                    }
                  ]
                },
                {
                  file: 'src/io/files.js',
                  line: 957,
                  description:
                    '<p>Method for executing an HTTP request. If data type is not specified,\np5 will try to guess based on the URL, defaulting to text.<br><br>\nFor more advanced use, you may also pass in the path as the first argument\nand a object as the second argument, the signature follows the one specified\nin the Fetch API specification.\nThis method is suitable for fetching files up to size of 64MB when &quot;GET&quot; is used.</p>\n',
                  itemtype: 'method',
                  name: 'httpDo',
                  return: {
                    description:
                      'A promise that resolves with the data when the operation\n                  completes successfully or rejects with the error after\n                  one occurs.',
                    type: 'Promise'
                  },
                  example: [
                    "\n<div>\n<code>\n// Examples use USGS Earthquake API:\n// https://earthquake.usgs.gov/fdsnws/event/1/#methods\n\n// displays an animation of all USGS earthquakes\nlet earthquakes;\nlet eqFeatureIndex = 0;\n\nfunction preload() {\n  let url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';\n  httpDo(\n    url,\n    {\n      method: 'GET',\n      // Other Request options, like special headers for apis\n      headers: { authorization: 'Bearer secretKey' }\n    },\n    function(res) {\n      earthquakes = res;\n    }\n  );\n}\n\nfunction draw() {\n  // wait until the data is loaded\n  if (!earthquakes || !earthquakes.features[eqFeatureIndex]) {\n    return;\n  }\n  clear();\n\n  let feature = earthquakes.features[eqFeatureIndex];\n  let mag = feature.properties.mag;\n  let rad = mag / 11 * ((width + height) / 2);\n  fill(255, 0, 0, 100);\n  ellipse(width / 2 + random(-2, 2), height / 2 + random(-2, 2), rad, rad);\n\n  if (eqFeatureIndex >= earthquakes.features.length) {\n    eqFeatureIndex = 0;\n  } else {\n    eqFeatureIndex += 1;\n  }\n}\n</code>\n</div>"
                  ],
                  class: 'p5',
                  module: 'IO',
                  submodule: 'Input',
                  overloads: [
                    {
                      line: 957,
                      params: [
                        {
                          name: 'path',
                          description: '<p>name of the file or url to load</p>\n',
                          type: 'String'
                        },
                        {
                          name: 'method',
                          description:
                            '<p>either &quot;GET&quot;, &quot;POST&quot;, or &quot;PUT&quot;,\n                                   defaults to &quot;GET&quot;</p>\n',
                          type: 'String',
                          optional: true
                        },
                        {
                          name: 'datatype',
                          description:
                            '<p>&quot;json&quot;, &quot;jsonp&quot;, &quot;xml&quot;, or &quot;text&quot;</p>\n',
                          type: 'String',
                          optional: true
                        },
                        {
                          name: 'data',
                          description: '<p>param data passed sent with request</p>\n',
                          type: 'Object',
                          optional: true
                        },
                        {
                          name: 'callback',
                          description:
                            '<p>function to be executed after\n                                   <a href="#/p5/httpGet">httpGet()</a> completes, data is passed in\n                                   as first argument</p>\n',
                          type: 'Function',
                          optional: true
                        },
                        {
                          name: 'errorCallback',
                          description:
                            '<p>function to be executed if\n                                   there is an error, response is passed\n                                   in as first argument</p>\n',
                          type: 'Function',
                          optional: true
                        }
                      ],
                      return: {
                        description:
                          'A promise that resolves with the data when the operation\n                  completes successfully or rejects with the error after\n                  one occurs.',
                        type: 'Promise'
                      }
                    },
                    {
                      line: 1028,
                      params: [
                        {
                          name: 'path',
                          description: '',
                          type: 'String'
                        },
                        {
                          name: 'options',
                          description:
                            '<p>Request object options as documented in the\n                                   &quot;fetch&quot; API\n<a href="https://developer.mozilla.org/en/docs/Web/API/Fetch_API">reference</a></p>\n',
                          type: 'Object'
                        },
                        {
                          name: 'callback',
                          description: '',
                          type: 'Function',
                          optional: true
                        },
                        {
                          name: 'errorCallback',
                          description: '',
                          type: 'Function',
                          optional: true
                        }
                      ],
                      return: {
                        description: '',
                        type: 'Promise'
                      }
                    }
                  ]
                },
                {
                  file: 'src/io/files.js',
                  line: 1190,
                  itemtype: 'method',
                  name: 'createWriter',
                  params: [
                    {
                      name: 'name',
                      description: '<p>name of the file to be created</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'extension',
                      description: '',
                      type: 'String',
                      optional: true
                    }
                  ],
                  return: {
                    description: '',
                    type: 'p5.PrintWriter'
                  },
                  example: [
                    "\n<div>\n<code>\nfunction setup() {\n  createCanvas(100, 100);\n  background(200);\n  text('click here to save', 10, 10, 70, 80);\n}\n\nfunction mousePressed() {\n  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {\n    const writer = createWriter('squares.txt');\n    for (let i = 0; i < 10; i++) {\n      writer.print(i * i);\n    }\n    writer.close();\n    writer.clear();\n  }\n}\n</code>\n</div>"
                  ],
                  class: 'p5',
                  module: 'IO',
                  submodule: 'Output'
                },
                {
                  file: 'src/io/files.js',
                  line: 1245,
                  description: '<p>Writes data to the PrintWriter stream</p>\n',
                  itemtype: 'method',
                  name: 'write',
                  params: [
                    {
                      name: 'data',
                      description: '<p>all data to be written by the PrintWriter</p>\n',
                      type: 'Array'
                    }
                  ],
                  example: [
                    "\n<div class=\"norender notest\">\n<code>\n// creates a file called 'newFile.txt'\nlet writer = createWriter('newFile.txt');\n// write 'Hello world!'' to the file\nwriter.write(['Hello world!']);\n// close the PrintWriter and save the file\nwriter.close();\n</code>\n</div>\n<div class='norender notest'>\n<code>\n// creates a file called 'newFile2.txt'\nlet writer = createWriter('newFile2.txt');\n// write 'apples,bananas,123' to the file\nwriter.write(['apples', 'bananas', 123]);\n// close the PrintWriter and save the file\nwriter.close();\n</code>\n</div>\n<div class='norender notest'>\n<code>\n// creates a file called 'newFile3.txt'\nlet writer = createWriter('newFile3.txt');\n// write 'My name is: Teddy' to the file\nwriter.write('My name is:');\nwriter.write(' Teddy');\n// close the PrintWriter and save the file\nwriter.close();\n</code>\n</div>"
                  ],
                  class: 'p5.PrintWriter',
                  module: 'IO',
                  submodule: 'Output'
                },
                {
                  file: 'src/io/files.js',
                  line: 1285,
                  description:
                    '<p>Writes data to the PrintWriter stream, and adds a new line at the end</p>\n',
                  itemtype: 'method',
                  name: 'print',
                  params: [
                    {
                      name: 'data',
                      description: '<p>all data to be printed by the PrintWriter</p>\n',
                      type: 'Array'
                    }
                  ],
                  example: [
                    "\n<div class='norender notest'>\n<code>\n// creates a file called 'newFile.txt'\nlet writer = createWriter('newFile.txt');\n// creates a file containing\n//  My name is:\n//  Teddy\nwriter.print('My name is:');\nwriter.print('Teddy');\n// close the PrintWriter and save the file\nwriter.close();\n</code>\n</div>\n<div class='norender notest'>\n<code>\nlet writer;\n\nfunction setup() {\n  createCanvas(400, 400);\n  // create a PrintWriter\n  writer = createWriter('newFile.txt');\n}\n\nfunction draw() {\n  // print all mouseX and mouseY coordinates to the stream\n  writer.print([mouseX, mouseY]);\n}\n\nfunction mouseClicked() {\n  // close the PrintWriter and save the file\n  writer.close();\n}\n</code>\n</div>"
                  ],
                  class: 'p5.PrintWriter',
                  module: 'IO',
                  submodule: 'Output'
                },
                {
                  file: 'src/io/files.js',
                  line: 1328,
                  description:
                    '<p>Clears the data already written to the PrintWriter object</p>\n',
                  itemtype: 'method',
                  name: 'clear',
                  example: [
                    "\n<div class =\"norender notest\"><code>\n// create writer object\nlet writer = createWriter('newFile.txt');\nwriter.write(['clear me']);\n// clear writer object here\nwriter.clear();\n// close writer\nwriter.close();\n</code></div>\n"
                  ],
                  class: 'p5.PrintWriter',
                  module: 'IO',
                  submodule: 'Output'
                },
                {
                  file: 'src/io/files.js',
                  line: 1346,
                  description: '<p>Closes the PrintWriter</p>\n',
                  itemtype: 'method',
                  name: 'close',
                  example: [
                    "\n<div class=\"norender notest\">\n<code>\n// create a file called 'newFile.txt'\nlet writer = createWriter('newFile.txt');\n// close the PrintWriter and save the file\nwriter.close();\n</code>\n</div>\n<div class='norender notest'>\n<code>\n// create a file called 'newFile2.txt'\nlet writer = createWriter('newFile2.txt');\n// write some data to the file\nwriter.write([100, 101, 102]);\n// close the PrintWriter and save the file\nwriter.close();\n</code>\n</div>"
                  ],
                  class: 'p5.PrintWriter',
                  module: 'IO',
                  submodule: 'Output'
                },
                {
                  file: 'src/io/files.js',
                  line: 1395,
                  description:
                    "<p>Save an image, text, json, csv, wav, or html. Prompts download to\nthe client's computer. <b>Note that it is not recommended to call <a href=\"#/p5/save\">save()</a>\nwithin draw if it's looping, as the <a href=\"#/p5/save\">save()</a> function will open a new save\ndialog every frame.</b></p>\n<p>The default behavior is to save the canvas as an image. You can\noptionally specify a filename.\nFor example:</p>\n <pre class='language-javascript'><code>\n save();\n save('myCanvas.jpg'); // save a specific canvas with a filename\n </code></pre>\n\n<p>Alternately, the first parameter can be a pointer to a canvas\n<a href=\"#/p5.Element\">p5.Element</a>, an Array of Strings,\nan Array of JSON, a JSON object, a <a href=\"#/p5.Table\">p5.Table</a>, a <a href=\"#/p5.Image\">p5.Image</a>, or a\np5.SoundFile (requires p5.sound). The second parameter is a filename\n(including extension). The third parameter is for options specific\nto this type of object. This method will save a file that fits the\ngiven parameters. For example:</p>\n\n <pre class='language-javascript'><code>\n // Saves canvas as an image\n save('myCanvas.jpg');\n\n // Saves pImage as a png image\n let img = createImage(10, 10);\n save(img, 'my.png');\n\n // Saves canvas as an image\n let cnv = createCanvas(100, 100);\n save(cnv, 'myCanvas.jpg');\n\n // Saves p5.Renderer object as an image\n let gb = createGraphics(100, 100);\n save(gb, 'myGraphics.jpg');\n\n let myTable = new p5.Table();\n\n // Saves table as html file\n save(myTable, 'myTable.html');\n\n // Comma Separated Values\n save(myTable, 'myTable.csv');\n\n // Tab Separated Values\n save(myTable, 'myTable.tsv');\n\n let myJSON = { a: 1, b: true };\n\n // Saves pretty JSON\n save(myJSON, 'my.json');\n\n // Optimizes JSON filesize\n save(myJSON, 'my.json', true);\n\n // Saves array of strings to a text file with line breaks after each item\n let arrayOfStrings = ['a', 'b'];\n save(arrayOfStrings, 'my.txt');\n </code></pre>",
                  itemtype: 'method',
                  name: 'save',
                  params: [
                    {
                      name: 'objectOrFilename',
                      description:
                        '<p>If filename is provided, will\n                                           save canvas as an image with\n                                           either png or jpg extension\n                                           depending on the filename.\n                                           If object is provided, will\n                                           save depending on the object\n                                           and filename (see examples\n                                           above).</p>\n',
                      type: 'Object|String',
                      optional: true
                    },
                    {
                      name: 'filename',
                      description:
                        '<p>If an object is provided as the first\n                             parameter, then the second parameter\n                             indicates the filename,\n                             and should include an appropriate\n                             file extension (see examples above).</p>\n',
                      type: 'String',
                      optional: true
                    },
                    {
                      name: 'options',
                      description:
                        '<p>Additional options depend on\n                          filetype. For example, when saving JSON,\n                          <code>true</code> indicates that the\n                          output will be optimized for filesize,\n                          rather than readability.</p>\n',
                      type: 'Boolean|String',
                      optional: true
                    }
                  ],
                  class: 'p5',
                  module: 'IO',
                  submodule: 'Output'
                },
                {
                  file: 'src/io/files.js',
                  line: 1523,
                  description:
                    '<p>Writes the contents of an Array or a JSON object to a .json file.\nThe file saving process and location of the saved file will\nvary between web browsers.</p>\n',
                  itemtype: 'method',
                  name: 'saveJSON',
                  params: [
                    {
                      name: 'json',
                      description: '',
                      type: 'Array|Object'
                    },
                    {
                      name: 'filename',
                      description: '',
                      type: 'String'
                    },
                    {
                      name: 'optimize',
                      description:
                        '<p>If true, removes line breaks\n                               and spaces from the output\n                               file to optimize filesize\n                               (but not readability).</p>\n',
                      type: 'Boolean',
                      optional: true
                    }
                  ],
                  example: [
                    '\n <div><code>\n let json = {}; // new  JSON Object\n\n json.id = 0;\n json.species = \'Panthera leo\';\n json.name = \'Lion\';\n\n function setup() {\n createCanvas(100, 100);\n background(200);\n text(\'click here to save\', 10, 10, 70, 80);\n }\n\n function mousePressed() {\n if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {\n   saveJSON(json, \'lion.json\');\n }\n }\n\n // saves the following to a file called "lion.json":\n // {\n //   "id": 0,\n //   "species": "Panthera leo",\n //   "name": "Lion"\n // }\n </code></div>'
                  ],
                  alt: 'no image displayed',
                  class: 'p5',
                  module: 'IO',
                  submodule: 'Output'
                },
                {
                  file: 'src/io/files.js',
                  line: 1581,
                  description:
                    '<p>Writes an array of Strings to a text file, one line per String.\nThe file saving process and location of the saved file will\nvary between web browsers.</p>\n',
                  itemtype: 'method',
                  name: 'saveStrings',
                  params: [
                    {
                      name: 'list',
                      description: '<p>string array to be written</p>\n',
                      type: 'String[]'
                    },
                    {
                      name: 'filename',
                      description: '<p>filename for output</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'extension',
                      description: '<p>the filename&#39;s extension</p>\n',
                      type: 'String',
                      optional: true
                    }
                  ],
                  example: [
                    "\n <div><code>\n let words = 'apple bear cat dog';\n\n // .split() outputs an Array\n let list = split(words, ' ');\n\n function setup() {\n createCanvas(100, 100);\n background(200);\n text('click here to save', 10, 10, 70, 80);\n }\n\n function mousePressed() {\n if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {\n   saveStrings(list, 'nouns.txt');\n }\n }\n\n // Saves the following to a file called 'nouns.txt':\n //\n // apple\n // bear\n // cat\n // dog\n </code></div>"
                  ],
                  alt: 'no image displayed',
                  class: 'p5',
                  module: 'IO',
                  submodule: 'Output'
                },
                {
                  file: 'src/io/files.js',
                  line: 1649,
                  description:
                    '<p>Writes the contents of a <a href="#/p5.Table">Table</a> object to a file. Defaults to a\ntext file with comma-separated-values (&#39;csv&#39;) but can also\nuse tab separation (&#39;tsv&#39;), or generate an HTML table (&#39;html&#39;).\nThe file saving process and location of the saved file will\nvary between web browsers.</p>\n',
                  itemtype: 'method',
                  name: 'saveTable',
                  params: [
                    {
                      name: 'Table',
                      description:
                        '<p>the <a href="#/p5.Table">Table</a> object to save to a file</p>\n',
                      type: 'p5.Table'
                    },
                    {
                      name: 'filename',
                      description: '<p>the filename to which the Table should be saved</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'options',
                      description:
                        '<p>can be one of &quot;tsv&quot;, &quot;csv&quot;, or &quot;html&quot;</p>\n',
                      type: 'String',
                      optional: true
                    }
                  ],
                  example: [
                    "\n<div><code>\n let table;\n\n function setup() {\n table = new p5.Table();\n\n table.addColumn('id');\n table.addColumn('species');\n table.addColumn('name');\n\n let newRow = table.addRow();\n newRow.setNum('id', table.getRowCount() - 1);\n newRow.setString('species', 'Panthera leo');\n newRow.setString('name', 'Lion');\n\n // To save, un-comment next line then click 'run'\n // saveTable(table, 'new.csv');\n }\n\n // Saves the following to a file called 'new.csv':\n // id,species,name\n // 0,Panthera leo,Lion\n </code></div>"
                  ],
                  alt: 'no image displayed',
                  class: 'p5',
                  module: 'IO',
                  submodule: 'Output'
                },
                {
                  file: 'src/io/p5.Table.js',
                  line: 9,
                  description:
                    '<p>Table Options</p>\n<p>Generic class for handling tabular data, typically from a\nCSV, TSV, or other sort of spreadsheet file.</p>\n<p>CSV files are\n<a href="http://en.wikipedia.org/wiki/Comma-separated_values">\ncomma separated values</a>, often with the data in quotes. TSV\nfiles use tabs as separators, and usually don\'t bother with the\nquotes.</p>\n<p>File names should end with .csv if they\'re comma separated.</p>\n<p>A rough "spec" for CSV can be found\n<a href="http://tools.ietf.org/html/rfc4180">here</a>.</p>\n<p>To load files, use the <a href="#/p5/loadTable">loadTable</a> method.</p>\n<p>To save tables to your computer, use the <a href="#/p5/save">save</a> method\n or the <a href="#/p5/saveTable">saveTable</a> method.</p>\n\n<p>Possible options include:</p>\n<ul>\n<li>csv - parse the table as comma-separated values\n<li>tsv - parse the table as tab-separated values\n<li>header - this table has a header (title) row\n</ul>',
                  class: 'p5.Table',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.Table.js',
                  line: 43,
                  description:
                    '<p>An array containing the names of the columns in the table, if the &quot;header&quot; the table is\nloaded with the &quot;header&quot; parameter.</p>\n',
                  itemtype: 'property',
                  name: 'columns',
                  type: 'String[]',
                  example: [
                    "\n<div class=\"norender\">\n<code>\n// Given the CSV file \"mammals.csv\"\n// in the project's \"assets\" folder:\n//\n// id,species,name\n// 0,Capra hircus,Goat\n// 1,Panthera pardus,Leopard\n// 2,Equus zebra,Zebra\n\nlet table;\n\nfunction preload() {\n  //my table is comma separated value \"csv\"\n  //and has a header specifying the columns labels\n  table = loadTable('assets/mammals.csv', 'csv', 'header');\n}\n\nfunction setup() {\n  //print the column names\n  for (let c = 0; c < table.getColumnCount(); c++) {\n    print('column ' + c + ' is named ' + table.columns[c]);\n  }\n}\n</code>\n</div>"
                  ],
                  class: 'p5.Table',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.Table.js',
                  line: 77,
                  description:
                    '<p>An array containing the <a href="#/p5.Table">p5.TableRow</a> objects that make up the\nrows of the table. The same result as calling <a href="#/p5/getRows">getRows()</a></p>\n',
                  itemtype: 'property',
                  name: 'rows',
                  type: 'p5.TableRow[]',
                  class: 'p5.Table',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.Table.js',
                  line: 85,
                  description:
                    '<p>Use <a href="#/p5/addRow">addRow()</a> to add a new row of data to a <a href="#/p5.Table">p5.Table</a> object. By default,\nan empty row is created. Typically, you would store a reference to\nthe new row in a TableRow object (see newRow in the example above),\nand then set individual values using <a href="#/p5/set">set()</a>.</p>\n<p>If a <a href="#/p5.TableRow">p5.TableRow</a> object is included as a parameter, then that row is\nduplicated and added to the table.</p>\n',
                  itemtype: 'method',
                  name: 'addRow',
                  params: [
                    {
                      name: 'row',
                      description: '<p>row to be added to the table</p>\n',
                      type: 'p5.TableRow',
                      optional: true
                    }
                  ],
                  return: {
                    description: 'the row that was added',
                    type: 'p5.TableRow'
                  },
                  example: [
                    "\n <div class=\"norender\">\n <code>\n // Given the CSV file \"mammals.csv\"\n // in the project's \"assets\" folder:\n //\n // id,species,name\n // 0,Capra hircus,Goat\n // 1,Panthera pardus,Leopard\n // 2,Equus zebra,Zebra\n\n let table;\n\n function preload() {\n //my table is comma separated value \"csv\"\n //and has a header specifying the columns labels\n table = loadTable('assets/mammals.csv', 'csv', 'header');\n }\n\n function setup() {\n //add a row\n let newRow = table.addRow();\n newRow.setString('id', table.getRowCount() - 1);\n newRow.setString('species', 'Canis Lupus');\n newRow.setString('name', 'Wolf');\n\n //print the results\n for (let r = 0; r < table.getRowCount(); r++)\n   for (let c = 0; c < table.getColumnCount(); c++)\n     print(table.getString(r, c));\n }\n </code>\n </div>"
                  ],
                  alt: 'no image displayed',
                  class: 'p5.Table',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.Table.js',
                  line: 149,
                  description: '<p>Removes a row from the table object.</p>\n',
                  itemtype: 'method',
                  name: 'removeRow',
                  params: [
                    {
                      name: 'id',
                      description: '<p>ID number of the row to remove</p>\n',
                      type: 'Integer'
                    }
                  ],
                  example: [
                    '\n<div class="norender">\n<code>\n// Given the CSV file "mammals.csv"\n// in the project\'s "assets" folder:\n//\n// id,species,name\n// 0,Capra hircus,Goat\n// 1,Panthera pardus,Leopard\n// 2,Equus zebra,Zebra\n\nlet table;\n\nfunction preload() {\n  //my table is comma separated value "csv"\n  //and has a header specifying the columns labels\n  table = loadTable(\'assets/mammals.csv\', \'csv\', \'header\');\n}\n\nfunction setup() {\n  //remove the first row\n  table.removeRow(0);\n\n  //print the results\n  for (let r = 0; r < table.getRowCount(); r++)\n    for (let c = 0; c < table.getColumnCount(); c++)\n      print(table.getString(r, c));\n}\n</code>\n</div>'
                  ],
                  alt: 'no image displayed',
                  class: 'p5.Table',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.Table.js',
                  line: 197,
                  description:
                    '<p>Returns a reference to the specified <a href="#/p5.TableRow">p5.TableRow</a>. The reference\ncan then be used to get and set values of the selected row.</p>\n',
                  itemtype: 'method',
                  name: 'getRow',
                  params: [
                    {
                      name: 'rowID',
                      description: '<p>ID number of the row to get</p>\n',
                      type: 'Integer'
                    }
                  ],
                  return: {
                    description: '<a href="#/p5.TableRow">p5.TableRow</a> object',
                    type: 'p5.TableRow'
                  },
                  example: [
                    '\n<div class="norender">\n<code>\n// Given the CSV file "mammals.csv"\n// in the project\'s "assets" folder:\n//\n// id,species,name\n// 0,Capra hircus,Goat\n// 1,Panthera pardus,Leopard\n// 2,Equus zebra,Zebra\n\nlet table;\n\nfunction preload() {\n  //my table is comma separated value "csv"\n  //and has a header specifying the columns labels\n  table = loadTable(\'assets/mammals.csv\', \'csv\', \'header\');\n}\n\nfunction setup() {\n  let row = table.getRow(1);\n  //print it column by column\n  //note: a row is an object, not an array\n  for (let c = 0; c < table.getColumnCount(); c++) {\n    print(row.getString(c));\n  }\n}\n</code>\n</div>'
                  ],
                  alt: 'no image displayed',
                  class: 'p5.Table',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.Table.js',
                  line: 243,
                  description:
                    '<p>Gets all rows from the table. Returns an array of <a href="#/p5.TableRow">p5.TableRow</a>s.</p>\n',
                  itemtype: 'method',
                  name: 'getRows',
                  return: {
                    description: 'Array of <a href="#/p5.TableRow">p5.TableRow</a>s',
                    type: 'p5.TableRow[]'
                  },
                  example: [
                    "\n <div class=\"norender\">\n <code>\n // Given the CSV file \"mammals.csv\"\n // in the project's \"assets\" folder:\n //\n // id,species,name\n // 0,Capra hircus,Goat\n // 1,Panthera pardus,Leopard\n // 2,Equus zebra,Zebra\n\n let table;\n\n function preload() {\n //my table is comma separated value \"csv\"\n //and has a header specifying the columns labels\n table = loadTable('assets/mammals.csv', 'csv', 'header');\n }\n\n function setup() {\n let rows = table.getRows();\n\n //warning: rows is an array of objects\n for (let r = 0; r < rows.length; r++) {\n   rows[r].set('name', 'Unicorn');\n }\n\n //print the results\n for (let r = 0; r < table.getRowCount(); r++)\n   for (let c = 0; c < table.getColumnCount(); c++)\n     print(table.getString(r, c));\n }\n </code>\n </div>"
                  ],
                  alt: 'no image displayed',
                  class: 'p5.Table',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.Table.js',
                  line: 292,
                  description:
                    '<p>Finds the first row in the Table that contains the value\nprovided, and returns a reference to that row. Even if\nmultiple rows are possible matches, only the first matching\nrow is returned. The column to search may be specified by\neither its ID or title.</p>\n',
                  itemtype: 'method',
                  name: 'findRow',
                  params: [
                    {
                      name: 'value',
                      description: '<p>The value to match</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'column',
                      description:
                        '<p>ID number or title of the\n                               column to search</p>\n',
                      type: 'Integer|String'
                    }
                  ],
                  return: {
                    description: '',
                    type: 'p5.TableRow'
                  },
                  example: [
                    "\n <div class=\"norender\">\n <code>\n // Given the CSV file \"mammals.csv\"\n // in the project's \"assets\" folder:\n //\n // id,species,name\n // 0,Capra hircus,Goat\n // 1,Panthera pardus,Leopard\n // 2,Equus zebra,Zebra\n\n let table;\n\n function preload() {\n //my table is comma separated value \"csv\"\n //and has a header specifying the columns labels\n table = loadTable('assets/mammals.csv', 'csv', 'header');\n }\n\n function setup() {\n //find the animal named zebra\n let row = table.findRow('Zebra', 'name');\n //find the corresponding species\n print(row.getString('species'));\n }\n </code>\n </div>"
                  ],
                  alt: 'no image displayed',
                  class: 'p5.Table',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.Table.js',
                  line: 357,
                  description:
                    '<p>Finds the rows in the Table that contain the value\nprovided, and returns references to those rows. Returns an\nArray, so for must be used to iterate through all the rows,\nas shown in the example above. The column to search may be\nspecified by either its ID or title.</p>\n',
                  itemtype: 'method',
                  name: 'findRows',
                  params: [
                    {
                      name: 'value',
                      description: '<p>The value to match</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'column',
                      description:
                        '<p>ID number or title of the\n                               column to search</p>\n',
                      type: 'Integer|String'
                    }
                  ],
                  return: {
                    description: 'An Array of TableRow objects',
                    type: 'p5.TableRow[]'
                  },
                  example: [
                    "\n <div class=\"norender\">\n <code>\n // Given the CSV file \"mammals.csv\"\n // in the project's \"assets\" folder:\n //\n // id,species,name\n // 0,Capra hircus,Goat\n // 1,Panthera pardus,Leopard\n // 2,Equus zebra,Zebra\n\n let table;\n\n function preload() {\n //my table is comma separated value \"csv\"\n //and has a header specifying the columns labels\n table = loadTable('assets/mammals.csv', 'csv', 'header');\n }\n\n function setup() {\n //add another goat\n let newRow = table.addRow();\n newRow.setString('id', table.getRowCount() - 1);\n newRow.setString('species', 'Scape Goat');\n newRow.setString('name', 'Goat');\n\n //find the rows containing animals named Goat\n let rows = table.findRows('Goat', 'name');\n print(rows.length + ' Goats found');\n }\n </code>\n </div>"
                  ],
                  alt: 'no image displayed',
                  class: 'p5.Table',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.Table.js',
                  line: 426,
                  description:
                    '<p>Finds the first row in the Table that matches the regular\nexpression provided, and returns a reference to that row.\nEven if multiple rows are possible matches, only the first\nmatching row is returned. The column to search may be\nspecified by either its ID or title.</p>\n',
                  itemtype: 'method',
                  name: 'matchRow',
                  params: [
                    {
                      name: 'regexp',
                      description: '<p>The regular expression to match</p>\n',
                      type: 'String|RegExp'
                    },
                    {
                      name: 'column',
                      description:
                        '<p>The column ID (number) or\n                                 title (string)</p>\n',
                      type: 'String|Integer'
                    }
                  ],
                  return: {
                    description: 'TableRow object',
                    type: 'p5.TableRow'
                  },
                  example: [
                    '\n<div class="norender">\n<code>\n// Given the CSV file "mammals.csv"\n// in the project\'s "assets" folder:\n//\n// id,species,name\n// 0,Capra hircus,Goat\n// 1,Panthera pardus,Leopard\n// 2,Equus zebra,Zebra\n\nlet table;\n\nfunction preload() {\n  //my table is comma separated value "csv"\n  //and has a header specifying the columns labels\n  table = loadTable(\'assets/mammals.csv\', \'csv\', \'header\');\n}\n\nfunction setup() {\n  //Search using specified regex on a given column, return TableRow object\n  let mammal = table.matchRow(new RegExp(\'ant\'), 1);\n  print(mammal.getString(1));\n  //Output "Panthera pardus"\n}\n</code>\n</div>\n'
                  ],
                  class: 'p5.Table',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.Table.js',
                  line: 485,
                  description:
                    '<p>Finds the rows in the Table that match the regular expression provided,\nand returns references to those rows. Returns an array, so for must be\nused to iterate through all the rows, as shown in the example. The\ncolumn to search may be specified by either its ID or title.</p>\n',
                  itemtype: 'method',
                  name: 'matchRows',
                  params: [
                    {
                      name: 'regexp',
                      description: '<p>The regular expression to match</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'column',
                      description:
                        '<p>The column ID (number) or\n                                 title (string)</p>\n',
                      type: 'String|Integer',
                      optional: true
                    }
                  ],
                  return: {
                    description: 'An Array of TableRow objects',
                    type: 'p5.TableRow[]'
                  },
                  example: [
                    "\n<div class=\"norender\">\n<code>\nlet table;\n\nfunction setup() {\n  table = new p5.Table();\n\n  table.addColumn('name');\n  table.addColumn('type');\n\n  let newRow = table.addRow();\n  newRow.setString('name', 'Lion');\n  newRow.setString('type', 'Mammal');\n\n  newRow = table.addRow();\n  newRow.setString('name', 'Snake');\n  newRow.setString('type', 'Reptile');\n\n  newRow = table.addRow();\n  newRow.setString('name', 'Mosquito');\n  newRow.setString('type', 'Insect');\n\n  newRow = table.addRow();\n  newRow.setString('name', 'Lizard');\n  newRow.setString('type', 'Reptile');\n\n  let rows = table.matchRows('R.*', 'type');\n  for (let i = 0; i < rows.length; i++) {\n    print(rows[i].getString('name') + ': ' + rows[i].getString('type'));\n  }\n}\n// Sketch prints:\n// Snake: Reptile\n// Lizard: Reptile\n</code>\n</div>"
                  ],
                  class: 'p5.Table',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.Table.js',
                  line: 552,
                  description:
                    '<p>Retrieves all values in the specified column, and returns them\nas an array. The column may be specified by either its ID or title.</p>\n',
                  itemtype: 'method',
                  name: 'getColumn',
                  params: [
                    {
                      name: 'column',
                      description: '<p>String or Number of the column to return</p>\n',
                      type: 'String|Number'
                    }
                  ],
                  return: {
                    description: 'Array of column values',
                    type: 'Array'
                  },
                  example: [
                    '\n <div class="norender">\n <code>\n // Given the CSV file "mammals.csv"\n // in the project\'s "assets" folder:\n //\n // id,species,name\n // 0,Capra hircus,Goat\n // 1,Panthera pardus,Leopard\n // 2,Equus zebra,Zebra\n\n let table;\n\n function preload() {\n //my table is comma separated value "csv"\n //and has a header specifying the columns labels\n table = loadTable(\'assets/mammals.csv\', \'csv\', \'header\');\n }\n\n function setup() {\n //getColumn returns an array that can be printed directly\n print(table.getColumn(\'species\'));\n //outputs ["Capra hircus", "Panthera pardus", "Equus zebra"]\n }\n </code>\n </div>'
                  ],
                  alt: 'no image displayed',
                  class: 'p5.Table',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.Table.js',
                  line: 605,
                  description:
                    '<p>Removes all rows from a Table. While all rows are removed,\ncolumns and column titles are maintained.</p>\n',
                  itemtype: 'method',
                  name: 'clearRows',
                  example: [
                    "\n <div class=\"norender\">\n <code>\n // Given the CSV file \"mammals.csv\"\n // in the project's \"assets\" folder:\n //\n // id,species,name\n // 0,Capra hircus,Goat\n // 1,Panthera pardus,Leopard\n // 2,Equus zebra,Zebra\n\n let table;\n\n function preload() {\n //my table is comma separated value \"csv\"\n //and has a header specifying the columns labels\n table = loadTable('assets/mammals.csv', 'csv', 'header');\n }\n\n function setup() {\n table.clearRows();\n print(table.getRowCount() + ' total rows in table');\n print(table.getColumnCount() + ' total columns in table');\n }\n </code>\n </div>"
                  ],
                  alt: 'no image displayed',
                  class: 'p5.Table',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.Table.js',
                  line: 647,
                  description:
                    '<p>Use <a href="#/p5/addColumn">addColumn()</a> to add a new column to a <a href="#/p5.Table">Table</a> object.\nTypically, you will want to specify a title, so the column\nmay be easily referenced later by name. (If no title is\nspecified, the new column&#39;s title will be null.)</p>\n',
                  itemtype: 'method',
                  name: 'addColumn',
                  params: [
                    {
                      name: 'title',
                      description: '<p>title of the given column</p>\n',
                      type: 'String',
                      optional: true
                    }
                  ],
                  example: [
                    "\n <div class=\"norender\">\n <code>\n // Given the CSV file \"mammals.csv\"\n // in the project's \"assets\" folder:\n //\n // id,species,name\n // 0,Capra hircus,Goat\n // 1,Panthera pardus,Leopard\n // 2,Equus zebra,Zebra\n\n let table;\n\n function preload() {\n //my table is comma separated value \"csv\"\n //and has a header specifying the columns labels\n table = loadTable('assets/mammals.csv', 'csv', 'header');\n }\n\n function setup() {\n table.addColumn('carnivore');\n table.set(0, 'carnivore', 'no');\n table.set(1, 'carnivore', 'yes');\n table.set(2, 'carnivore', 'no');\n\n //print the results\n for (let r = 0; r < table.getRowCount(); r++)\n   for (let c = 0; c < table.getColumnCount(); c++)\n     print(table.getString(r, c));\n }\n </code>\n </div>"
                  ],
                  alt: 'no image displayed',
                  class: 'p5.Table',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.Table.js',
                  line: 698,
                  description: '<p>Returns the total number of columns in a Table.</p>\n',
                  itemtype: 'method',
                  name: 'getColumnCount',
                  return: {
                    description: 'Number of columns in this table',
                    type: 'Integer'
                  },
                  example: [
                    "\n <div>\n <code>\n // given the cvs file \"blobs.csv\" in /assets directory\n // ID, Name, Flavor, Shape, Color\n // Blob1, Blobby, Sweet, Blob, Pink\n // Blob2, Saddy, Savory, Blob, Blue\n\n let table;\n\n function preload() {\n table = loadTable('assets/blobs.csv');\n }\n\n function setup() {\n createCanvas(200, 100);\n textAlign(CENTER);\n background(255);\n }\n\n function draw() {\n let numOfColumn = table.getColumnCount();\n text('There are ' + numOfColumn + ' columns in the table.', 100, 50);\n }\n </code>\n </div>"
                  ],
                  class: 'p5.Table',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.Table.js',
                  line: 734,
                  description: '<p>Returns the total number of rows in a Table.</p>\n',
                  itemtype: 'method',
                  name: 'getRowCount',
                  return: {
                    description: 'Number of rows in this table',
                    type: 'Integer'
                  },
                  example: [
                    "\n <div>\n <code>\n // given the cvs file \"blobs.csv\" in /assets directory\n //\n // ID, Name, Flavor, Shape, Color\n // Blob1, Blobby, Sweet, Blob, Pink\n // Blob2, Saddy, Savory, Blob, Blue\n\n let table;\n\n function preload() {\n table = loadTable('assets/blobs.csv');\n }\n\n function setup() {\n createCanvas(200, 100);\n textAlign(CENTER);\n background(255);\n }\n\n function draw() {\n text('There are ' + table.getRowCount() + ' rows in the table.', 100, 50);\n }\n </code>\n </div>"
                  ],
                  class: 'p5.Table',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.Table.js',
                  line: 770,
                  description:
                    '<p>Removes any of the specified characters (or "tokens").</p>\n\n<p>If no column is specified, then the values in all columns and\nrows are processed. A specific column may be referenced by\neither its ID or title.</p>',
                  itemtype: 'method',
                  name: 'removeTokens',
                  params: [
                    {
                      name: 'chars',
                      description: '<p>String listing characters to be removed</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'column',
                      description:
                        '<p>Column ID (number)\n                                 or name (string)</p>\n',
                      type: 'String|Integer',
                      optional: true
                    }
                  ],
                  example: [
                    "\n <div class=\"norender\"><code>\n function setup() {\n let table = new p5.Table();\n\n table.addColumn('name');\n table.addColumn('type');\n\n let newRow = table.addRow();\n newRow.setString('name', '   $Lion  ,');\n newRow.setString('type', ',,,Mammal');\n\n newRow = table.addRow();\n newRow.setString('name', '$Snake  ');\n newRow.setString('type', ',,,Reptile');\n\n table.removeTokens(',$ ');\n print(table.getArray());\n }\n\n // prints:\n //  0  \"Lion\"   \"Mamal\"\n //  1  \"Snake\"  \"Reptile\"\n </code></div>"
                  ],
                  class: 'p5.Table',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.Table.js',
                  line: 842,
                  description:
                    '<p>Trims leading and trailing whitespace, such as spaces and tabs,\nfrom String table values. If no column is specified, then the\nvalues in all columns and rows are trimmed. A specific column\nmay be referenced by either its ID or title.</p>\n',
                  itemtype: 'method',
                  name: 'trim',
                  params: [
                    {
                      name: 'column',
                      description:
                        '<p>Column ID (number)\n                                 or name (string)</p>\n',
                      type: 'String|Integer',
                      optional: true
                    }
                  ],
                  example: [
                    "\n <div class=\"norender\"><code>\n function setup() {\n let table = new p5.Table();\n\n table.addColumn('name');\n table.addColumn('type');\n\n let newRow = table.addRow();\n newRow.setString('name', '   Lion  ,');\n newRow.setString('type', ' Mammal  ');\n\n newRow = table.addRow();\n newRow.setString('name', '  Snake  ');\n newRow.setString('type', '  Reptile  ');\n\n table.trim();\n print(table.getArray());\n }\n\n // prints:\n //  0  \"Lion\"   \"Mamal\"\n //  1  \"Snake\"  \"Reptile\"\n </code></div>"
                  ],
                  class: 'p5.Table',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.Table.js',
                  line: 906,
                  description:
                    '<p>Use <a href="#/p5/removeColumn">removeColumn()</a> to remove an existing column from a Table\nobject. The column to be removed may be identified by either\nits title (a String) or its index value (an int).\nremoveColumn(0) would remove the first column, removeColumn(1)\nwould remove the second column, and so on.</p>\n',
                  itemtype: 'method',
                  name: 'removeColumn',
                  params: [
                    {
                      name: 'column',
                      description: '<p>columnName (string) or ID (number)</p>\n',
                      type: 'String|Integer'
                    }
                  ],
                  example: [
                    "\n <div class=\"norender\">\n <code>\n // Given the CSV file \"mammals.csv\"\n // in the project's \"assets\" folder:\n //\n // id,species,name\n // 0,Capra hircus,Goat\n // 1,Panthera pardus,Leopard\n // 2,Equus zebra,Zebra\n\n let table;\n\n function preload() {\n //my table is comma separated value \"csv\"\n //and has a header specifying the columns labels\n table = loadTable('assets/mammals.csv', 'csv', 'header');\n }\n\n function setup() {\n table.removeColumn('id');\n print(table.getColumnCount());\n }\n </code>\n </div>"
                  ],
                  alt: 'no image displayed',
                  class: 'p5.Table',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.Table.js',
                  line: 971,
                  description:
                    '<p>Stores a value in the Table&#39;s specified row and column.\nThe row is specified by its ID, while the column may be specified\nby either its ID or title.</p>\n',
                  itemtype: 'method',
                  name: 'set',
                  params: [
                    {
                      name: 'row',
                      description: '<p>row ID</p>\n',
                      type: 'Integer'
                    },
                    {
                      name: 'column',
                      description:
                        '<p>column ID (Number)\n                              or title (String)</p>\n',
                      type: 'String|Integer'
                    },
                    {
                      name: 'value',
                      description: '<p>value to assign</p>\n',
                      type: 'String|Number'
                    }
                  ],
                  example: [
                    "\n<div class=\"norender\">\n<code>\n// Given the CSV file \"mammals.csv\"\n// in the project's \"assets\" folder:\n//\n// id,species,name\n// 0,Capra hircus,Goat\n// 1,Panthera pardus,Leopard\n// 2,Equus zebra,Zebra\n\nlet table;\n\nfunction preload() {\n  //my table is comma separated value \"csv\"\n  //and has a header specifying the columns labels\n  table = loadTable('assets/mammals.csv', 'csv', 'header');\n}\n\nfunction setup() {\n  table.set(0, 'species', 'Canis Lupus');\n  table.set(0, 'name', 'Wolf');\n\n  //print the results\n  for (let r = 0; r < table.getRowCount(); r++)\n    for (let c = 0; c < table.getColumnCount(); c++)\n      print(table.getString(r, c));\n}\n</code>\n</div>"
                  ],
                  alt: 'no image displayed',
                  class: 'p5.Table',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.Table.js',
                  line: 1021,
                  description:
                    '<p>Stores a Float value in the Table&#39;s specified row and column.\nThe row is specified by its ID, while the column may be specified\nby either its ID or title.</p>\n',
                  itemtype: 'method',
                  name: 'setNum',
                  params: [
                    {
                      name: 'row',
                      description: '<p>row ID</p>\n',
                      type: 'Integer'
                    },
                    {
                      name: 'column',
                      description:
                        '<p>column ID (Number)\n                              or title (String)</p>\n',
                      type: 'String|Integer'
                    },
                    {
                      name: 'value',
                      description: '<p>value to assign</p>\n',
                      type: 'Number'
                    }
                  ],
                  example: [
                    '\n<div class="norender">\n<code>\n// Given the CSV file "mammals.csv"\n// in the project\'s "assets" folder:\n//\n// id,species,name\n// 0,Capra hircus,Goat\n// 1,Panthera pardus,Leopard\n// 2,Equus zebra,Zebra\n\nlet table;\n\nfunction preload() {\n  //my table is comma separated value "csv"\n  //and has a header specifying the columns labels\n  table = loadTable(\'assets/mammals.csv\', \'csv\', \'header\');\n}\n\nfunction setup() {\n  table.setNum(1, \'id\', 1);\n\n  print(table.getColumn(0));\n  //["0", 1, "2"]\n}\n</code>\n</div>'
                  ],
                  alt: 'no image displayed',
                  class: 'p5.Table',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.Table.js',
                  line: 1067,
                  description:
                    '<p>Stores a String value in the Table&#39;s specified row and column.\nThe row is specified by its ID, while the column may be specified\nby either its ID or title.</p>\n',
                  itemtype: 'method',
                  name: 'setString',
                  params: [
                    {
                      name: 'row',
                      description: '<p>row ID</p>\n',
                      type: 'Integer'
                    },
                    {
                      name: 'column',
                      description:
                        '<p>column ID (Number)\n                              or title (String)</p>\n',
                      type: 'String|Integer'
                    },
                    {
                      name: 'value',
                      description: '<p>value to assign</p>\n',
                      type: 'String'
                    }
                  ],
                  example: [
                    "\n<div class=\"norender\"><code>\n// Given the CSV file \"mammals.csv\" in the project's \"assets\" folder:\n//\n// id,species,name\n// 0,Capra hircus,Goat\n// 1,Panthera pardus,Leopard\n// 2,Equus zebra,Zebra\n\nlet table;\n\nfunction preload() {\n  //my table is comma separated value \"csv\"\n  //and has a header specifying the columns labels\n  table = loadTable('assets/mammals.csv', 'csv', 'header');\n}\n\nfunction setup() {\n  //add a row\n  let newRow = table.addRow();\n  newRow.setString('id', table.getRowCount() - 1);\n  newRow.setString('species', 'Canis Lupus');\n  newRow.setString('name', 'Wolf');\n\n  print(table.getArray());\n}\n</code></div>"
                  ],
                  alt: 'no image displayed',
                  class: 'p5.Table',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.Table.js',
                  line: 1112,
                  description:
                    '<p>Retrieves a value from the Table&#39;s specified row and column.\nThe row is specified by its ID, while the column may be specified by\neither its ID or title.</p>\n',
                  itemtype: 'method',
                  name: 'get',
                  params: [
                    {
                      name: 'row',
                      description: '<p>row ID</p>\n',
                      type: 'Integer'
                    },
                    {
                      name: 'column',
                      description:
                        '<p>columnName (string) or\n                                  ID (number)</p>\n',
                      type: 'String|Integer'
                    }
                  ],
                  return: {
                    description: '',
                    type: 'String|Number'
                  },
                  example: [
                    "\n<div class=\"norender\">\n<code>\n// Given the CSV file \"mammals.csv\"\n// in the project's \"assets\" folder:\n//\n// id,species,name\n// 0,Capra hircus,Goat\n// 1,Panthera pardus,Leopard\n// 2,Equus zebra,Zebra\n\nlet table;\n\nfunction preload() {\n  //my table is comma separated value \"csv\"\n  //and has a header specifying the columns labels\n  table = loadTable('assets/mammals.csv', 'csv', 'header');\n}\n\nfunction setup() {\n  print(table.get(0, 1));\n  //Capra hircus\n  print(table.get(0, 'species'));\n  //Capra hircus\n}\n</code>\n</div>"
                  ],
                  alt: 'no image displayed',
                  class: 'p5.Table',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.Table.js',
                  line: 1159,
                  description:
                    '<p>Retrieves a Float value from the Table&#39;s specified row and column.\nThe row is specified by its ID, while the column may be specified by\neither its ID or title.</p>\n',
                  itemtype: 'method',
                  name: 'getNum',
                  params: [
                    {
                      name: 'row',
                      description: '<p>row ID</p>\n',
                      type: 'Integer'
                    },
                    {
                      name: 'column',
                      description:
                        '<p>columnName (string) or\n                                  ID (number)</p>\n',
                      type: 'String|Integer'
                    }
                  ],
                  return: {
                    description: '',
                    type: 'Number'
                  },
                  example: [
                    '\n<div class="norender">\n<code>\n// Given the CSV file "mammals.csv"\n// in the project\'s "assets" folder:\n//\n// id,species,name\n// 0,Capra hircus,Goat\n// 1,Panthera pardus,Leopard\n// 2,Equus zebra,Zebra\n\nlet table;\n\nfunction preload() {\n  //my table is comma separated value "csv"\n  //and has a header specifying the columns labels\n  table = loadTable(\'assets/mammals.csv\', \'csv\', \'header\');\n}\n\nfunction setup() {\n  print(table.getNum(1, 0) + 100);\n  //id 1 + 100 = 101\n}\n</code>\n</div>'
                  ],
                  alt: 'no image displayed',
                  class: 'p5.Table',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.Table.js',
                  line: 1204,
                  description:
                    '<p>Retrieves a String value from the Table&#39;s specified row and column.\nThe row is specified by its ID, while the column may be specified by\neither its ID or title.</p>\n',
                  itemtype: 'method',
                  name: 'getString',
                  params: [
                    {
                      name: 'row',
                      description: '<p>row ID</p>\n',
                      type: 'Integer'
                    },
                    {
                      name: 'column',
                      description:
                        '<p>columnName (string) or\n                                  ID (number)</p>\n',
                      type: 'String|Integer'
                    }
                  ],
                  return: {
                    description: '',
                    type: 'String'
                  },
                  example: [
                    '\n<div class="norender">\n<code>\n// Given the CSV file "mammals.csv"\n// in the project\'s "assets" folder:\n//\n// id,species,name\n// 0,Capra hircus,Goat\n// 1,Panthera pardus,Leopard\n// 2,Equus zebra,Zebra\n\nlet table;\n\nfunction preload() {\n  // table is comma separated value "CSV"\n  // and has specifiying header for column labels\n  table = loadTable(\'assets/mammals.csv\', \'csv\', \'header\');\n}\n\nfunction setup() {\n  print(table.getString(0, 0)); // 0\n  print(table.getString(0, 1)); // Capra hircus\n  print(table.getString(0, 2)); // Goat\n  print(table.getString(1, 0)); // 1\n  print(table.getString(1, 1)); // Panthera pardus\n  print(table.getString(1, 2)); // Leopard\n  print(table.getString(2, 0)); // 2\n  print(table.getString(2, 1)); // Equus zebra\n  print(table.getString(2, 2)); // Zebra\n}\n</code>\n</div>'
                  ],
                  alt: 'no image displayed',
                  class: 'p5.Table',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.Table.js',
                  line: 1257,
                  description:
                    '<p>Retrieves all table data and returns as an object. If a column name is\npassed in, each row object will be stored with that attribute as its\ntitle.</p>\n',
                  itemtype: 'method',
                  name: 'getObject',
                  params: [
                    {
                      name: 'headerColumn',
                      description:
                        '<p>Name of the column which should be used to\n                             title each row object (optional)</p>\n',
                      type: 'String',
                      optional: true
                    }
                  ],
                  return: {
                    description: '',
                    type: 'Object'
                  },
                  example: [
                    '\n<div class="norender">\n<code>\n// Given the CSV file "mammals.csv"\n// in the project\'s "assets" folder:\n//\n// id,species,name\n// 0,Capra hircus,Goat\n// 1,Panthera pardus,Leopard\n// 2,Equus zebra,Zebra\n\nlet table;\n\nfunction preload() {\n  //my table is comma separated value "csv"\n  //and has a header specifying the columns labels\n  table = loadTable(\'assets/mammals.csv\', \'csv\', \'header\');\n}\n\nfunction setup() {\n  let tableObject = table.getObject();\n\n  print(tableObject);\n  //outputs an object\n}\n</code>\n</div>'
                  ],
                  alt: 'no image displayed',
                  class: 'p5.Table',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.Table.js',
                  line: 1321,
                  description:
                    '<p>Retrieves all table data and returns it as a multidimensional array.</p>\n',
                  itemtype: 'method',
                  name: 'getArray',
                  return: {
                    description: '',
                    type: 'Array'
                  },
                  example: [
                    '\n<div class="norender">\n<code>\n// Given the CSV file "mammals.csv"\n// in the project\'s "assets" folder\n//\n// id,species,name\n// 0,Capra hircus,Goat\n// 1,Panthera pardus,Leoperd\n// 2,Equus zebra,Zebra\n\nlet table;\n\nfunction preload() {\n  // table is comma separated value "CSV"\n  // and has specifiying header for column labels\n  table = loadTable(\'assets/mammals.csv\', \'csv\', \'header\');\n}\n\nfunction setup() {\n  let tableArray = table.getArray();\n  for (let i = 0; i < tableArray.length; i++) {\n    print(tableArray[i]);\n  }\n}\n</code>\n</div>'
                  ],
                  alt: 'no image displayed',
                  class: 'p5.Table',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.TableRow.js',
                  line: 40,
                  description:
                    '<p>Stores a value in the TableRow&#39;s specified column.\nThe column may be specified by either its ID or title.</p>\n',
                  itemtype: 'method',
                  name: 'set',
                  params: [
                    {
                      name: 'column',
                      description:
                        '<p>Column ID (Number)\n                              or Title (String)</p>\n',
                      type: 'String|Integer'
                    },
                    {
                      name: 'value',
                      description: '<p>The value to be stored</p>\n',
                      type: 'String|Number'
                    }
                  ],
                  example: [
                    "\n <div class=\"norender\"><code>\n // Given the CSV file \"mammals.csv\" in the project's \"assets\" folder:\n //\n // id,species,name\n // 0,Capra hircus,Goat\n // 1,Panthera pardus,Leopard\n // 2,Equus zebra,Zebra\n\n let table;\n\n function preload() {\n //my table is comma separated value \"csv\"\n //and has a header specifying the columns labels\n table = loadTable('assets/mammals.csv', 'csv', 'header');\n }\n\n function setup() {\n let rows = table.getRows();\n for (let r = 0; r < rows.length; r++) {\n   rows[r].set('name', 'Unicorn');\n }\n\n //print the results\n print(table.getArray());\n }\n </code></div>"
                  ],
                  alt: 'no image displayed',
                  class: 'p5.TableRow',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.TableRow.js',
                  line: 102,
                  description:
                    '<p>Stores a Float value in the TableRow&#39;s specified column.\nThe column may be specified by either its ID or title.</p>\n',
                  itemtype: 'method',
                  name: 'setNum',
                  params: [
                    {
                      name: 'column',
                      description:
                        '<p>Column ID (Number)\n                              or Title (String)</p>\n',
                      type: 'String|Integer'
                    },
                    {
                      name: 'value',
                      description:
                        '<p>The value to be stored\n                              as a Float</p>\n',
                      type: 'Number|String'
                    }
                  ],
                  example: [
                    "\n <div class=\"norender\"><code>\n // Given the CSV file \"mammals.csv\" in the project's \"assets\" folder:\n //\n // id,species,name\n // 0,Capra hircus,Goat\n // 1,Panthera pardus,Leopard\n // 2,Equus zebra,Zebra\n\n let table;\n\n function preload() {\n //my table is comma separated value \"csv\"\n //and has a header specifying the columns labels\n table = loadTable('assets/mammals.csv', 'csv', 'header');\n }\n\n function setup() {\n let rows = table.getRows();\n for (let r = 0; r < rows.length; r++) {\n   rows[r].setNum('id', r + 10);\n }\n\n print(table.getArray());\n }\n </code></div>"
                  ],
                  alt: 'no image displayed',
                  class: 'p5.TableRow',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.TableRow.js',
                  line: 146,
                  description:
                    '<p>Stores a String value in the TableRow&#39;s specified column.\nThe column may be specified by either its ID or title.</p>\n',
                  itemtype: 'method',
                  name: 'setString',
                  params: [
                    {
                      name: 'column',
                      description:
                        '<p>Column ID (Number)\n                              or Title (String)</p>\n',
                      type: 'String|Integer'
                    },
                    {
                      name: 'value',
                      description:
                        '<p>The value to be stored\n                              as a String</p>\n',
                      type: 'String|Number|Boolean|Object'
                    }
                  ],
                  example: [
                    "\n <div class=\"norender\"><code>\n // Given the CSV file \"mammals.csv\" in the project's \"assets\" folder:\n //\n // id,species,name\n // 0,Capra hircus,Goat\n // 1,Panthera pardus,Leopard\n // 2,Equus zebra,Zebra\n\n let table;\n\n function preload() {\n //my table is comma separated value \"csv\"\n //and has a header specifying the columns labels\n table = loadTable('assets/mammals.csv', 'csv', 'header');\n }\n\n function setup() {\n let rows = table.getRows();\n for (let r = 0; r < rows.length; r++) {\n   let name = rows[r].getString('name');\n   rows[r].setString('name', 'A ' + name + ' named George');\n }\n\n print(table.getArray());\n }\n </code></div>"
                  ],
                  alt: 'no image displayed',
                  class: 'p5.TableRow',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.TableRow.js',
                  line: 191,
                  description:
                    '<p>Retrieves a value from the TableRow&#39;s specified column.\nThe column may be specified by either its ID or title.</p>\n',
                  itemtype: 'method',
                  name: 'get',
                  params: [
                    {
                      name: 'column',
                      description:
                        '<p>columnName (string) or\n                                 ID (number)</p>\n',
                      type: 'String|Integer'
                    }
                  ],
                  return: {
                    description: '',
                    type: 'String|Number'
                  },
                  example: [
                    "\n <div class=\"norender\"><code>\n // Given the CSV file \"mammals.csv\" in the project's \"assets\" folder:\n //\n // id,species,name\n // 0,Capra hircus,Goat\n // 1,Panthera pardus,Leopard\n // 2,Equus zebra,Zebra\n\n let table;\n\n function preload() {\n //my table is comma separated value \"csv\"\n //and has a header specifying the columns labels\n table = loadTable('assets/mammals.csv', 'csv', 'header');\n }\n\n function setup() {\n let names = [];\n let rows = table.getRows();\n for (let r = 0; r < rows.length; r++) {\n   names.push(rows[r].get('name'));\n }\n\n print(names);\n }\n </code></div>"
                  ],
                  alt: 'no image displayed',
                  class: 'p5.TableRow',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.TableRow.js',
                  line: 239,
                  description:
                    '<p>Retrieves a Float value from the TableRow&#39;s specified\ncolumn. The column may be specified by either its ID or\ntitle.</p>\n',
                  itemtype: 'method',
                  name: 'getNum',
                  params: [
                    {
                      name: 'column',
                      description:
                        '<p>columnName (string) or\n                                 ID (number)</p>\n',
                      type: 'String|Integer'
                    }
                  ],
                  return: {
                    description: 'Float Floating point number',
                    type: 'Number'
                  },
                  example: [
                    "\n <div class=\"norender\"><code>\n // Given the CSV file \"mammals.csv\" in the project's \"assets\" folder:\n //\n // id,species,name\n // 0,Capra hircus,Goat\n // 1,Panthera pardus,Leopard\n // 2,Equus zebra,Zebra\n\n let table;\n\n function preload() {\n //my table is comma separated value \"csv\"\n //and has a header specifying the columns labels\n table = loadTable('assets/mammals.csv', 'csv', 'header');\n }\n\n function setup() {\n let rows = table.getRows();\n let minId = Infinity;\n let maxId = -Infinity;\n for (let r = 0; r < rows.length; r++) {\n   let id = rows[r].getNum('id');\n   minId = min(minId, id);\n   maxId = min(maxId, id);\n }\n print('minimum id = ' + minId + ', maximum id = ' + maxId);\n }\n </code></div>"
                  ],
                  alt: 'no image displayed',
                  class: 'p5.TableRow',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.TableRow.js',
                  line: 295,
                  description:
                    '<p>Retrieves an String value from the TableRow&#39;s specified\ncolumn. The column may be specified by either its ID or\ntitle.</p>\n',
                  itemtype: 'method',
                  name: 'getString',
                  params: [
                    {
                      name: 'column',
                      description:
                        '<p>columnName (string) or\n                                 ID (number)</p>\n',
                      type: 'String|Integer'
                    }
                  ],
                  return: {
                    description: 'String',
                    type: 'String'
                  },
                  example: [
                    "\n <div class=\"norender\"><code>\n // Given the CSV file \"mammals.csv\" in the project's \"assets\" folder:\n //\n // id,species,name\n // 0,Capra hircus,Goat\n // 1,Panthera pardus,Leopard\n // 2,Equus zebra,Zebra\n\n let table;\n\n function preload() {\n //my table is comma separated value \"csv\"\n //and has a header specifying the columns labels\n table = loadTable('assets/mammals.csv', 'csv', 'header');\n }\n\n function setup() {\n let rows = table.getRows();\n let longest = '';\n for (let r = 0; r < rows.length; r++) {\n   let species = rows[r].getString('species');\n   if (longest.length < species.length) {\n     longest = species;\n   }\n }\n\n print('longest: ' + longest);\n }\n </code></div>"
                  ],
                  alt: 'no image displayed',
                  class: 'p5.TableRow',
                  module: 'IO',
                  submodule: 'Table'
                },
                {
                  file: 'src/io/p5.XML.js',
                  line: 63,
                  description:
                    '<p>Gets a copy of the element&#39;s parent. Returns the parent as another\n<a href="#/p5.XML">p5.XML</a> object.</p>\n',
                  itemtype: 'method',
                  name: 'getParent',
                  return: {
                    description: 'element parent',
                    type: 'p5.XML'
                  },
                  example: [
                    '\n<div class=\'norender\'><code>\n// The following short XML file called "mammals.xml" is parsed\n// in the code below.\n//\n// <?xml version="1.0"?>\n// &lt;mammals&gt;\n//   &lt;animal id="0" species="Capra hircus">Goat&lt;/animal&gt;\n//   &lt;animal id="1" species="Panthera pardus">Leopard&lt;/animal&gt;\n//   &lt;animal id="2" species="Equus zebra">Zebra&lt;/animal&gt;\n// &lt;/mammals&gt;\n\nlet xml;\n\nfunction preload() {\n  xml = loadXML(\'assets/mammals.xml\');\n}\n\nfunction setup() {\n  let children = xml.getChildren(\'animal\');\n  let parent = children[1].getParent();\n  print(parent.getName());\n}\n\n// Sketch prints:\n// mammals\n</code></div>'
                  ],
                  class: 'p5.XML',
                  module: 'IO',
                  submodule: 'Input'
                },
                {
                  file: 'src/io/p5.XML.js',
                  line: 101,
                  description:
                    '<p>Gets the element&#39;s full name, which is returned as a String.</p>\n',
                  itemtype: 'method',
                  name: 'getName',
                  return: {
                    description: 'the name of the node',
                    type: 'String'
                  },
                  example: [
                    '&lt;animal\n <div class=\'norender\'><code>\n // The following short XML file called "mammals.xml" is parsed\n // in the code below.\n //\n // <?xml version="1.0"?>\n // &lt;mammals&gt;\n //   &lt;animal id="0" species="Capra hircus">Goat&lt;/animal&gt;\n //   &lt;animal id="1" species="Panthera pardus">Leopard&lt;/animal&gt;\n //   &lt;animal id="2" species="Equus zebra">Zebra&lt;/animal&gt;\n // &lt;/mammals&gt;\n\n let xml;\n\n function preload() {\n xml = loadXML(\'assets/mammals.xml\');\n }\n\n function setup() {\n print(xml.getName());\n }\n\n // Sketch prints:\n // mammals\n </code></div>'
                  ],
                  class: 'p5.XML',
                  module: 'IO',
                  submodule: 'Input'
                },
                {
                  file: 'src/io/p5.XML.js',
                  line: 136,
                  description:
                    '<p>Sets the element&#39;s name, which is specified as a String.</p>\n',
                  itemtype: 'method',
                  name: 'setName',
                  params: [
                    {
                      name: 'the',
                      description: '<p>new name of the node</p>\n',
                      type: 'String'
                    }
                  ],
                  example: [
                    '&lt;animal\n<div class=\'norender\'><code>\n// The following short XML file called "mammals.xml" is parsed\n// in the code below.\n//\n// <?xml version="1.0"?>\n// &lt;mammals&gt;\n//   &lt;animal id="0" species="Capra hircus">Goat&lt;/animal&gt;\n//   &lt;animal id="1" species="Panthera pardus">Leopard&lt;/animal&gt;\n//   &lt;animal id="2" species="Equus zebra">Zebra&lt;/animal&gt;\n// &lt;/mammals&gt;\n\nlet xml;\n\nfunction preload() {\n  xml = loadXML(\'assets/mammals.xml\');\n}\n\nfunction setup() {\n  print(xml.getName());\n  xml.setName(\'fish\');\n  print(xml.getName());\n}\n\n// Sketch prints:\n// mammals\n// fish\n</code></div>'
                  ],
                  class: 'p5.XML',
                  module: 'IO',
                  submodule: 'Input'
                },
                {
                  file: 'src/io/p5.XML.js',
                  line: 182,
                  description:
                    '<p>Checks whether or not the element has any children, and returns the result\nas a boolean.</p>\n',
                  itemtype: 'method',
                  name: 'hasChildren',
                  return: {
                    description: '',
                    type: 'Boolean'
                  },
                  example: [
                    '&lt;animal\n<div class=\'norender\'><code>\n// The following short XML file called "mammals.xml" is parsed\n// in the code below.\n//\n// <?xml version="1.0"?>\n// &lt;mammals&gt;\n//   &lt;animal id="0" species="Capra hircus">Goat&lt;/animal&gt;\n//   &lt;animal id="1" species="Panthera pardus">Leopard&lt;/animal&gt;\n//   &lt;animal id="2" species="Equus zebra">Zebra&lt;/animal&gt;\n// &lt;/mammals&gt;\n\nlet xml;\n\nfunction preload() {\n  xml = loadXML(\'assets/mammals.xml\');\n}\n\nfunction setup() {\n  print(xml.hasChildren());\n}\n\n// Sketch prints:\n// true\n</code></div>'
                  ],
                  class: 'p5.XML',
                  module: 'IO',
                  submodule: 'Input'
                },
                {
                  file: 'src/io/p5.XML.js',
                  line: 218,
                  description:
                    '<p>Get the names of all of the element&#39;s children, and returns the names as an\narray of Strings. This is the same as looping through and calling <a href="#/p5.XML/getName">getName()</a>\non each child element individually.</p>\n',
                  itemtype: 'method',
                  name: 'listChildren',
                  return: {
                    description: 'names of the children of the element',
                    type: 'String[]'
                  },
                  example: [
                    '&lt;animal\n<div class=\'norender\'><code>\n// The following short XML file called "mammals.xml" is parsed\n// in the code below.\n//\n// <?xml version="1.0"?>\n// &lt;mammals&gt;\n//   &lt;animal id="0" species="Capra hircus">Goat&lt;/animal&gt;\n//   &lt;animal id="1" species="Panthera pardus">Leopard&lt;/animal&gt;\n//   &lt;animal id="2" species="Equus zebra">Zebra&lt;/animal&gt;\n// &lt;/mammals&gt;\n\nlet xml;\n\nfunction preload() {\n  xml = loadXML(\'assets/mammals.xml\');\n}\n\nfunction setup() {\n  print(xml.listChildren());\n}\n\n// Sketch prints:\n// ["animal", "animal", "animal"]\n</code></div>'
                  ],
                  class: 'p5.XML',
                  module: 'IO',
                  submodule: 'Input'
                },
                {
                  file: 'src/io/p5.XML.js',
                  line: 259,
                  description:
                    '<p>Returns all of the element&#39;s children as an array of <a href="#/p5.XML">p5.XML</a> objects. When\nthe name parameter is specified, then it will return all children that match\nthat name.</p>\n',
                  itemtype: 'method',
                  name: 'getChildren',
                  params: [
                    {
                      name: 'name',
                      description: '<p>element name</p>\n',
                      type: 'String',
                      optional: true
                    }
                  ],
                  return: {
                    description: 'children of the element',
                    type: 'p5.XML[]'
                  },
                  example: [
                    '&lt;animal\n<div class=\'norender\'><code>\n// The following short XML file called "mammals.xml" is parsed\n// in the code below.\n//\n// <?xml version="1.0"?>\n// &lt;mammals&gt;\n//   &lt;animal id="0" species="Capra hircus">Goat&lt;/animal&gt;\n//   &lt;animal id="1" species="Panthera pardus">Leopard&lt;/animal&gt;\n//   &lt;animal id="2" species="Equus zebra">Zebra&lt;/animal&gt;\n// &lt;/mammals&gt;\n\nlet xml;\n\nfunction preload() {\n  xml = loadXML(\'assets/mammals.xml\');\n}\n\nfunction setup() {\n  let animals = xml.getChildren(\'animal\');\n\n  for (let i = 0; i < animals.length; i++) {\n    print(animals[i].getContent());\n  }\n}\n\n// Sketch prints:\n// "Goat"\n// "Leopard"\n// "Zebra"\n</code></div>'
                  ],
                  class: 'p5.XML',
                  module: 'IO',
                  submodule: 'Input'
                },
                {
                  file: 'src/io/p5.XML.js',
                  line: 315,
                  description:
                    '<p>Returns the first of the element&#39;s children that matches the name parameter\nor the child of the given index.It returns undefined if no matching\nchild is found.</p>\n',
                  itemtype: 'method',
                  name: 'getChild',
                  params: [
                    {
                      name: 'name',
                      description: '<p>element name or index</p>\n',
                      type: 'String|Integer'
                    }
                  ],
                  return: {
                    description: '',
                    type: 'p5.XML'
                  },
                  example: [
                    '&lt;animal\n<div class=\'norender\'><code>\n// The following short XML file called "mammals.xml" is parsed\n// in the code below.\n//\n// <?xml version="1.0"?>\n// &lt;mammals&gt;\n//   &lt;animal id="0" species="Capra hircus">Goat&lt;/animal&gt;\n//   &lt;animal id="1" species="Panthera pardus">Leopard&lt;/animal&gt;\n//   &lt;animal id="2" species="Equus zebra">Zebra&lt;/animal&gt;\n// &lt;/mammals&gt;\n\nlet xml;\n\nfunction preload() {\n  xml = loadXML(\'assets/mammals.xml\');\n}\n\nfunction setup() {\n  let firstChild = xml.getChild(\'animal\');\n  print(firstChild.getContent());\n}\n\n// Sketch prints:\n// "Goat"\n</code></div>\n<div class=\'norender\'><code>\nlet xml;\n\nfunction preload() {\n  xml = loadXML(\'assets/mammals.xml\');\n}\n\nfunction setup() {\n  let secondChild = xml.getChild(1);\n  print(secondChild.getContent());\n}\n\n// Sketch prints:\n// "Leopard"\n</code></div>'
                  ],
                  class: 'p5.XML',
                  module: 'IO',
                  submodule: 'Input'
                },
                {
                  file: 'src/io/p5.XML.js',
                  line: 375,
                  description:
                    '<p>Appends a new child to the element. The child can be specified with\neither a String, which will be used as the new tag&#39;s name, or as a\nreference to an existing <a href="#/p5.XML">p5.XML</a> object.\nA reference to the newly created child is returned as an <a href="#/p5.XML">p5.XML</a> object.</p>\n',
                  itemtype: 'method',
                  name: 'addChild',
                  params: [
                    {
                      name: 'node',
                      description:
                        '<p>a <a href="#/p5.XML">p5.XML</a> Object which will be the child to be added</p>\n',
                      type: 'p5.XML'
                    }
                  ],
                  example: [
                    '\n<div class=\'norender\'><code>\n// The following short XML file called "mammals.xml" is parsed\n// in the code below.\n//\n// <?xml version="1.0"?>\n// &lt;mammals&gt;\n//   &lt;animal id="0" species="Capra hircus">Goat&lt;/animal&gt;\n//   &lt;animal id="1" species="Panthera pardus">Leopard&lt;/animal&gt;\n//   &lt;animal id="2" species="Equus zebra">Zebra&lt;/animal&gt;\n// &lt;/mammals&gt;\n\nlet xml;\n\nfunction preload() {\n  xml = loadXML(\'assets/mammals.xml\');\n}\n\nfunction setup() {\n  let child = new p5.XML();\n  child.setName(\'animal\');\n  child.setAttribute(\'id\', \'3\');\n  child.setAttribute(\'species\', \'Ornithorhynchus anatinus\');\n  child.setContent(\'Platypus\');\n  xml.addChild(child);\n\n  let animals = xml.getChildren(\'animal\');\n  print(animals[animals.length - 1].getContent());\n}\n\n// Sketch prints:\n// "Goat"\n// "Leopard"\n// "Zebra"\n</code></div>'
                  ],
                  class: 'p5.XML',
                  module: 'IO',
                  submodule: 'Input'
                },
                {
                  file: 'src/io/p5.XML.js',
                  line: 427,
                  description: '<p>Removes the element specified by name or index.</p>\n',
                  itemtype: 'method',
                  name: 'removeChild',
                  params: [
                    {
                      name: 'name',
                      description: '<p>element name or index</p>\n',
                      type: 'String|Integer'
                    }
                  ],
                  example: [
                    '\n<div class=\'norender\'><code>\n// The following short XML file called "mammals.xml" is parsed\n// in the code below.\n//\n// <?xml version="1.0"?>\n// &lt;mammals&gt;\n//   &lt;animal id="0" species="Capra hircus">Goat&lt;/animal&gt;\n//   &lt;animal id="1" species="Panthera pardus">Leopard&lt;/animal&gt;\n//   &lt;animal id="2" species="Equus zebra">Zebra&lt;/animal&gt;\n// &lt;/mammals&gt;\n\nlet xml;\n\nfunction preload() {\n  xml = loadXML(\'assets/mammals.xml\');\n}\n\nfunction setup() {\n  xml.removeChild(\'animal\');\n  let children = xml.getChildren();\n  for (let i = 0; i < children.length; i++) {\n    print(children[i].getContent());\n  }\n}\n\n// Sketch prints:\n// "Leopard"\n// "Zebra"\n</code></div>\n<div class=\'norender\'><code>\nlet xml;\n\nfunction preload() {\n  xml = loadXML(\'assets/mammals.xml\');\n}\n\nfunction setup() {\n  xml.removeChild(1);\n  let children = xml.getChildren();\n  for (let i = 0; i < children.length; i++) {\n    print(children[i].getContent());\n  }\n}\n\n// Sketch prints:\n// "Goat"\n// "Zebra"\n</code></div>'
                  ],
                  class: 'p5.XML',
                  module: 'IO',
                  submodule: 'Input'
                },
                {
                  file: 'src/io/p5.XML.js',
                  line: 499,
                  description:
                    '<p>Counts the specified element&#39;s number of attributes, returned as an Number.</p>\n',
                  itemtype: 'method',
                  name: 'getAttributeCount',
                  return: {
                    description: '',
                    type: 'Integer'
                  },
                  example: [
                    '\n<div class=\'norender\'><code>\n// The following short XML file called "mammals.xml" is parsed\n// in the code below.\n//\n// <?xml version="1.0"?>\n// &lt;mammals&gt;\n//   &lt;animal id="0" species="Capra hircus">Goat&lt;/animal&gt;\n//   &lt;animal id="1" species="Panthera pardus">Leopard&lt;/animal&gt;\n//   &lt;animal id="2" species="Equus zebra">Zebra&lt;/animal&gt;\n// &lt;/mammals&gt;\n\nlet xml;\n\nfunction preload() {\n  xml = loadXML(\'assets/mammals.xml\');\n}\n\nfunction setup() {\n  let firstChild = xml.getChild(\'animal\');\n  print(firstChild.getAttributeCount());\n}\n\n// Sketch prints:\n// 2\n</code></div>'
                  ],
                  class: 'p5.XML',
                  module: 'IO',
                  submodule: 'Input'
                },
                {
                  file: 'src/io/p5.XML.js',
                  line: 535,
                  description:
                    '<p>Gets all of the specified element&#39;s attributes, and returns them as an\narray of Strings.</p>\n',
                  itemtype: 'method',
                  name: 'listAttributes',
                  return: {
                    description: 'an array of strings containing the names of attributes',
                    type: 'String[]'
                  },
                  example: [
                    '\n<div class=\'norender\'><code>\n// The following short XML file called "mammals.xml" is parsed\n// in the code below.\n//\n// <?xml version="1.0"?>\n// &lt;mammals&gt;\n//   &lt;animal id="0" species="Capra hircus">Goat&lt;/animal&gt;\n//   &lt;animal id="1" species="Panthera pardus">Leopard&lt;/animal&gt;\n//   &lt;animal id="2" species="Equus zebra">Zebra&lt;/animal&gt;\n// &lt;/mammals&gt;\n\nlet xml;\n\nfunction preload() {\n  xml = loadXML(\'assets/mammals.xml\');\n}\n\nfunction setup() {\n  let firstChild = xml.getChild(\'animal\');\n  print(firstChild.listAttributes());\n}\n\n// Sketch prints:\n// ["id", "species"]\n</code></div>'
                  ],
                  class: 'p5.XML',
                  module: 'IO',
                  submodule: 'Input'
                },
                {
                  file: 'src/io/p5.XML.js',
                  line: 578,
                  description:
                    '<p>Checks whether or not an element has the specified attribute.</p>\n',
                  itemtype: 'method',
                  name: 'hasAttribute',
                  params: [
                    {
                      name: 'the',
                      description: '<p>attribute to be checked</p>\n',
                      type: 'String'
                    }
                  ],
                  return: {
                    description: 'true if attribute found else false',
                    type: 'Boolean'
                  },
                  example: [
                    '\n <div class=\'norender\'><code>\n // The following short XML file called "mammals.xml" is parsed\n // in the code below.\n //\n // <?xml version="1.0"?>\n // &lt;mammals&gt;\n //   &lt;animal id="0" species="Capra hircus">Goat&lt;/animal&gt;\n //   &lt;animal id="1" species="Panthera pardus">Leopard&lt;/animal&gt;\n //   &lt;animal id="2" species="Equus zebra">Zebra&lt;/animal&gt;\n // &lt;/mammals&gt;\n\n let xml;\n\n function preload() {\n xml = loadXML(\'assets/mammals.xml\');\n }\n\n function setup() {\n let firstChild = xml.getChild(\'animal\');\n print(firstChild.hasAttribute(\'species\'));\n print(firstChild.hasAttribute(\'color\'));\n }\n\n // Sketch prints:\n // true\n // false\n </code></div>'
                  ],
                  class: 'p5.XML',
                  module: 'IO',
                  submodule: 'Input'
                },
                {
                  file: 'src/io/p5.XML.js',
                  line: 623,
                  description:
                    '<p>Returns an attribute value of the element as an Number. If the defaultValue\nparameter is specified and the attribute doesn&#39;t exist, then defaultValue\nis returned. If no defaultValue is specified and the attribute doesn&#39;t\nexist, the value 0 is returned.</p>\n',
                  itemtype: 'method',
                  name: 'getNum',
                  params: [
                    {
                      name: 'name',
                      description: '<p>the non-null full name of the attribute</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'defaultValue',
                      description: '<p>the default value of the attribute</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  return: {
                    description: '',
                    type: 'Number'
                  },
                  example: [
                    '\n<div class=\'norender\'><code>\n// The following short XML file called "mammals.xml" is parsed\n// in the code below.\n//\n// <?xml version="1.0"?>\n// &lt;mammals&gt;\n//   &lt;animal id="0" species="Capra hircus">Goat&lt;/animal&gt;\n//   &lt;animal id="1" species="Panthera pardus">Leopard&lt;/animal&gt;\n//   &lt;animal id="2" species="Equus zebra">Zebra&lt;/animal&gt;\n// &lt;/mammals&gt;\n\nlet xml;\n\nfunction preload() {\n  xml = loadXML(\'assets/mammals.xml\');\n}\n\nfunction setup() {\n  let firstChild = xml.getChild(\'animal\');\n  print(firstChild.getNum(\'id\'));\n}\n\n// Sketch prints:\n// 0\n</code></div>'
                  ],
                  class: 'p5.XML',
                  module: 'IO',
                  submodule: 'Input'
                },
                {
                  file: 'src/io/p5.XML.js',
                  line: 670,
                  description:
                    '<p>Returns an attribute value of the element as an String. If the defaultValue\nparameter is specified and the attribute doesn&#39;t exist, then defaultValue\nis returned. If no defaultValue is specified and the attribute doesn&#39;t\nexist, null is returned.</p>\n',
                  itemtype: 'method',
                  name: 'getString',
                  params: [
                    {
                      name: 'name',
                      description: '<p>the non-null full name of the attribute</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'defaultValue',
                      description: '<p>the default value of the attribute</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  return: {
                    description: '',
                    type: 'String'
                  },
                  example: [
                    '\n<div class=\'norender\'><code>\n// The following short XML file called "mammals.xml" is parsed\n// in the code below.\n//\n// <?xml version="1.0"?>\n// &lt;mammals&gt;\n//   &lt;animal id="0" species="Capra hircus">Goat&lt;/animal&gt;\n//   &lt;animal id="1" species="Panthera pardus">Leopard&lt;/animal&gt;\n//   &lt;animal id="2" species="Equus zebra">Zebra&lt;/animal&gt;\n// &lt;/mammals&gt;\n\nlet xml;\n\nfunction preload() {\n  xml = loadXML(\'assets/mammals.xml\');\n}\n\nfunction setup() {\n  let firstChild = xml.getChild(\'animal\');\n  print(firstChild.getString(\'species\'));\n}\n\n// Sketch prints:\n// "Capra hircus"\n</code></div>'
                  ],
                  class: 'p5.XML',
                  module: 'IO',
                  submodule: 'Input'
                },
                {
                  file: 'src/io/p5.XML.js',
                  line: 717,
                  description:
                    '<p>Sets the content of an element&#39;s attribute. The first parameter specifies\nthe attribute name, while the second specifies the new content.</p>\n',
                  itemtype: 'method',
                  name: 'setAttribute',
                  params: [
                    {
                      name: 'name',
                      description: '<p>the full name of the attribute</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'value',
                      description: '<p>the value of the attribute</p>\n',
                      type: 'Number|String|Boolean'
                    }
                  ],
                  example: [
                    '\n<div class=\'norender\'><code>\n// The following short XML file called "mammals.xml" is parsed\n// in the code below.\n//\n// <?xml version="1.0"?>\n// &lt;mammals&gt;\n//   &lt;animal id="0" species="Capra hircus">Goat&lt;/animal&gt;\n//   &lt;animal id="1" species="Panthera pardus">Leopard&lt;/animal&gt;\n//   &lt;animal id="2" species="Equus zebra">Zebra&lt;/animal&gt;\n// &lt;/mammals&gt;\n\nlet xml;\n\nfunction preload() {\n  xml = loadXML(\'assets/mammals.xml\');\n}\n\nfunction setup() {\n  let firstChild = xml.getChild(\'animal\');\n  print(firstChild.getString(\'species\'));\n  firstChild.setAttribute(\'species\', \'Jamides zebra\');\n  print(firstChild.getString(\'species\'));\n}\n\n// Sketch prints:\n// "Capra hircus"\n// "Jamides zebra"\n</code></div>'
                  ],
                  class: 'p5.XML',
                  module: 'IO',
                  submodule: 'Input'
                },
                {
                  file: 'src/io/p5.XML.js',
                  line: 758,
                  description:
                    '<p>Returns the content of an element. If there is no such content,\ndefaultValue is returned if specified, otherwise null is returned.</p>\n',
                  itemtype: 'method',
                  name: 'getContent',
                  params: [
                    {
                      name: 'defaultValue',
                      description: '<p>value returned if no content is found</p>\n',
                      type: 'String',
                      optional: true
                    }
                  ],
                  return: {
                    description: '',
                    type: 'String'
                  },
                  example: [
                    '\n<div class=\'norender\'><code>\n// The following short XML file called "mammals.xml" is parsed\n// in the code below.\n//\n// <?xml version="1.0"?>\n// &lt;mammals&gt;\n//   &lt;animal id="0" species="Capra hircus">Goat&lt;/animal&gt;\n//   &lt;animal id="1" species="Panthera pardus">Leopard&lt;/animal&gt;\n//   &lt;animal id="2" species="Equus zebra">Zebra&lt;/animal&gt;\n// &lt;/mammals&gt;\n\nlet xml;\n\nfunction preload() {\n  xml = loadXML(\'assets/mammals.xml\');\n}\n\nfunction setup() {\n  let firstChild = xml.getChild(\'animal\');\n  print(firstChild.getContent());\n}\n\n// Sketch prints:\n// "Goat"\n</code></div>'
                  ],
                  class: 'p5.XML',
                  module: 'IO',
                  submodule: 'Input'
                },
                {
                  file: 'src/io/p5.XML.js',
                  line: 799,
                  description: '<p>Sets the element&#39;s content.</p>\n',
                  itemtype: 'method',
                  name: 'setContent',
                  params: [
                    {
                      name: 'text',
                      description: '<p>the new content</p>\n',
                      type: 'String'
                    }
                  ],
                  example: [
                    '\n<div class=\'norender\'><code>\n// The following short XML file called "mammals.xml" is parsed\n// in the code below.\n//\n// <?xml version="1.0"?>\n// &lt;mammals&gt;\n//   &lt;animal id="0" species="Capra hircus">Goat&lt;/animal&gt;\n//   &lt;animal id="1" species="Panthera pardus">Leopard&lt;/animal&gt;\n//   &lt;animal id="2" species="Equus zebra">Zebra&lt;/animal&gt;\n// &lt;/mammals&gt;\n\nlet xml;\n\nfunction preload() {\n  xml = loadXML(\'assets/mammals.xml\');\n}\n\nfunction setup() {\n  let firstChild = xml.getChild(\'animal\');\n  print(firstChild.getContent());\n  firstChild.setContent(\'Mountain Goat\');\n  print(firstChild.getContent());\n}\n\n// Sketch prints:\n// "Goat"\n// "Mountain Goat"\n</code></div>'
                  ],
                  class: 'p5.XML',
                  module: 'IO',
                  submodule: 'Input'
                },
                {
                  file: 'src/io/p5.XML.js',
                  line: 840,
                  description:
                    '<p>Serializes the element into a string. This function is useful for preparing\nthe content to be sent over a http request or saved to file.</p>\n',
                  itemtype: 'method',
                  name: 'serialize',
                  return: {
                    description: 'Serialized string of the element',
                    type: 'String'
                  },
                  example: [
                    '\n<div class=\'norender\'><code>\nlet xml;\n\nfunction preload() {\n  xml = loadXML(\'assets/mammals.xml\');\n}\n\nfunction setup() {\n  print(xml.serialize());\n}\n\n// Sketch prints:\n// <mammals>\n//   <animal id="0" species="Capra hircus">Goat</animal>\n//   <animal id="1" species="Panthera pardus">Leopard</animal>\n//   <animal id="2" species="Equus zebra">Zebra</animal>\n// </mammals>\n</code></div>'
                  ],
                  class: 'p5.XML',
                  module: 'IO',
                  submodule: 'Input'
                },
                {
                  file: 'src/math/calculation.js',
                  line: 10,
                  description:
                    '<p>Calculates the absolute value (magnitude) of a number. Maps to Math.abs().\nThe absolute value of a number is always positive.</p>\n',
                  itemtype: 'method',
                  name: 'abs',
                  params: [
                    {
                      name: 'n',
                      description: '<p>number to compute</p>\n',
                      type: 'Number'
                    }
                  ],
                  return: {
                    description: 'absolute value of given number',
                    type: 'Number'
                  },
                  example: [
                    '\n<div class = "norender"><code>\nfunction setup() {\n  let x = -3;\n  let y = abs(x);\n\n  print(x); // -3\n  print(y); // 3\n}\n</code></div>'
                  ],
                  alt: 'no image displayed',
                  class: 'p5',
                  module: 'Math',
                  submodule: 'Calculation'
                },
                {
                  file: 'src/math/calculation.js',
                  line: 34,
                  description:
                    '<p>Calculates the closest int value that is greater than or equal to the\nvalue of the parameter. Maps to Math.ceil(). For example, ceil(9.03)\nreturns the value 10.</p>\n',
                  itemtype: 'method',
                  name: 'ceil',
                  params: [
                    {
                      name: 'n',
                      description: '<p>number to round up</p>\n',
                      type: 'Number'
                    }
                  ],
                  return: {
                    description: 'rounded up number',
                    type: 'Integer'
                  },
                  example: [
                    '\n<div><code>\nfunction draw() {\n  background(200);\n  // map, mouseX between 0 and 5.\n  let ax = map(mouseX, 0, 100, 0, 5);\n  let ay = 66;\n\n  //Get the ceiling of the mapped number.\n  let bx = ceil(map(mouseX, 0, 100, 0, 5));\n  let by = 33;\n\n  // Multiply the mapped numbers by 20 to more easily\n  // see the changes.\n  stroke(0);\n  fill(0);\n  line(0, ay, ax * 20, ay);\n  line(0, by, bx * 20, by);\n\n  // Reformat the float returned by map and draw it.\n  noStroke();\n  text(nfc(ax, 2), ax, ay - 5);\n  text(nfc(bx, 1), bx, by - 5);\n}\n</code></div>'
                  ],
                  alt:
                    '2 horizontal lines & number sets. increase with mouse x. bottom to 2 decimals',
                  class: 'p5',
                  module: 'Math',
                  submodule: 'Calculation'
                },
                {
                  file: 'src/math/calculation.js',
                  line: 74,
                  description:
                    '<p>Constrains a value between a minimum and maximum value.</p>\n',
                  itemtype: 'method',
                  name: 'constrain',
                  params: [
                    {
                      name: 'n',
                      description: '<p>number to constrain</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'low',
                      description: '<p>minimum limit</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'high',
                      description: '<p>maximum limit</p>\n',
                      type: 'Number'
                    }
                  ],
                  return: {
                    description: 'constrained number',
                    type: 'Number'
                  },
                  example: [
                    '\n<div><code>\nfunction draw() {\n  background(200);\n\n  let leftWall = 25;\n  let rightWall = 75;\n\n  // xm is just the mouseX, while\n  // xc is the mouseX, but constrained\n  // between the leftWall and rightWall!\n  let xm = mouseX;\n  let xc = constrain(mouseX, leftWall, rightWall);\n\n  // Draw the walls.\n  stroke(150);\n  line(leftWall, 0, leftWall, height);\n  line(rightWall, 0, rightWall, height);\n\n  // Draw xm and xc as circles.\n  noStroke();\n  fill(150);\n  ellipse(xm, 33, 9, 9); // Not Constrained\n  fill(0);\n  ellipse(xc, 66, 9, 9); // Constrained\n}\n</code></div>'
                  ],
                  alt:
                    '2 vertical lines. 2 ellipses move with mouse X 1 does not move passed lines',
                  class: 'p5',
                  module: 'Math',
                  submodule: 'Calculation'
                },
                {
                  file: 'src/math/calculation.js',
                  line: 119,
                  description:
                    '<p>Calculates the distance between two points, in either two or three dimensions.</p>\n',
                  itemtype: 'method',
                  name: 'dist',
                  return: {
                    description: 'distance between the two points',
                    type: 'Number'
                  },
                  example: [
                    "\n<div><code>\n// Move your mouse inside the canvas to see the\n// change in distance between two points!\nfunction draw() {\n  background(200);\n  fill(0);\n\n  let x1 = 10;\n  let y1 = 90;\n  let x2 = mouseX;\n  let y2 = mouseY;\n\n  line(x1, y1, x2, y2);\n  ellipse(x1, y1, 7, 7);\n  ellipse(x2, y2, 7, 7);\n\n  // d is the length of the line\n  // the distance from point 1 to point 2.\n  let d = int(dist(x1, y1, x2, y2));\n\n  // Let's write d along the line we are drawing!\n  push();\n  translate((x1 + x2) / 2, (y1 + y2) / 2);\n  rotate(atan2(y2 - y1, x2 - x1));\n  text(nfc(d, 1), 0, -5);\n  pop();\n  // Fancy!\n}\n</code></div>"
                  ],
                  alt:
                    '2 ellipses joined by line. 1 ellipse moves with mouse X&Y. Distance displayed.',
                  class: 'p5',
                  module: 'Math',
                  submodule: 'Calculation',
                  overloads: [
                    {
                      line: 119,
                      params: [
                        {
                          name: 'x1',
                          description: '<p>x-coordinate of the first point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y1',
                          description: '<p>y-coordinate of the first point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x2',
                          description: '<p>x-coordinate of the second point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y2',
                          description: '<p>y-coordinate of the second point</p>\n',
                          type: 'Number'
                        }
                      ],
                      return: {
                        description: 'distance between the two points',
                        type: 'Number'
                      }
                    },
                    {
                      line: 163,
                      params: [
                        {
                          name: 'x1',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y1',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z1',
                          description: '<p>z-coordinate of the first point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x2',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y2',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z2',
                          description: '<p>z-coordinate of the second point</p>\n',
                          type: 'Number'
                        }
                      ],
                      return: {
                        description: 'distance between the two points',
                        type: 'Number'
                      }
                    }
                  ]
                },
                {
                  file: 'src/math/calculation.js',
                  line: 184,
                  description:
                    '<p>Returns Euler&#39;s number e (2.71828...) raised to the power of the n\nparameter. Maps to Math.exp().</p>\n',
                  itemtype: 'method',
                  name: 'exp',
                  params: [
                    {
                      name: 'n',
                      description: '<p>exponent to raise</p>\n',
                      type: 'Number'
                    }
                  ],
                  return: {
                    description: 'e^n',
                    type: 'Number'
                  },
                  example: [
                    "\n<div><code>\nfunction draw() {\n  background(200);\n\n  // Compute the exp() function with a value between 0 and 2\n  let xValue = map(mouseX, 0, width, 0, 2);\n  let yValue = exp(xValue);\n\n  let y = map(yValue, 0, 8, height, 0);\n\n  let legend = 'exp (' + nfc(xValue, 3) + ')\\n= ' + nf(yValue, 1, 4);\n  stroke(150);\n  line(mouseX, y, mouseX, height);\n  fill(0);\n  text(legend, 5, 15);\n  noStroke();\n  ellipse(mouseX, y, 7, 7);\n\n  // Draw the exp(x) curve,\n  // over the domain of x from 0 to 2\n  noFill();\n  stroke(0);\n  beginShape();\n  for (let x = 0; x < width; x++) {\n    xValue = map(x, 0, width, 0, 2);\n    yValue = exp(xValue);\n    y = map(yValue, 0, 8, height, 0);\n    vertex(x, y);\n  }\n\n  endShape();\n  line(0, 0, 0, height);\n  line(0, height - 1, width, height - 1);\n}\n</code></div>"
                  ],
                  alt: 'ellipse moves along a curve with mouse x. e^n displayed.',
                  class: 'p5',
           