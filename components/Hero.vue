<template>
  <section class="max-w-5xl mx-auto pt-20 grid grid-cols-1 gap-4">
    <h1 class="max-w-2xl font-black text-white text-4xl leading-tight">
      An opinionated but faster modern alternative to tsdx and microbundle
    </h1>
    <p class="text-white opacity-50">An opinionated but faster modern alternative to tsdx and microbundle</p>
    <div class="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
      <div class="bg-gray-900 py-4 px-6 rounded-xl text-sm text-white font-mono flex items-center justify-between">
        <span class="mr-3">yarn global add quickts</span>
        <button @click="copyInstallCommand">
          <svg
            v-if="copying"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-green"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-primary-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
      <span class="text-sm text-white opacity-50">OR</span>
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
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      copying: false,
    }
  },
  methods: {
    copyInstallCommand() {
      this.copying = true
      this.copytoclipboard('yarn global add quickts')
      setTimeout(() => {
        this.copying = false
      }, 1000)
    },
    async copytoclipboard(candidate) {
      try {
        // try the clipboard API
        // https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API
        // This will fail in Firefox
        await navigator.clipboard.writeText(candidate)
      } catch (e) {
        // fallback for firefox
        // Always run inside click event
        const el = document.createElement('input')
        el.value = candidate
        el.select()
        document.execCommand('copy')
        el.remove()
      }
    },
  },
}
</script>
