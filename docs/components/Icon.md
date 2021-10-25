# Icon 图标

::: demo
```html
<template>
    <div>
        <MantTooltip
            v-for="icon in icons"
            :title="`['fal', '${icon}']`">
            <MantIcon
                :icon="['fal', icon]"
                style="margin: 10px"
            />
        </MantTooltip>
        <hr />
        <MantTooltip
            v-for="icon in icons"
            :title="`['fas', '${icon}']`">
            <MantIcon
                :icon="['fas', icon]"
                style="margin: 10px"
            />
        </MantTooltip>
        <hr />
        <MantTooltip
            v-for="icon in brands"
            :title="`['fab', '${icon}']`">
            <MantIcon
                :icon="['fab', icon]"
                style="margin: 10px"
            />
        </MantTooltip>
    </div>
</template>
<script>
export default {
    data() {
        return {
            brands: [
                'xbox',

                'android',
                'internet-explorer',
                'apple',
                'windows',
                'github',
                'google',
                'amazon',
                'linkedin',
                'gitlab'
            ],
            icons: [
                'arrow-up',
                'arrow-down',
                'arrow-left',
                'arrow-right',
                'chevron-up',
                'chevron-down',
                'chevron-left',
                'chevron-right',
                'caret-up',
                'caret-down',
                'caret-left',
                'caret-right',
                'plus',
                'minus',
                'check',
                'times',
                'clock',
                'lock',
                'star',


                'ban',
                'bullhorn',
                'check-circle',
                'check-square',
                'cloud',
                'cloud-download',
                'cloud-upload',
                'copy',
                'cut',
                'database',
                'dot-circle',
                'download',
                'ellipsis-v',
                'ellipsis-h',
                'external-link',
                'file-export',
                'file-import',
                'flag',
                'hashtag',
                'i-cursor',
                'cog',
                'star-half',
                'grin-alt',
                'wifi',
                'volume',

                'bookmark',

                'bell',
                'comment-alt-exclamation',
                'comment-exclamation',
                'exclamation-square',
                'exclamation-circle',
                'exclamation-triangle',

                'user',
                'password',
                'eye',
                'eye-slash',
                'edit',
                'trash-alt',
                'comments',
                'heart',
                'thumbs-up',

                'calendar',
                'chart',
                'paste',
                'pen',
                'phone',
                'phone-office',
                'percent',
                'paperclip',
                'landmark',
                'folder-plus',
                'folder-minus',
                'eraser',
                'compass',
                'clipboard',
                'address-book',
                'camera',
                'bolt',
                'clone',
                'expand',
                'file-image',
                'image',
                'images',

                'code',
                'bug',
                'coffee',
                'brackets',
                'barcode',
                'file',
                'file-alt',
                'filter',
                'folder-open',
                'keyboard',
                'laptop-code',
                'microchip',
                'shield-check',
                'terminal',
                'user-secret',
                'window-alt',

                'underline',

                'envelope',
                'phone',

                'map-marker-alt',

                'alien-monster',
                'gamepad',
                'ghost',
                'steam',
                'chess-knight',
                'club',
                'dice-four',
                'headset',
            ]
        }
    }
}
</script>
```
