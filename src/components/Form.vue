<template>
  <form @submit.prevent="handleSubmit">
    <label for="trees">List of apples in trees:</label><br />
    <input id="trees" placeholder="Separated by commas" name="trees" /><br />
    <label for="marcelo">Trees to be harvested by Marcelo</label><br />
    <input id="marcelo" placeholder="Integer value" name="marcelo" /><br />
    <label for="carla">Trees to be harvested by Carla</label><br />
    <input id="carla" placeholder="Integer value" name="carla" /><br /><br />
    <input class="submit" type="submit" value="" />
  </form>
</template>

<script>
export default {
  name: "Form",
  props: {
    msg: String
  },
  data() {
    return {
      A: [],
      K: 0,
      L: 0
    };
  },

  methods: {
    handleSubmit(event) {
      event.preventDefault();
      const input = new FormData(event.target);
      if (input.get("trees").includes('-')){
        alert('No negative numbers, please! What kind of tree gives negative fruits?')
        event.target.reset()
        return null
      }
      if (input.get("marcelo").includes('-')){
        alert('No negative numbers, please! Does Marcelo want to plant some trees?')
        event.target.reset()
        return null
      }
      if (input.get("carla").includes('-')){
        alert('No negative numbers, please! Does Carla want to plant some trees?')
        event.target.reset()
        return null
      }
      const initialjson = {
        A: `[${input.get("trees")}]`,
        K: input.get("marcelo"),
        L: input.get("carla")
      };
      try {
        if (
          typeof JSON.parse(initialjson.A) === "object" &&
          typeof JSON.parse(initialjson.K) === "number" &&
          typeof JSON.parse(initialjson.L) === "number"
        ) {
          fetch(
            "https://vsoxvkex5m.execute-api.sa-east-1.amazonaws.com/dev/harvest-data",
            {
              headers: { Authorization: "MISSING_AUTH" },
              method: "POST",
              body: JSON.stringify(initialjson)
            }
          )
            .then(response => response.json())
            .then(json => {
              const A = json["biggest_amount"];
              const K = json["K_harvest"];
              const L = json["L_harvest"];
              const Trees = JSON.parse(initialjson.A);
              const TreesIndex = [...Array(Trees.length).keys()];
              this.$router.push({
                name: "Output",
                params: { Trees, TreesIndex, A, K, L }
              });
            });
        }
      } catch (err) {
        alert("Verify your data.");
      }
    }
  }
};
</script>

<style>
label {
  font-size: 12px;
  font-weight: bold;
  color: #712d2e;
}
input {
  background-color: #ffd89f;
  border-radius: 10px;
  outline: none;
}
input::placeholder {
  text-align: center;
}
button {
  cursor: pointer;
}

img.button_image {
  max-height: 30px;
}
.submit {
  background: url("../assets/apple.jpg") 1px 1px no-repeat;
  height: 40px;
  width: 40px;
  background-position: center;
  background-size: 30px;
  background-color: #ffd89f;
  border-radius: 40px;
  cursor: pointer;
  outline: none;
}
.submit:hover {
  background-color: #fcf3e7;
  height: 45px;
  width: 45px;
  margin-top:-3px;
}
</style>
