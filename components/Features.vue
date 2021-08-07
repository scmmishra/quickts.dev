<template>
  <section
    v-once
    class="max-w-5xl mt-20 -mx-4 shadow-2xl sm:mx-auto bg-gradient-to-br from-primary-500 to-primary-600 sm:rounded-2xl"
  >
    <div class="max-w-4xl px-5 py-12 mx-auto sm:px-20">
      <h3 class="mb-12 text-4xl font-black text-center text-white">Zero config, productivity focused</h3>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12">
        <div class="space-y-2">
          <h4 class="text-lg font-bold leading-tight text-white">Fastest Possible Toolchain</h4>
          <p class="text-sm text-white opacity-50">QuickTS uses ESBuild under the hood, ensuring lightning fast dev builds</p>
        </div>
        <div class="space-y-2">
          <h4 class="text-lg font-bold leading-tight text-white">DeepSource for Code Quality</h4>
          <p class="text-sm text-white opacity-50">DeepSource helps you write clean code on every pull-request.</p>
        </div>
        <div class="space-y-2">
          <h4 class="text-lg font-bold leading-tight text-white">Github Actions for testing and publishing</h4>
          <p class="text-sm text-white opacity-50">Preset Action for you to test and publish instantly.</p>
        </div>
        <div class="space-y-2">
          <h4 class="text-lg font-bold leading-tight text-white">API Docs using TypeDoc</h4>
          <p class="text-sm text-white opacity-50">
            Automatically convert comments in TypeScript source code into rendered HTML documentation.
          </p>
        </div>
        <div class="space-y-2">
          <h4 class="text-lg font-bold leading-tight text-white">Optional CSS Bundling</h4>
          <p class="text-sm text-white opacity-50">Optionally enable CSS bundling for UI libraries</p>
        </div>
        <div class="space-y-2">
          <h4 class="text-lg font-bold leading-tight text-white">And much more</h4>
          <p class="text-sm text-white opacity-50">
            QuickTS bootstraps your project with Jest for testing, Prettier and ESLint for maintaing consistent style.
          </p>
        </div>
      </div>
      <div class="p-8 mt-12 bg-white rounded-2xl sm:p-12 sm:text-center">
        <h1 class="max-w-2xl text-3xl font-black leading-tight font-primary">Try QuickTS on the command line</h1>
        <div class="flex flex-col mt-4 space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
          <span class="px-6 py-4 font-mono text-sm text-white bg-gray-900 rounded-xl"> yarn global add quickts </span>
          <span class="text-sm text-gray-800">OR</span>
          <a
            href="https://github.com/scmmishra/quickts"
            target="blank"
            rel="noreferrer noopener"
            class="
              flex
              items-center
              px-8
              py-4
              space-x-3
              text-sm
              font-semibold
              text-white
              bg-gradient-to-b
              from-primary-500
              to-primary-600
              hover:from-primary-600 hover:to-primary-700
              rounded-xl
            "
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
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
