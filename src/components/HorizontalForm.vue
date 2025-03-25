

<script>
    import { defineComponent, ref } from 'vue';

    export default defineComponent({
        setup() {
            return {
                selectOptions: ref([
                    {
                        label: 'January',
                        value: '1'
                    },
                    {
                        label: 'February',
                        value: '2'
                    },
                    {
                        label: 'March',
                        value: '3'
                    },
                    {
                        label: 'April',
                        value: '4'
                    },
                    {
                        label: 'May',
                        value: '5'
                    },
                    {
                        label: 'June',
                        value: '6'
                    },
                    {
                        label: 'July',
                        value: '7'
                    },
                    {
                        label: 'August',
                        value: '8'
                    },
                    {
                        label: 'September',
                        value: '9'
                    },
                    {
                        label: 'October',
                        value: '10'
                    },
                    {
                        label: 'November',
                        value: '11'
                    },
                    {
                        label: 'December',
                        value: '12'
                    },
                ]),
                activityOptions: ref([
                    {
                        label: 'Hiking',
                        value: 1
                    },
                    {
                        label: 'Surfing',
                        value: 2
                    },
                    {
                        label: 'Staycation',
                        value: 3
                    },
                    {
                        label: 'Nightlife',
                        value: 4
                    },
                ])
            }
        }
    })
</script>
<template>
    <div>
        <n-card>
            
            <n-grid x-gap="12" :cols="4">
                <n-gi>
                    <n-flex class="loc-label">
                        <p>Location</p>
                    </n-flex>
                    <n-space class="radioGrp">
                        <n-radio
                        :checked="checkedValue === 'Boracay Island'"
                        value="Boracay Island"
                        name="basic-demo"
                        @change="handleChange"
                        >
                        Boracay Island
                        </n-radio>

                        <n-radio
                        :checked="checkedValue === 'Bohol'"
                        value="Bohol"
                        name="basic-demo"
                        @change="handleChange"
                        >
                        Bohol
                        </n-radio>

                        <n-radio
                        :checked="checkedValue === 'Cebu'"
                        value="Cebu"
                        name="basic-demo"
                        @change="handleChange"
                        >
                        Cebu
                        </n-radio>
                    </n-space>
                    <div class="light-green" />
                </n-gi>
                
                <n-gi>
                    <n-flex class="loc-label">
                        <p>Month</p>
                    </n-flex>

                    <n-space>
                        <n-input-group :style="{padding:'0px 0px 25px 0px'}">
                            <n-select placeholder="Select month" :style="{ width: '280px' }" :options="selectOptions" size="large"/>
                        </n-input-group>
                    </n-space>
                </n-gi>

                <n-gi>
                    <n-flex class="loc-label">
                        <p>Activity</p>
                    </n-flex>

                    <n-input-group>
                        <n-select placeholder="Select activity" :style="{ width: '100%' }" :options="activityOptions" size="large"/>
                    </n-input-group>
                </n-gi>

                <n-gi>
                    <n-button type="info" size="large" @click="">
                        Forecast
                    </n-button>
                </n-gi>

            </n-grid>
        </n-card>
    </div>
</template>

<style scoped>
    .n-card {
        width: 100%;
        margin-bottom: 15px;
        border-radius: 10px;
        background-color: #F4F1DE;
    }

    .loc-label {
        align-items: center;
        text-decoration-color: #3D405B;
        margin-bottom: 2px;
    }

    .loc-label > p {
        font-size: 20px;
        font-weight: 600;
        color: #3D405B;
    }

    .radioGrp {
        padding-top: 10px;
    }

    .n-button {
        width: 100%;
        background-color: #81B29A;
        margin-top: 34px;
    }
</style>