var example1 = new Vue({
  el: '#app',
  data: {
  	link:'http://m.jomooshop.com/',
    topimgs: [
      {src: 'images/w1-01.jpg'},
      {src: 'images/w1-02.jpg'},
      {src: 'images/w1-03.jpg'},
      {src: 'images/w1-04.jpg'},
      {src: 'images/w1-05.jpg'},
      {src: 'images/w1-06.jpg'}
    ],
    seckill: [
      {src: 'images/w1-07.jpg',link:'http://www.jomooshop.com/goods/do_index-91093-1C-1.htm'},
      {src: 'images/w1-08.jpg',link:'http://www.jomooshop.com/goods/do_index-S82013-2B01-1.htm'},
      {src: 'images/w1-09.jpg',link:'http://www.jomooshop.com/goods/do_index-92148-1B-1.htm'},
      {src: 'images/w1-10.jpg',link:'http://www.jomooshop.com/'}
    ],
    centerimgs: [
    	{src:'images/w1-11.jpg'},
    	{src:'images/w1-12.jpg'},
    	{src:'images/w1-13.jpg'},
    	{src:'images/w1-14.jpg'}
    ],
    centerimgs2: [
    	{src:'images/w1-15.jpg',link:'http://m.jomooshop.com/goods-6.html'},
    	{src:'images/w1-16.jpg',link:'http://m.jomooshop.com/goods-549.html'},
    	{src:'images/w1-17.jpg',link:'http://m.jomooshop.com/goods-16.html'},
    	{src:'images/w1-18.jpg',link:'http://m.jomooshop.com/goods.php?id=121'},
    	{src:'images/w1-19.jpg',link:'http://m.jomooshop.com/goods.php?id=14'},
    	{src:'images/w1-20.jpg',link:'http://m.jomooshop.com/goods-61.html'}
    ],
    bannerimgs: [
    	{src:'images/720.jpg',link:'http://m.jomooshop.com/'},
    	{src:'images/dong1.jpg',link:'http://m.jomooshop.com/goods-537.html'},
    	{src:'images/dong2.jpg',link:'http://m.jomooshop.com/goods-538.html'},
    	{src:'images/dong3.jpg',link:' http://m.jomooshop.com/goods-532.html'}
    ],
    shopclass: [
    	{src:'images/w1-21.jpg',link:'category-15.html'},
    	{src:'images/w1-22.jpg',link:'category-21.html'},
    	{src:'images/w1-23.jpg',link:'category-22.html'},
    	{src:'images/w1-24.jpg',link:'category-25.html'},
    	{src:'images/w1-25.jpg',link:'category-40.html'},
    	{src:'images/w1-26.jpg',link:'category-38.html'},
    	{src:'images/w1-27.jpg',link:'category-9.html'},
    	{src:'images/w1-28.jpg',link:'category-26.html'}
    ],
    huasa: 'images/w2-01.jpg',
    huasalist: [
    	{src:'images/w2-02.jpg',link:'http://m.jomooshop.com/goods-80.html'},
    	{src:'images/w2-03.jpg',link:'http://m.jomooshop.com/goods-57.html'},
    	{src:'images/w2-04.jpg',link:'http://m.jomooshop.com/goods-476.html'},
    	{src:'images/w2-05.jpg',link:'http://m.jomooshop.com/goods-550.html'}
    ],
    matong: 'images/w2-06.jpg',
    matonglist: [
    	{src:'images/w2-07.jpg',link:'http://m.jomooshop.com/goods-40.html',name:' 静音连体抽水马桶'},
    	{src:'images/w2-08.jpg',link:'http://m.jomooshop.com/goods-491.html',name:'“巨轮式”新款船奇马桶'},
    	{src:'images/w2-09.jpg',link:'http://m.jomooshop.com/goods-152.html',name:' 超炫冲力坐便器'},
    	{src:'images/w2-10.jpg',link:'http://m.jomooshop.com/goods-303.html',name:' 智能遥控一体坐便器 '},
    ],
    shuicao: 'images/w2-11.jpg',
    shuicaolist: [
    	{src:'images/w2-12.jpg',link:'http://m.jomooshop.com/goods-22.html'},
    	{src:'images/w2-13.jpg',link:'http://m.jomooshop.com/goods-127.html'},
    	{src:'images/w2-14.jpg',link:'http://m.jomooshop.com/goods-55.html'},
    	{src:'images/w2-15.jpg',link:'http://m.jomooshop.com/goods-460.html'}
    ],
    yushigui: 'images/w2-16.jpg',
    yushiguilist: [
    	{src:'images/w2-17.jpg',link:'http://m.jomooshop.com/goods-379.html'},
    	{src:'images/w2-18.jpg',link:'http://m.jomooshop.com/goods-145.html'},
    	{src:'images/w2-19.jpg',link:'http://m.jomooshop.com/goods-183.html'},
    	{src:'images/w2-20.jpg',link:'http://m.jomooshop.com/goods-192.html'}
    ],
    wujin: 'images/w2-21.jpg',
    wujinlist: [
    	{src:'images/w2-22.jpg',link:'http://m.jomooshop.com/goods-11.html'},
    	{src:'images/w2-22.jpg',link:'http://m.jomooshop.com/goods-56.html'},
    	{src:'images/w2-22.jpg',link:'http://m.jomooshop.com/goods-35.html'},
    	{src:'images/w2-22.jpg',link:'http://m.jomooshop.com/goods-19.html'},
    	{src:'images/w2-22.jpg',link:'http://m.jomooshop.com/goods-14.html'},
    	{src:'images/w2-22.jpg',link:'http://m.jomooshop.com/goods-89.html'},
    	{src:'images/w2-22.jpg',link:'http://m.jomooshop.com/goods-67.html'},
    	{src:'images/w2-22.jpg',link:'http://m.jomooshop.com/goods-246.html'}
    ]
  }
})