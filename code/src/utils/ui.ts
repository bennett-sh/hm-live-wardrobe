import { PatchEntity, getClassPath } from 'quickentity-script'

export const getWardrobe = (root: PatchEntity) =>
	root.addChild({
		...getClassPath('OpenMenuPageEntity'),
		properties: {
			m_pArgs: {
				type: 'SEntityTemplateReference',
				value: root.addChild({
					...getClassPath('DynamicObjectEntity'),
					properties: {
						m_sStringValue: {
							type: 'ZString',
							value: JSON.stringify({
								url: 'stashpoint',
								allowlargeitems: true,
								allowcontainers: true,
								slotid: '3',
								slotname: 'disguise'
							})
						}
					}
				})
			},
			m_sPageName: {
				type: 'ZString',
				value: 'wardrobe'
			},
			m_eMenu: {
				type: 'EGameUIMenu',
				value: 'eUIMenu_WardrobeMenu'
			}
		}
	})
