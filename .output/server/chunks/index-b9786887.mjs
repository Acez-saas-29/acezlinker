import { ref, mergeProps, unref, useSSRContext, withCtx, createVNode, createTextVNode, withDirectives, vModelText, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { b as _export_sfc } from './server.mjs';
import __nuxt_component_4 from './Icon-db2cd55d.mjs';
import draggable from 'vuedraggable';
import { _ as _sfc_main$7 } from './Simple-3af62dac.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'defu';
import './config.mjs';
import 'destr';
import 'scule';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const _sfc_main$6 = {
  __name: "FormSection",
  __ssrInlineRender: true,
  props: {
    title: { type: String, default: "" },
    description: { type: String, default: "" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:grid md:grid-cols-3 md:gap-6" }, _attrs))}><div class="md:col-span-1"><div class="px-4 sm:px-0 sticky top-0"><h3 class="text-lg font-medium leading-6 text-gray-900">${ssrInterpolate(__props.title)}</h3><p class="mt-1 text-sm text-gray-600">${ssrInterpolate(__props.description)}</p>`);
      ssrRenderSlot(_ctx.$slots, "helpertext", {}, null, _push, _parent);
      _push(`</div></div><div class="mt-5 md:col-span-2 md:mt-0 relative">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Base/FormSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "Profile",
  __ssrInlineRender: true,
  props: ["name", "desc", "image"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_base_form_section = _sfc_main$6;
      _push(ssrRenderComponent(_component_base_form_section, mergeProps({
        title: "Profile",
        description: "Some public information about you"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="shadow sm:overflow-hidden sm:rounded-md"${_scopeId}><div class="space-y-6 bg-white px-4 py-5 sm:p-6"${_scopeId}><div class="col-span-6 sm:col-span-3"${_scopeId}><label for="name" class="block text-sm font-medium text-gray-700"${_scopeId}>Name</label><input type="text" name="name" id="name" autocomplete="given-name"${ssrRenderAttr("value", __props.name)} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"${_scopeId}></div><div${_scopeId}><label for="about" class="block text-sm font-medium text-gray-700"${_scopeId}>About yourself</label><div class="mt-1"${_scopeId}><textarea id="about" name="about" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder-slate-400" placeholder="I am an astronaut" maxlength="100"${_scopeId}>${ssrInterpolate(__props.desc)}</textarea></div></div><div class="flex-grow col-span-6 sm:col-span-3"${_scopeId}><label for="photo-url" class="block text-sm font-medium text-gray-700"${_scopeId}>Photo Url</label><input type="text" name="photo-url" id="photo-url" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"${ssrRenderAttr("value", __props.image)}${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "shadow sm:overflow-hidden sm:rounded-md" }, [
                createVNode("div", { class: "space-y-6 bg-white px-4 py-5 sm:p-6" }, [
                  createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                    createVNode("label", {
                      for: "name",
                      class: "block text-sm font-medium text-gray-700"
                    }, "Name"),
                    createVNode("input", {
                      type: "text",
                      name: "name",
                      id: "name",
                      autocomplete: "given-name",
                      value: __props.name,
                      onInput: ($event) => _ctx.$emit("update:name", $event.target.value),
                      class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    }, null, 40, ["value", "onInput"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "about",
                      class: "block text-sm font-medium text-gray-700"
                    }, "About yourself"),
                    createVNode("div", { class: "mt-1" }, [
                      createVNode("textarea", {
                        id: "about",
                        name: "about",
                        rows: "3",
                        class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder-slate-400",
                        placeholder: "I am an astronaut",
                        maxlength: "100",
                        value: __props.desc,
                        onInput: ($event) => _ctx.$emit("update:desc", $event.target.value)
                      }, null, 40, ["value", "onInput"])
                    ])
                  ]),
                  createVNode("div", { class: "flex-grow col-span-6 sm:col-span-3" }, [
                    createVNode("label", {
                      for: "photo-url",
                      class: "block text-sm font-medium text-gray-700"
                    }, "Photo Url"),
                    createVNode("input", {
                      type: "text",
                      name: "photo-url",
                      id: "photo-url",
                      class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
                      value: __props.image,
                      onInput: ($event) => _ctx.$emit("update:image", $event.target.value)
                    }, null, 40, ["value", "onInput"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppForm/Profile.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "hidden sm:block",
    "aria-hidden": "true"
  }, _attrs))}><div class="py-5"><div class="border-t border-gray-200"></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppForm/Hr.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$3 = {
  __name: "SocialLinks",
  __ssrInlineRender: true,
  props: [
    "facebook",
    "twitter",
    "instagram",
    "linkedin",
    "github",
    "telegram",
    "whatsapp",
    "youtube",
    "email"
  ],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_base_form_section = _sfc_main$6;
      const _component_icon = __nuxt_component_4;
      _push(ssrRenderComponent(_component_base_form_section, mergeProps({
        title: "Social Links",
        description: "Add some social media links"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="shadow sm:overflow-hidden sm:rounded-md"${_scopeId}><div class="grid grid-cols-2 gap-8 bg-white px-4 py-5 sm:p-6"${_scopeId}><div${_scopeId}><label for="facebook" class="block text-sm font-medium text-gray-700"${_scopeId}>Facebook</label><div class="mt-1 flex rounded-md shadow-sm"${_scopeId}><span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              name: "ph:facebook-logo-duotone",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`</span><input type="search" name="facebook" id="facebook"${ssrRenderAttr("value", __props.facebook)} class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="https://fb.com"${_scopeId}></div></div><div${_scopeId}><label for="twitter" class="block text-sm font-medium text-gray-700"${_scopeId}>Twitter</label><div class="mt-1 flex rounded-md shadow-sm"${_scopeId}><span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              name: "ph:twitter-logo-duotone",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`</span><input type="search" name="twitter" id="twitter"${ssrRenderAttr("value", __props.twitter)} class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="https://twitter.com"${_scopeId}></div></div><div${_scopeId}><label for="instagram" class="block text-sm font-medium text-gray-700"${_scopeId}>Instagram</label><div class="mt-1 flex rounded-md shadow-sm"${_scopeId}><span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              name: "ph:instagram-logo-duotone",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`</span><input type="search" name="instagram" id="instagram"${ssrRenderAttr("value", __props.instagram)} class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="https://instagram.com"${_scopeId}></div></div><div${_scopeId}><label for="instagram" class="block text-sm font-medium text-gray-700"${_scopeId}>Github</label><div class="mt-1 flex rounded-md shadow-sm"${_scopeId}><span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              name: "ph:github-logo-duotone",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`</span><input type="search" name="github" id="github"${ssrRenderAttr("value", __props.github)} class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="https://github.com"${_scopeId}></div></div><div${_scopeId}><label for="instagram" class="block text-sm font-medium text-gray-700"${_scopeId}>Telegram</label><div class="mt-1 flex rounded-md shadow-sm"${_scopeId}><span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              name: "ph:telegram-logo-duotone",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`</span><input type="search" name="telegram" id="telegram"${ssrRenderAttr("value", __props.telegram)} class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="https://t.me"${_scopeId}></div></div><div${_scopeId}><label for="instagram" class="block text-sm font-medium text-gray-700"${_scopeId}>Linkedin</label><div class="mt-1 flex rounded-md shadow-sm"${_scopeId}><span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              name: "ph:linkedin-logo-duotone",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`</span><input type="search" name="linkedin" id="linkedin"${ssrRenderAttr("value", __props.linkedin)} class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="https://linkedin.com"${_scopeId}></div></div><div${_scopeId}><label for="instagram" class="block text-sm font-medium text-gray-700"${_scopeId}>Email</label><div class="mt-1 flex rounded-md shadow-sm"${_scopeId}><span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              name: "ph:envelope-duotone",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`</span><input type="search" name="email" id="email"${ssrRenderAttr("value", __props.email)} class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="example@gmail.com"${_scopeId}></div></div><div${_scopeId}><label for="instagram" class="block text-sm font-medium text-gray-700"${_scopeId}>Youtube</label><div class="mt-1 flex rounded-md shadow-sm"${_scopeId}><span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              name: "ph:youtube-logo-duotone",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`</span><input type="search" name="youtube" id="youtube"${ssrRenderAttr("value", __props.youtube)} class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="https://youtube.com"${_scopeId}></div></div><div${_scopeId}><label for="instagram" class="block text-sm font-medium text-gray-700"${_scopeId}>Whatsapp</label><div class="mt-1 flex rounded-md shadow-sm"${_scopeId}><span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              name: "ph:whatsapp-logo-duotone",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`</span><input type="search" name="whatsapp" id="whatsapp"${ssrRenderAttr("value", __props.whatsapp)} class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="+91 0000000000"${_scopeId}></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "shadow sm:overflow-hidden sm:rounded-md" }, [
                createVNode("div", { class: "grid grid-cols-2 gap-8 bg-white px-4 py-5 sm:p-6" }, [
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "facebook",
                      class: "block text-sm font-medium text-gray-700"
                    }, "Facebook"),
                    createVNode("div", { class: "mt-1 flex rounded-md shadow-sm" }, [
                      createVNode("span", { class: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500" }, [
                        createVNode(_component_icon, {
                          name: "ph:facebook-logo-duotone",
                          class: "w-5 h-5"
                        })
                      ]),
                      createVNode("input", {
                        type: "search",
                        name: "facebook",
                        id: "facebook",
                        value: __props.facebook,
                        onInput: ($event) => _ctx.$emit("update:facebook", $event.target.value),
                        class: "block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
                        placeholder: "https://fb.com"
                      }, null, 40, ["value", "onInput"])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "twitter",
                      class: "block text-sm font-medium text-gray-700"
                    }, "Twitter"),
                    createVNode("div", { class: "mt-1 flex rounded-md shadow-sm" }, [
                      createVNode("span", { class: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500" }, [
                        createVNode(_component_icon, {
                          name: "ph:twitter-logo-duotone",
                          class: "w-5 h-5"
                        })
                      ]),
                      createVNode("input", {
                        type: "search",
                        name: "twitter",
                        id: "twitter",
                        value: __props.twitter,
                        onInput: ($event) => _ctx.$emit("update:twitter", $event.target.value),
                        class: "block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
                        placeholder: "https://twitter.com"
                      }, null, 40, ["value", "onInput"])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "instagram",
                      class: "block text-sm font-medium text-gray-700"
                    }, "Instagram"),
                    createVNode("div", { class: "mt-1 flex rounded-md shadow-sm" }, [
                      createVNode("span", { class: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500" }, [
                        createVNode(_component_icon, {
                          name: "ph:instagram-logo-duotone",
                          class: "w-5 h-5"
                        })
                      ]),
                      createVNode("input", {
                        type: "search",
                        name: "instagram",
                        id: "instagram",
                        value: __props.instagram,
                        onInput: ($event) => _ctx.$emit("update:instagram", $event.target.value),
                        class: "block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
                        placeholder: "https://instagram.com"
                      }, null, 40, ["value", "onInput"])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "instagram",
                      class: "block text-sm font-medium text-gray-700"
                    }, "Github"),
                    createVNode("div", { class: "mt-1 flex rounded-md shadow-sm" }, [
                      createVNode("span", { class: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500" }, [
                        createVNode(_component_icon, {
                          name: "ph:github-logo-duotone",
                          class: "w-5 h-5"
                        })
                      ]),
                      createVNode("input", {
                        type: "search",
                        name: "github",
                        id: "github",
                        value: __props.github,
                        onInput: ($event) => _ctx.$emit("update:github", $event.target.value),
                        class: "block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
                        placeholder: "https://github.com"
                      }, null, 40, ["value", "onInput"])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "instagram",
                      class: "block text-sm font-medium text-gray-700"
                    }, "Telegram"),
                    createVNode("div", { class: "mt-1 flex rounded-md shadow-sm" }, [
                      createVNode("span", { class: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500" }, [
                        createVNode(_component_icon, {
                          name: "ph:telegram-logo-duotone",
                          class: "w-5 h-5"
                        })
                      ]),
                      createVNode("input", {
                        type: "search",
                        name: "telegram",
                        id: "telegram",
                        value: __props.telegram,
                        onInput: ($event) => _ctx.$emit("update:telegram", $event.target.value),
                        class: "block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
                        placeholder: "https://t.me"
                      }, null, 40, ["value", "onInput"])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "instagram",
                      class: "block text-sm font-medium text-gray-700"
                    }, "Linkedin"),
                    createVNode("div", { class: "mt-1 flex rounded-md shadow-sm" }, [
                      createVNode("span", { class: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500" }, [
                        createVNode(_component_icon, {
                          name: "ph:linkedin-logo-duotone",
                          class: "w-5 h-5"
                        })
                      ]),
                      createVNode("input", {
                        type: "search",
                        name: "linkedin",
                        id: "linkedin",
                        value: __props.linkedin,
                        onInput: ($event) => _ctx.$emit("update:linkedin", $event.target.value),
                        class: "block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
                        placeholder: "https://linkedin.com"
                      }, null, 40, ["value", "onInput"])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "instagram",
                      class: "block text-sm font-medium text-gray-700"
                    }, "Email"),
                    createVNode("div", { class: "mt-1 flex rounded-md shadow-sm" }, [
                      createVNode("span", { class: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500" }, [
                        createVNode(_component_icon, {
                          name: "ph:envelope-duotone",
                          class: "w-5 h-5"
                        })
                      ]),
                      createVNode("input", {
                        type: "search",
                        name: "email",
                        id: "email",
                        value: __props.email,
                        onInput: ($event) => _ctx.$emit("update:email", $event.target.value),
                        class: "block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
                        placeholder: "example@gmail.com"
                      }, null, 40, ["value", "onInput"])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "instagram",
                      class: "block text-sm font-medium text-gray-700"
                    }, "Youtube"),
                    createVNode("div", { class: "mt-1 flex rounded-md shadow-sm" }, [
                      createVNode("span", { class: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500" }, [
                        createVNode(_component_icon, {
                          name: "ph:youtube-logo-duotone",
                          class: "w-5 h-5"
                        })
                      ]),
                      createVNode("input", {
                        type: "search",
                        name: "youtube",
                        id: "youtube",
                        value: __props.youtube,
                        onInput: ($event) => _ctx.$emit("update:youtube", $event.target.value),
                        class: "block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
                        placeholder: "https://youtube.com"
                      }, null, 40, ["value", "onInput"])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "instagram",
                      class: "block text-sm font-medium text-gray-700"
                    }, "Whatsapp"),
                    createVNode("div", { class: "mt-1 flex rounded-md shadow-sm" }, [
                      createVNode("span", { class: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500" }, [
                        createVNode(_component_icon, {
                          name: "ph:whatsapp-logo-duotone",
                          class: "w-5 h-5"
                        })
                      ]),
                      createVNode("input", {
                        type: "search",
                        name: "whatsapp",
                        id: "whatsapp",
                        value: __props.whatsapp,
                        onInput: ($event) => _ctx.$emit("update:whatsapp", $event.target.value),
                        class: "block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
                        placeholder: "+91 0000000000"
                      }, null, 40, ["value", "onInput"])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppForm/SocialLinks.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Links",
  __ssrInlineRender: true,
  props: {
    modelValue: Array
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const appendLink = () => {
      props.modelValue.push({
        i: "",
        l: "",
        u: ""
      });
      emit("update:modelValue", props.modelValue);
    };
    const removeLink = (link) => {
      const index = props.modelValue.indexOf(link);
      props.modelValue.splice(index, 1);
      emit("update:modelValue", props.modelValue);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_base_form_section = _sfc_main$6;
      const _component_icon = __nuxt_component_4;
      _push(ssrRenderComponent(_component_base_form_section, mergeProps({
        title: "Links",
        description: "Add some links here"
      }, _attrs), {
        helpertext: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="mt-1 text-xs text-gray-600" data-v-a8909c67${_scopeId}> Icon keys can be found in <a class="underline" href="https://icones.js.org/" data-v-a8909c67${_scopeId}>https://icones.js.org/</a>. </p>`);
          } else {
            return [
              createVNode("p", { class: "mt-1 text-xs text-gray-600" }, [
                createTextVNode(" Icon keys can be found in "),
                createVNode("a", {
                  class: "underline",
                  href: "https://icones.js.org/"
                }, "https://icones.js.org/"),
                createTextVNode(". ")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(draggable), {
              list: __props.modelValue,
              "item-key": "link",
              class: "list-group",
              "ghost-class": "ghost"
            }, {
              item: withCtx(({ element: link }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="relative mb-6 group" data-v-a8909c67${_scopeId2}><button class="absolute top-2 -left-8" data-v-a8909c67${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_icon, {
                    name: "radix-icons:drag-handle-dots-2",
                    class: "h-6 w-6 text-slate-500 drag-handle"
                  }, null, _parent3, _scopeId2));
                  _push3(`</button><button class="hidden group-hover:flex items-center justify-center h-6 w-6 rounded-full bg-slate-300 text-slate-600 absolute -right-3 -top-3" data-v-a8909c67${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_icon, {
                    name: "fluent:dismiss-24-regular",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
                  _push3(`</button><div class="shadow sm:overflow-hidden sm:rounded-md" data-v-a8909c67${_scopeId2}><div class="space-y-6 bg-white px-4 py-5 sm:p-6" data-v-a8909c67${_scopeId2}><div class="grid grid-cols-2 gap-4" data-v-a8909c67${_scopeId2}><div data-v-a8909c67${_scopeId2}><label for="name" class="block text-sm font-medium text-gray-700" data-v-a8909c67${_scopeId2}>Icon Key (optional)</label><input type="text" name="iconKey" id="iconKey"${ssrRenderAttr("value", link.i)} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" data-v-a8909c67${_scopeId2}></div><div data-v-a8909c67${_scopeId2}><label for="label" class="block text-sm font-medium text-gray-700" data-v-a8909c67${_scopeId2}>Label</label><input type="text" name="label" id="label"${ssrRenderAttr("value", link.l)} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" data-v-a8909c67${_scopeId2}></div><div class="col-span-2" data-v-a8909c67${_scopeId2}><label for="url" class="block text-sm font-medium text-gray-700" data-v-a8909c67${_scopeId2}>URL</label><input type="url" name="url" id="url"${ssrRenderAttr("value", link.u)} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" data-v-a8909c67${_scopeId2}></div></div>`);
                  if (!link.l || !link.u) {
                    _push3(`<p class="mt-2 text-xs text-center text-slate-400" data-v-a8909c67${_scopeId2}> Link shown in preview once label and url are added </p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "relative mb-6 group" }, [
                      createVNode("button", { class: "absolute top-2 -left-8" }, [
                        createVNode(_component_icon, {
                          name: "radix-icons:drag-handle-dots-2",
                          class: "h-6 w-6 text-slate-500 drag-handle"
                        })
                      ]),
                      createVNode("button", {
                        onClick: ($event) => removeLink(link),
                        class: "hidden group-hover:flex items-center justify-center h-6 w-6 rounded-full bg-slate-300 text-slate-600 absolute -right-3 -top-3"
                      }, [
                        createVNode(_component_icon, {
                          name: "fluent:dismiss-24-regular",
                          class: "h-4 w-4"
                        })
                      ], 8, ["onClick"]),
                      createVNode("div", { class: "shadow sm:overflow-hidden sm:rounded-md" }, [
                        createVNode("div", { class: "space-y-6 bg-white px-4 py-5 sm:p-6" }, [
                          createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "name",
                                class: "block text-sm font-medium text-gray-700"
                              }, "Icon Key (optional)"),
                              withDirectives(createVNode("input", {
                                type: "text",
                                name: "iconKey",
                                id: "iconKey",
                                "onUpdate:modelValue": ($event) => link.i = $event,
                                class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, link.i]
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "label",
                                class: "block text-sm font-medium text-gray-700"
                              }, "Label"),
                              withDirectives(createVNode("input", {
                                type: "text",
                                name: "label",
                                id: "label",
                                "onUpdate:modelValue": ($event) => link.l = $event,
                                class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, link.l]
                              ])
                            ]),
                            createVNode("div", { class: "col-span-2" }, [
                              createVNode("label", {
                                for: "url",
                                class: "block text-sm font-medium text-gray-700"
                              }, "URL"),
                              withDirectives(createVNode("input", {
                                type: "url",
                                name: "url",
                                id: "url",
                                "onUpdate:modelValue": ($event) => link.u = $event,
                                class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, link.u]
                              ])
                            ])
                          ]),
                          !link.l || !link.u ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-2 text-xs text-center text-slate-400"
                          }, " Link shown in preview once label and url are added ")) : createCommentVNode("", true)
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<button class="mt-8 border-2 text-slate-500 border-slate-300 rounded-lg block w-full py-2" data-v-a8909c67${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon, {
              name: "fluent:add-circle-24-regular",
              class: "h-6 w-6"
            }, null, _parent2, _scopeId));
            _push2(`</button>`);
          } else {
            return [
              createVNode(unref(draggable), {
                list: __props.modelValue,
                "item-key": "link",
                class: "list-group",
                "ghost-class": "ghost"
              }, {
                item: withCtx(({ element: link }) => [
                  createVNode("div", { class: "relative mb-6 group" }, [
                    createVNode("button", { class: "absolute top-2 -left-8" }, [
                      createVNode(_component_icon, {
                        name: "radix-icons:drag-handle-dots-2",
                        class: "h-6 w-6 text-slate-500 drag-handle"
                      })
                    ]),
                    createVNode("button", {
                      onClick: ($event) => removeLink(link),
                      class: "hidden group-hover:flex items-center justify-center h-6 w-6 rounded-full bg-slate-300 text-slate-600 absolute -right-3 -top-3"
                    }, [
                      createVNode(_component_icon, {
                        name: "fluent:dismiss-24-regular",
                        class: "h-4 w-4"
                      })
                    ], 8, ["onClick"]),
                    createVNode("div", { class: "shadow sm:overflow-hidden sm:rounded-md" }, [
                      createVNode("div", { class: "space-y-6 bg-white px-4 py-5 sm:p-6" }, [
                        createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                          createVNode("div", null, [
                            createVNode("label", {
                              for: "name",
                              class: "block text-sm font-medium text-gray-700"
                            }, "Icon Key (optional)"),
                            withDirectives(createVNode("input", {
                              type: "text",
                              name: "iconKey",
                              id: "iconKey",
                              "onUpdate:modelValue": ($event) => link.i = $event,
                              class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, link.i]
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode("label", {
                              for: "label",
                              class: "block text-sm font-medium text-gray-700"
                            }, "Label"),
                            withDirectives(createVNode("input", {
                              type: "text",
                              name: "label",
                              id: "label",
                              "onUpdate:modelValue": ($event) => link.l = $event,
                              class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, link.l]
                            ])
                          ]),
                          createVNode("div", { class: "col-span-2" }, [
                            createVNode("label", {
                              for: "url",
                              class: "block text-sm font-medium text-gray-700"
                            }, "URL"),
                            withDirectives(createVNode("input", {
                              type: "url",
                              name: "url",
                              id: "url",
                              "onUpdate:modelValue": ($event) => link.u = $event,
                              class: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, link.u]
                            ])
                          ])
                        ]),
                        !link.l || !link.u ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-2 text-xs text-center text-slate-400"
                        }, " Link shown in preview once label and url are added ")) : createCommentVNode("", true)
                      ])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["list"]),
              createVNode("button", {
                onClick: appendLink,
                class: "mt-8 border-2 text-slate-500 border-slate-300 rounded-lg block w-full py-2"
              }, [
                createVNode(_component_icon, {
                  name: "fluent:add-circle-24-regular",
                  class: "h-6 w-6"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppForm/Links.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a8909c67"]]);
const _sfc_main$1 = {
  __name: "Preview",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_templates_simple = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen grid place-items-center" }, _attrs))}><div class="h-[729px] w-[340px] overflow-y-auto rounded-[3rem] ring-8 ring-slate-800 overflow-hidden">`);
      _push(ssrRenderComponent(_component_templates_simple, { acc: __props.data }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppForm/Preview.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const data = ref({
      n: "",
      d: "",
      i: "",
      f: "",
      t: "",
      ig: "",
      gh: "",
      tg: "",
      l: "",
      e: "",
      w: "",
      y: "",
      ls: []
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_app_form_profile = _sfc_main$5;
      const _component_app_form_hr = __nuxt_component_1;
      const _component_app_form_social_links = _sfc_main$3;
      const _component_app_form_links = __nuxt_component_3;
      const _component_icon = __nuxt_component_4;
      const _component_app_form_preview = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen grid grid-cols-3 divide-x" }, _attrs))}><div class="col-span-2 h-screen flex flex-col bg-slate-100"><div class="flex-1 overflow-y-auto p-8">`);
      _push(ssrRenderComponent(_component_app_form_profile, {
        name: unref(data).n,
        "onUpdate:name": ($event) => unref(data).n = $event,
        desc: unref(data).d,
        "onUpdate:desc": ($event) => unref(data).d = $event,
        image: unref(data).i,
        "onUpdate:image": ($event) => unref(data).i = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_app_form_hr, null, null, _parent));
      _push(ssrRenderComponent(_component_app_form_social_links, {
        facebook: unref(data).f,
        "onUpdate:facebook": ($event) => unref(data).f = $event,
        twitter: unref(data).t,
        "onUpdate:twitter": ($event) => unref(data).t = $event,
        instagram: unref(data).ig,
        "onUpdate:instagram": ($event) => unref(data).ig = $event,
        github: unref(data).gh,
        "onUpdate:github": ($event) => unref(data).gh = $event,
        telegram: unref(data).tg,
        "onUpdate:telegram": ($event) => unref(data).tg = $event,
        linkedin: unref(data).l,
        "onUpdate:linkedin": ($event) => unref(data).l = $event,
        email: unref(data).e,
        "onUpdate:email": ($event) => unref(data).e = $event,
        whatsapp: unref(data).w,
        "onUpdate:whatsapp": ($event) => unref(data).w = $event,
        youtube: unref(data).y,
        "onUpdate:youtube": ($event) => unref(data).y = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_app_form_hr, null, null, _parent));
      _push(ssrRenderComponent(_component_app_form_links, {
        modelValue: unref(data).ls,
        "onUpdate:modelValue": ($event) => unref(data).ls = $event
      }, null, _parent));
      _push(`</div><div class="border-t bg-white flex items-center"><button class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"><span> Add demo data </span>`);
      _push(ssrRenderComponent(_component_icon, {
        name: "mdi:code-json",
        class: "h-4 w-4"
      }, null, _parent));
      _push(`</button><button class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"><span> Publish </span>`);
      _push(ssrRenderComponent(_component_icon, {
        name: "ph:paper-plane-tilt-bold",
        class: "h-4 w-4"
      }, null, _parent));
      _push(`</button><a href="https://github.com" target="_blank" class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"><span> Github </span>`);
      _push(ssrRenderComponent(_component_icon, {
        name: "mdi:github",
        class: "h-4 w-4"
      }, null, _parent));
      _push(`</a></div></div>`);
      _push(ssrRenderComponent(_component_app_form_preview, { data: unref(data) }, null, _parent));
      _push(`<a href="https://twitter.com" target="_blank" class="absolute bottom-0 right-0 bg-white rounded-tl-lg shadow px-4 py-1 font-medium text-sm text-gray-500"> Made by Acez </a></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-b9786887.mjs.map
