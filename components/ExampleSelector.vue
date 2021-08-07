<template>
  <section class="max-w-5xl mx-auto pt-20 space-y-8 sm:space-y-12">
    <div class="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-8">
      <button
        v-for="command in commands"
        :key="command"
        class="p-2 rounded-full text-center leading-none font-mono bg-gray-800 border text-white text-xs"
        :class="command === selected ? 'border-primary-500 shadow-md' : 'border-gray-400'"
        @click="() => (selected = command)"
      >
        <span class="hidden sm:inline">quickts</span> {{ command }}
      </button>
    </div>
    <div class="max-w-5xl mx-auto min-h-96">
      <div class="max-w-3xl mx-auto bg-gray-700 p-4 rounded-lg shadow-lg h-96 font-mono text-white overflow-scroll">
        <div class="flex items-center space-x-1.5">
          <span class="h-2.5 w-2.5 rounded-full bg-gray-400"></span>
          <span class="h-2.5 w-2.5 rounded-full bg-gray-400"></span>
          <span class="h-2.5 w-2.5 rounded-full bg-gray-400"></span>
        </div>
        <pre class="text-sm">
          <p v-for="(line, index) in output[selected]" :key="index" v-html="line"></p>
        </pre>
      </div>
    </div>
  </section>
</template>
<script>
const CREATE = [
  '<span class="text-yellow">⚡️</span> QuickTS',
  '<span class="text-transparent"> </span>',
  `<span class="text-green">✔</span> Who is the package author? <span class="text-gray-300">… Shivam Mishra</span>`,
  `<span class="text-green">✔</span> What's your email? <span class="text-gray-400">This will be public</span> <span class="text-gray-300">… quickts@example.com</span>`,
  `<span class="text-green">✔</span> What version is this package on? <span class="text-gray-300">… 1.0.0</span>`,
  `<span class="text-green">✔</span> Select optional features <span class="text-gray-300">› DeepSource - Code Quality, Github Actions - CI</span>`,
  `<span class="text-green">✔</span> Select a License <span class="text-gray-300">› MIT license</span>`,
  `<span class="text-transparent"> </span>`,
  `<span class="text-green">✔</span> Created Project graphique`,
  `<span class="text-cyan">⠹</span> Installing packages:`,
  `    @size-limit/preset-small-lib`,
  `    quickts`,
  `    size-limit`,
  `    tslib`,
  `    typescript`,
]

const GENERATE = [
  '<span class="text-yellow">⚡️</span> QuickTS - Generating Docs',
  `<span class="text-transparent"> </span>`,
  `<span class="text-cyan">⠹</span> Generating API Docs`,
  `<span class="text-green">✔</span> API docs generated in the docs/ folder `,
]

const START = [
  '<span class="text-yellow">⚡️</span> QuickTS - Starting esbuild in watch mode',
  `<span class="text-transparent"> </span>`,
  `Watching this project for changes`,
  `<span class="text-transparent"> </span>`,
  `Detected change in files: <span class="text-green">src/index.ts</span>`,
  `Generated output: <span class="text-green">dist/index.js</span>`,
]

const TEST = [
  '<span class="text-yellow">⚡️</span> QuickTS - Running Jest',
  `<span class="text-transparent"> </span>`,
  `<span class="bg-green text-white px-2">PASS</span> <span class="text-gray-200">tests/index.spec.ts</span>`,
  `<span class="bg-green text-white px-2">PASS</span> <span class="text-gray-200">tests/utils/file.spec.ts</span>`,
  `<span class="bg-green text-white px-2">PASS</span> <span class="text-gray-200">tests/utils/numbers.spec.ts</span>`,
  `<span class="bg-green text-white px-2">PASS</span> <span class="text-gray-200">tests/utils/assets.spec.ts</span>`,
  `<span class="bg-green text-white px-2">PASS</span> <span class="text-gray-200">tests/utils/assets.spec.ts</span>`,
  `<span class="bg-green text-white px-2">PASS</span> <span class="text-gray-200">tests/esbuild/watch.spec.ts</span>`,
  `<span class="text-transparent"> </span>`,
  `Test Suites: <span class="text-green">6 passed</span><span class="text-gray-200">, 6 total</span>`,
  `Test: <span class="text-green">18 passed</span><span class="text-gray-200">, 18 total</span>`,
  `Snapshots: <span class="text-gray-200">0 total</span>`,
  `Time: <span class="text-gray-200">0.878s, estimated 1s</span>`,
  `<span class="text-gray-200">Ran all test suites</span>`,
]
export default {
  name: 'ExampleSelector',
  data() {
    return {
      selected: 'create',
      commands: ['create', 'generate-docs', 'start', 'test'],
      output: {
        create: CREATE,
        'generate-docs': GENERATE,
        start: START,
        test: TEST,
      },
    }
  },
}
</script>
