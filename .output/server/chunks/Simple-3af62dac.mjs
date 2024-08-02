import __nuxt_component_4 from './Icon-db2cd55d.mjs';
import { e as __nuxt_component_0$1 } from './server.mjs';
import { computed, mergeProps, unref, useSSRContext, withCtx, createVNode, openBlock, createBlock, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';

const _sfc_main$1 = {
  __name: "ExternalLink",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: "ph:link-simple"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<li${ssrRenderAttrs(_attrs)}>`);
      if (__props.label && __props.url) {
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: __props.url,
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<dt class="flex items-center space-x-2 p-1 -m-1 rounded-xl hover:bg-slate-100 bg-slate-50"${_scopeId}><div class="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg text-slate-500"${_scopeId}>`);
              if (__props.icon) {
                _push2(ssrRenderComponent(unref(__props["icon"]), {
                  name: __props.icon,
                  class: "h-5 w-5"
                }, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(unref(__props["icon"]), {
                  name: "ph:link-simple",
                  class: "h-5 w-5"
                }, null, _parent2, _scopeId));
              }
              _push2(`</div><div class="w-full flex-grow min-w-0"${_scopeId}><p class="font-medium text-sm leading-6 text-gray-900"${_scopeId}>${ssrInterpolate(__props.label)}</p></div></dt>`);
            } else {
              return [
                createVNode("dt", { class: "flex items-center space-x-2 p-1 -m-1 rounded-xl hover:bg-slate-100 bg-slate-50" }, [
                  createVNode("div", { class: "flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg text-slate-500" }, [
                    __props.icon ? (openBlock(), createBlock(unref(__props["icon"]), {
                      key: 0,
                      name: __props.icon,
                      class: "h-5 w-5"
                    }, null, 8, ["name"])) : (openBlock(), createBlock(unref(__props["icon"]), {
                      key: 1,
                      name: "ph:link-simple",
                      class: "h-5 w-5"
                    }))
                  ]),
                  createVNode("div", { class: "w-full flex-grow min-w-0" }, [
                    createVNode("p", { class: "font-medium text-sm leading-6 text-gray-900" }, toDisplayString(__props.label), 1)
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ExternalLink.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Simple",
  __ssrInlineRender: true,
  props: {
    acc: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const allSocialLinksAreEmpty = computed(() => {
      return !props.acc.f && !props.acc.t && !props.acc.ig && !props.acc.m && !props.acc.tg && !props.acc.w && !props.acc.y && !props.acc.e && !props.acc.gh && !props.acc.l;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = __nuxt_component_4;
      const _component_ExternalLink = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "p-4 bg-white h-full w-full space-y-8 pt-12 max-w-lg mx-auto" }, _attrs))}><div class="text-center">`);
      if (__props.acc.i) {
        _push(`<div class="h-20 w-20 rounded-full overflow-hidden ring ring-slate-200 mx-auto"><img${ssrRenderAttr("src", __props.acc.i)} alt="name" class="h-full w-full object-cover"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.acc.n) {
        _push(`<h1 class="text-2xl font-bold mt-4 text-slate-800">${ssrInterpolate(__props.acc.n)}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.acc.d) {
        _push(`<p class="text-sm mt-2 text-slate-600">${ssrInterpolate(__props.acc.d)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!unref(allSocialLinksAreEmpty)) {
        _push(`<div class="flex items-center justify-center flex-wrap">`);
        if (__props.acc.f) {
          _push(`<span class="p-1"><a${ssrRenderAttr("href", __props.acc.f)} target="_blank" rel="noopener | noreferrer">`);
          _push(ssrRenderComponent(_component_icon, {
            name: "ph:facebook-logo-duotone",
            class: "h-6 w-6"
          }, null, _parent));
          _push(`</a></span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.acc.t) {
          _push(`<span class="p-1"><a${ssrRenderAttr("href", __props.acc.t)} target="_blank" rel="noopener | noreferrer">`);
          _push(ssrRenderComponent(_component_icon, {
            name: "ph:twitter-logo-duotone",
            class: "h-6 w-6"
          }, null, _parent));
          _push(`</a></span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.acc.ig) {
          _push(`<span class="p-1"><a${ssrRenderAttr("href", __props.acc.ig)} target="_blank" rel="noopener | noreferrer">`);
          _push(ssrRenderComponent(_component_icon, {
            name: "ph:instagram-logo-duotone",
            class: "h-6 w-6"
          }, null, _parent));
          _push(`</a></span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.acc.m) {
          _push(`<span class="p-1"><a${ssrRenderAttr("href", __props.acc.m)} target="_blank" rel="noopener | noreferrer">`);
          _push(ssrRenderComponent(_component_icon, {
            name: "ph:envelope-duotone",
            class: "h-6 w-6"
          }, null, _parent));
          _push(`</a></span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.acc.tg) {
          _push(`<span class="p-1"><a${ssrRenderAttr("href", __props.acc.tg)} target="_blank" rel="noopener | noreferrer">`);
          _push(ssrRenderComponent(_component_icon, {
            name: "ph:telegram-logo-duotone",
            class: "h-6 w-6"
          }, null, _parent));
          _push(`</a></span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.acc.w) {
          _push(`<span class="p-1"><a${ssrRenderAttr("href", `https://wa.me/${__props.acc.w}`)} target="_blank" rel="noopener | noreferrer">`);
          _push(ssrRenderComponent(_component_icon, {
            name: "ph:whatsapp-logo-duotone",
            class: "h-6 w-6"
          }, null, _parent));
          _push(`</a></span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.acc.y) {
          _push(`<span class="p-1"><a${ssrRenderAttr("href", __props.acc.y)} target="_blank" rel="noopener | noreferrer">`);
          _push(ssrRenderComponent(_component_icon, {
            name: "ph:youtube-logo-duotone",
            class: "h-6 w-6"
          }, null, _parent));
          _push(`</a></span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.acc.e) {
          _push(`<span class="p-1"><a${ssrRenderAttr("href", `mailto:${__props.acc.e}`)} target="_blank" rel="noopener | noreferrer">`);
          _push(ssrRenderComponent(_component_icon, {
            name: "ph:envelope-duotone",
            class: "h-6 w-6"
          }, null, _parent));
          _push(`</a></span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.acc.gh) {
          _push(`<span class="p-1"><a${ssrRenderAttr("href", __props.acc.gh)} target="_blank" rel="noopener | noreferrer">`);
          _push(ssrRenderComponent(_component_icon, {
            name: "ph:github-logo-duotone",
            class: "h-6 w-6"
          }, null, _parent));
          _push(`</a></span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.acc.l) {
          _push(`<span class="p-1"><a${ssrRenderAttr("href", __props.acc.l)} target="_blank" rel="noopener | noreferrer">`);
          _push(ssrRenderComponent(_component_icon, {
            name: "ph:linkedin-logo-duotone",
            class: "h-6 w-6"
          }, null, _parent));
          _push(`</a></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<ul class="space-y-2"><!--[-->`);
      ssrRenderList(__props.acc.ls, (link, id) => {
        _push(ssrRenderComponent(_component_ExternalLink, {
          label: link.l,
          icon: link.i,
          url: link.u,
          key: id
        }, null, _parent));
      });
      _push(`<!--]--></ul></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Templates/Simple.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Simple-3af62dac.mjs.map
