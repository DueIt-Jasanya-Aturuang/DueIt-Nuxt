<template>
    <div class="header">
        <h1>Riwayat</h1>
    </div>
    <div class="section-content bg-white h-full w-full">
        <div class="relative">
            <div class="relative bg-white w-full">
                <h2 class="font-semibold text-[14px]">Pilih Pengeluaran</h2>
                <div class="relative">
                    <select
                        name="spending"
                        class="w-full h-10 mt-2 rounded-md border border-gray-300 text-[16px]"
                    >
                        <option value="all">Hari Ini</option>
                        <option value="konsumsi">Konsumsi</option>
                    </select>
                    <div
                        class="absolute inset-y-0 right-0 flex items-center px-4 pt-3 pointer-events-none"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.99996 13.6094L15.6093 8.00004H4.39062L9.99996 13.6094Z"
                                fill="#C1C0C0"
                            />
                        </svg>
                    </div>
                </div>

                <div class="flex justify-between flex-row py-6">
                    <h2 class="text-[#B6AE03]">Terbaru</h2>
                    <!-- Icon top and down -->
                    <!-- svg icon  -->
                    <svg
                        width="18"
                        height="15"
                        viewBox="0 0 18 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16.875 0H8.80875H1.125C0.826631 0 0.540483 0.146331 0.329505 0.4068C0.118527 0.66727 0 1.02054 0 1.3889C0 1.75726 0.118527 2.11053 0.329505 2.371C0.540483 2.63147 0.826631 2.7778 1.125 2.7778H2.44125H16.875C17.1734 2.7778 17.4595 2.63147 17.6705 2.371C17.8815 2.11053 18 1.75726 18 1.3889C18 1.02054 17.8815 0.66727 17.6705 0.4068C17.4595 0.146331 17.1734 0 16.875 0Z"
                            fill="#B6AE03"
                        />
                        <path
                            d="M10.5469 6.11108H5.50547H0.703125C0.516645 6.11108 0.337802 6.25741 0.205941 6.51788C0.0740792 6.77835 0 7.13163 0 7.49999C0 7.86835 0.0740792 8.22162 0.205941 8.48209C0.337802 8.74256 0.516645 8.88889 0.703125 8.88889H1.52578H10.5469C10.7334 8.88889 10.9122 8.74256 11.0441 8.48209C11.1759 8.22162 11.25 7.86835 11.25 7.49999C11.25 7.13163 11.1759 6.77835 11.0441 6.51788C10.9122 6.25741 10.7334 6.11108 10.5469 6.11108Z"
                            fill="#B6AE03"
                        />
                        <path
                            d="M10.5469 12.2222H5.50547H0.703125C0.516645 12.2222 0.337802 12.3685 0.205941 12.629C0.0740792 12.8894 0 13.2427 0 13.6111C0 13.9794 0.0740792 14.3327 0.205941 14.5932C0.337802 14.8536 0.516645 15 0.703125 15H1.52578H10.5469C10.7334 15 10.9122 14.8536 11.0441 14.5932C11.1759 14.3327 11.25 13.9794 11.25 13.6111C11.25 13.2427 11.1759 12.8894 11.0441 12.629C10.9122 12.3685 10.7334 12.2222 10.5469 12.2222Z"
                            fill="#B6AE03"
                        />
                        <path
                            d="M12.5135 10.3164L14.8554 14.4848C14.8999 14.5607 14.9524 14.6202 15.0099 14.6599C15.1239 14.7433 15.2518 14.7433 15.3659 14.6599C15.4234 14.6202 15.4759 14.5607 15.5204 14.4848L17.8623 10.3164C17.9059 10.2386 17.9406 10.1464 17.9642 10.0448C17.9878 9.94323 18 9.83437 18 9.72445C18 9.50243 17.9505 9.28951 17.8623 9.13253C17.7741 8.97554 17.6544 8.88735 17.5297 8.88735C17.405 8.88735 17.2854 8.97554 17.1972 9.13253L15.6563 11.8837L15.6563 5.55601C15.6563 5.3349 15.6069 5.12285 15.5191 4.9665C15.4312 4.81016 15.3121 4.72232 15.1879 4.72232C15.0637 4.72232 14.9446 4.81016 14.8567 4.9665C14.7689 5.12285 14.7195 5.3349 14.7195 5.55601L14.7195 11.8837L13.1786 9.13253C13.1351 9.05439 13.0833 8.99237 13.0262 8.95004C12.9691 8.90772 12.9079 8.88592 12.8461 8.88592C12.7843 8.88592 12.723 8.90772 12.666 8.95004C12.6089 8.99237 12.5571 9.05439 12.5135 9.13253C12.4696 9.21003 12.4348 9.30224 12.411 9.40383C12.3872 9.50542 12.375 9.61439 12.375 9.72445C12.375 9.8345 12.3872 9.94347 12.411 10.0451C12.4348 10.1467 12.4696 10.2389 12.5135 10.3164Z"
                            fill="#B6AE03"
                        />
                    </svg>
                </div>
            </div>
        </div>
        <CardHistory/>
        <CardHistory/>
        <CardHistory/>
        <CardHistory/>
        <CardHistory/>
        <CardHistory/>
        <CardHistory/>
        <CardHistory/>
        <CardHistory/>
        <CardHistory/>
        <CardHistory/>
    </div>
</template>

<script setup>
import CardHistory from '~/components/history/CardHistory.vue'

definePageMeta({
    layout: 'header',
})
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12vh;
    background-color: #fffd00;

    h1 {
        font-size: 20px;
        font-weight: bold;
        color: #1f2937;
    }
}

.section-content {
    padding: 1.5rem 1.5rem;
}
</style>
