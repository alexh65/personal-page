<template>
  <div>
    <div id="time">
        <h1>Significant Events</h1>
        <vue-horizontal-timeline :items="items" :timeline-background="color" :timeline-padding="padd"/>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'Time',
  data() {
    return {
      color: '#287cbd',
      padd: '20px',
      items: [
        {
          title: 'April, 2014',
          content: 'Got 3rd place at high school\'s science fair. I demonstrated how to make a pH indicator using red cabbage.'
        },
        {
          title: 'June, 2015',
          content: 'Graduated high school (The American School, Saigon, Vietnam). Fun fact: The class of 2015 only had 19 students.'
        },
        {
          title: 'January, 2016',
          content: 'Moved to Vancouver, BC to attend Langara College. It was my first time being by myself in a foreign country.'
        },
        {
          title: 'April, 2018',
          content: 'Graduated with Distinction and got my A.S. in Computer Science from Langara. I got accepted to Simon Fraser University in the same year.'
        },
        {
          title: 'Feb, 2020',
          content: 'Joined my first Hackathon at SFU. We didn\'t accomplish much, but we learned more about Android programming.'
        },
        {
          title: 'April, 2020',
          content: 'Got my first ever job at a nursing home during the COVID-19 outbreak. Quite an experience.'
        },
        {
          title: 'May, 2020',
          content: 'Started working at Robokids Burnaby as their coding instructor. It\'s my first co-op work term.'
        }
      ]
    }
  }
}
</script>

<style scoped>
#time {
  width: 70vw;
  text-align: center;
}
</style>
