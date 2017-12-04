<template>
  <div class="sales-board">
      <div class="sales-board-intro">
        <h2>慕课资源库</h2>
        <p>  “慕课资源库学习平台”提升了在教学中学生提前预习，课后复习的功能，通过闯关的方式学习不同的章节内容，学生互评作业，通过数据了解学生学习情况，知识掌握度等，智能化功能减少老师教学批改检查工作，加强学生自主学习：</p>
      </div>
      <div class="sales-board-form">
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  购买数量：
              </div>
              <div class="sales-board-line-right">
               
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  产品类型：
              </div>
              <div class="sales-board-line-right">
                  <v-selection :selections='buyTypes'></v-selection>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  有效时间：
              </div>
              <div class="sales-board-line-right">
                 
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  产品版本：
              </div>
              <div class="sales-board-line-right">
                 
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  总价：
              </div>
              <div class="sales-board-line-right">
                  522 元
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">&nbsp;</div>
              <div class="sales-board-line-right">
                  <div class="button">
                    立即购买
                  </div>
              </div>
          </div>
      </div>
      <div class="sales-board-des">
        <h2>产品说明</h2>
        <p>资源库能让不同高校针对一门课程或专业的教学方法达成共识，使学生更快掌握此课程与专业的要点，让不同高校的学子们都能享这种便利与方法。并让高校与企业互动，使学生对此课程有更深层的了解，同时对学生在实习与就业方面有所帮忙。对企业来说也可让企业挑选一些优秀的毕业生对企业创造更多的价值。最终使高校，学生，企业达成共赢。</p>

        <h3>建设过程</h3>
        <ul>
          <li>需求调研</li>
          <li>需求确定及版面确定</li>
          <li>程序开发</li>
          <li> 程序测试</li>
          <li>系统演示</li>
        </ul>

        <h3>课程学习平台优点</h3>
        <ul>
          <li>随时随地网络学习</li>
          <li>内容精简，效果立杆见影</li>
          <li>师生在线互动</li>
          <li>在线考试</li>
          <li>多个课程多个学校师生同时指导与学习</li>
        </ul>
      </div>

  </div>
</template>
<script>
	import VSelection from '../../components/selection'
	export default{ 
		components:{
			VSelection
		},
		data () {
		  return {
		   buyTypes: [
			     {
			       label: '入门版',
			       value: 0
			     },
			     {
			       label: '中级版',
			       value: 1
			     },
			     {
			       label: '高级版',
			       value: 2
			     }
		     ]
		  }
		}
	}
</script>

<style>

</style>
