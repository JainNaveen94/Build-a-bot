<template>
  <div>
    <v-container></v-container>
    <v-layout text-xs-center row wrap>
      <v-flex xs9>
        <!-- <h1 class="robot-name">
      {{selectedRobot.head.title}}
      <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
        </h1>-->
        <div class="top-row">
          <PartSelector
            :parts="availableParts.heads"
            position="top"
            @partSelected="part => this.selectedRobot.head = part"
          />

          <!-- <div class="top part" :class="[hilightSaleRobot]">
        <img :src="selectedRobot.head.src" title="head">
        <button @click="selectPreviousHead()" class="prev-selector">&#9668;</button>
        <button @click="selectNextHead()" class="next-selector">&#9658;</button>
          </div>-->
        </div>
        <div class="middle-row">
          <PartSelector
            :parts="availableParts.arms"
            position="left"
            @partSelected="part => this.selectedRobot.leftArm = part"
          />
          <PartSelector
            :parts="availableParts.torsos"
            position="center"
            @partSelected="part => this.selectedRobot.torso = part"
          />
          <PartSelector
            :parts="availableParts.arms"
            position="right"
            @partSelected="part => this.selectedRobot.rightArm = part"
          />

          <!-- <div class="left part">
        <img :src="selectedRobot.leftArm.src" title="left arm">
        <button @click="selectPreviousLeftArm()" class="prev-selector">&#9650;</button>
        <button @click="selectNextLeftArm()" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img :src="selectedRobot.torso.src" title="left arm">
        <button @click="selectPreviousTorso()" class="prev-selector">&#9668;</button>
        <button @click="selectNextTorso()" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img :src="selectedRobot.rightArm.src" title="left arm">
        <button @click="selectPreviousRightArm()" class="prev-selector">&#9650;</button>
        <button @click="selectNextRightArm()" class="next-selector">&#9660;</button>
          </div>-->
        </div>
        <div class="bottom-row">
          <PartSelector
            :parts="availableParts.bases"
            position="bottom"
            @partSelected="part => this.selectedRobot.base = part"
          />

          <!-- <div class="bottom part">
        <img :src="selectedRobot.base.src" title="left arm">
        <button @click="selectPreviousBase()" class="prev-selector">&#9668;</button>
        <button @click="selectNextBase()" class="next-selector">&#9658;</button>
          </div>-->
        </div>
      </v-flex>
      <v-flex xs3>
        <v-layout row wrap pr-3>
          <collapsable class="collapse">
            <v-flex xs12 class="preview">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs4></v-flex>
                  <v-flex xs4>
                    <img :src="selectedRobot.head.src">
                  </v-flex>
                  <v-flex xs4></v-flex>
                  <v-flex xs4>
                    <img :src="selectedRobot.leftArm.src" class="rotate-left">
                  </v-flex>
                  <v-flex xs4>
                    <img :src="selectedRobot.torso.src">
                  </v-flex>
                  <v-flex xs4>
                    <img :src="selectedRobot.rightArm.src" class="rotate-right">
                  </v-flex>
                  <v-flex xs4></v-flex>
                  <v-flex xs4>
                    <img :src="selectedRobot.base.src">
                  </v-flex>
                  <v-flex xs4></v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </collapsable>
          <v-flex xs12>
            <v-btn @click="addToCart()" color="success" large>Add To Cart</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout align-center row wrap>
      <v-flex xs12>
        <table>
          <thead>
            <tr>
              <th>Robot-Name</th>
              <th class="cost">Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(robo, index) in cart" :key="index">
              <td>{{robo.head.title}}</td>
              <td class="cost">{{robo.cost}}</td>
            </tr>
          </tbody>
        </table>
      </v-flex>
      <v-flex xs2></v-flex>
    </v-layout>
  </div>
</template>

<script>
import availableParts from '../Data/part';
import PartSelector from './PartSelector.vue';
import collapsable from '../shared/Collapsable.vue';

export default {
  name: 'RobotBuilder',
  components: {
    PartSelector,
    collapsable,
  },
  data() {
    return {
      cart: [],
      availableParts,

      // selectedHeadIndex: 0,
      // selectedLeftArmIndex: 0,
      // selectedTorsoIndex: 0,
      // selectedRightArmIndex: 0,
      // selectedBaseIndex: 0,

      selectedRobot: {
        head: {},
        leftArm: {},
        torso: {},
        rightArm: {},
        base: {},
      },
    };
  },
  computed: {
    // selectedRobot() {
    //   return {
    //     head: availableParts.heads[this.selectedHeadIndex],
    //     leftArm: availableParts.arms[this.selectedLeftArmIndex],
    //     torso: availableParts.torsos[this.selectedTorsoIndex],
    //     rightArm: availableParts.arms[this.selectedRightArmIndex],
    //     base: availableParts.bases[this.selectedBaseIndex],
    //   };
    // },
    hilightSaleRobot() {
      return this.selectedRobot.head.onSale ? 'sale-robot' : '';
    },
  },
  methods: {
    addToCart() {
      const robot = this.selectedRobot;
      const cost = robot.head.cost
        + robot.leftArm.cost
        + robot.torso.cost
        + robot.rightArm.cost
        + robot.base.cost;
      this.cart.push(Object.assign({}, robot, { cost }));
    },
    // selectPreviousHead() {
    //   this.selectedHeadIndex = getPreviousValidIndex(
    //     this.selectedHeadIndex,
    //     availableParts.heads.length,
    //   );
    // },
    // selectNextHead() {
    //   this.selectedHeadIndex = getNextValidIndex(
    //     this.selectedHeadIndex,
    //     availableParts.heads.length,
    //   );
    // },
    // selectPreviousLeftArm() {
    //   this.selectedLeftArmIndex = getPreviousValidIndex(
    //     this.selectedLeftArmIndex,
    //     availableParts.arms.length,
    //   );
    // },
    // selectNextLeftArm() {
    //   this.selectedLeftArmIndex = getNextValidIndex(
    //     this.selectedLeftArmIndex,
    //     availableParts.arms.length,
    //   );
    // },
    // selectPreviousTorso() {
    //   this.selectedTorsoIndex = getPreviousValidIndex(
    //     this.selectedTorsoIndex,
    //     availableParts.torsos.length,
    //   );
    // },
    // selectNextTorso() {
    //   this.selectedTorsoIndex = getNextValidIndex(
    //     this.selectedTorsoIndex,
    //     availableParts.torsos.length,
    //   );
    // },
    // selectPreviousRightArm() {
    //   this.selectedRightArmIndex = getPreviousValidIndex(
    //     this.selectedRightArmIndex,
    //     availableParts.arms.length,
    //   );
    // },
    // selectNextRightArm() {
    //   this.selectedRightArmIndex = getNextValidIndex(
    //     this.selectedRightArmIndex,
    //     availableParts.arms.length,
    //   );
    // },
    // selectPreviousBase() {
    //   this.selectedBaseIndex = getPreviousValidIndex(
    //     this.selectedBaseIndex,
    //     availableParts.bases.length,
    //   );
    // },
    // selectNextBase() {
    //   this.selectedBaseIndex = getNextValidIndex(
    //     this.selectedBaseIndex,
    //     availableParts.bases.length,
    //   );
    // },
  },
};
</script>


<style>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part img {
  width: 165px;
}
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
  position: relative;
  width: 100%;
  text-align: center;
}
.sale {
  color: red;
}
.cost {
  color: red;
  text-align: left;
}
td,
th {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}
.sale-robot {
  border: 3px solid red;
}

.preview {
  border: 1px solid #999;
  justify-content: left;
}
.flex img {
  width: 100%;
  height: 100%;
}
.collapse {
  width: 100%;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}
</style>
