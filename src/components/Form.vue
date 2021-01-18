<template>
  <form @submit.prevent="handleSubmit">
    <label for="trees">List of apples in trees:</label><br />
    <input id="trees" placeholder="Separate with commas" name="trees" /><br />
    <label for="marcelo">Trees to be harvested by Marcelo</label><br />
    <input id="marcelo" placeholder="Integer value" name="marcelo" /><br />
    <label for="carla">Trees to be harvested by Carla</label><br />
    <input id="carla" placeholder="Integer value" name="carla" /><br /><br />
    <input class="submit" type="submit" value="" />
    <p>"{{ A }}"</p>
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
      const json = {
        A: `[${input.get("trees")}]`,
        K: input.get("marcelo"),
        L: input.get("carla")
      };
      try {
        if (
          typeof JSON.parse(json.A) === "object" &&
          typeof JSON.parse(json.K) === "number" &&
          typeof JSON.parse(json.L) === "number"
        ) {
          fetch(
            "https://vsoxvkex5m.execute-api.sa-east-1.amazonaws.com/dev/harvest-data",
            {
              method: "POST",
              body: JSON.stringify(json)
            }
          )
            .then(response => response.json())
            .then(json => {
              this.A = json["biggest_amount"];
              this.K = json["K_harvest"];
              this.L = json["L_harvest"];
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
</style>
