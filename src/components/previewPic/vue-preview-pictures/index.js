import Vue from "vue";
import Preview from "./vue-preview-pictures.vue";
let PreviewConstructor = Vue.extend(Preview);

let instance;

const PreviewPic = function(options) {
  if (Vue.prototype.$isServer) return;
  options = options || {};

  const userOnClose = options.onClose || null;
  const userOnSelect = options.onSelect || null;

  options.onClose = function(index) {
    document.body.style.overflow = "auto";
    setTimeout(() => {
      if (userOnClose) {
        close(userOnClose, index);
      }
      document.body.removeChild(instance.vm.$el);
    }, 400);
  };
  options.onSelect = function(index) {
    if (userOnSelect) {
      select(userOnSelect, index);
    }
  };

  instance = new PreviewConstructor({
    data: options
  });
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  document.body.style.overflow = "hidden";
  instance.vm.show = true;
  return instance.vm;
};

const close = function(userOnClose, index) {
  userOnClose(index);
};

const select = function(userOnSelect, index) {
  userOnSelect(index);
};

PreviewPic.close = function(callback) {
  instance.vm.show = false;
  setTimeout(() => {
    document.body.removeChild(instance.vm.$el);
    if (typeof callback === "function") {
      callback();
    }
  }, 400);
};

export default PreviewPic;
