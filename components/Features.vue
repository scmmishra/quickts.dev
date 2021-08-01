<template>
  <section v-once class="max-w-5xl mx-auto mt-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-2xl">
    <div class="px-20 py-12 max-w-4xl mx-auto">
      <h3 class="text-4xl font-black text-white mb-12 text-center">Zero config, productivity focused</h3>
      <div class="grid grid-cols-3 gap-12">
        <div class="space-y-2">
          <h4 class="text-lg font-bold text-white leading-tight">Fastest Possible Toolchain</h4>
          <p class="text-white opacity-50 text-sm">QuickTS uses ESBuild under the hood, ensuring lightning fast dev builds</p>
        </div>
        <div class="space-y-2">
          <h4 class="text-lg font-bold text-white leading-tight">DeepSource for Code Quality</h4>
          <p class="text-white opacity-50 text-sm">DeepSource helps you write clean code on every pull-request.</p>
        </div>
        <div class="space-y-2">
          <h4 class="text-lg font-bold text-white leading-tight">Github Actions for testing and publishing</h4>
          <p class="text-white opacity-50 text-sm">Preset Action for you to test and publish instantly.</p>
        </div>
        <div class="space-y-2">
          <h4 class="text-lg font-bold text-white leading-tight">API Docs using TypeDoc</h4>
          <p class="text-white opacity-50 text-sm">
            Automatically convert comments in TypeScript source code into rendered HTML documentation.
          </p>
        </div>
        <div class="space-y-2">
          <h4 class="text-lg font-bold text-white leading-tight">Optional CSS Bundling</h4>
          <p class="text-white opacity-50 text-sm">Optionally enable CSS bundling for UI libraries</p>
        </div>
        <div class="space-y-2">
          <h4 class="text-lg font-bold text-white leading-tight">And much more</h4>
          <p class="text-white opacity-50 text-sm">
            QuickTS bootstraps your project with Jest for testing, Prettier and ESLint for maintaing consistent style.
          </p>
        </div>
      </div>
      <div class="bg-white rounded-2xl mt-12 p-12 text-center">
        <h1 class="max-w-2xl font-primary text-3xl font-black leading-tight">Try QuickTS on the command line</h1>
        <div class="mt-8 flex justify-center items-center space-x-4">
          <span class="bg-gray-900 py-4 px-6 rounded-xl text-sm text-white font-mono"> yarn global add quickts </span>
          <span class="text-sm text-gray-800">OR</span>
          <a
            href="https://github.com/scmmishra/quickts"
            target="blank"
            rel="noreferrer noopener"
            class="
              bg-gradient-to-b
              from-primary-500
              to-primary-600
              hover:from-primary-600 hover:to-primary-700
              py-4
              px-8
              rounded-xl
              text-sm
              font-semibold
              text-white
              flex
              items-center
              space-x-3
            "
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            <div>View Source Code</div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
