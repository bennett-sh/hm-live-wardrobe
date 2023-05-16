import { CommonPaths, CommonRoots, IPath, getClassPath, type QNPatch, getPath } from "quickentity-script"

export const TARGET: IPath = { ...CommonPaths.Agent47 }
export const NAME: string = "47"

export async function create(patch: QNPatch, option?: string) {
	const root = patch.addEntity({ ...CommonPaths.Entity, parent: CommonRoots.Agent47 })
	const isAiming = root.addBool(false)

	root.addChild({
		...getClassPath("LookAtAimSoundController"),
		events: {
			EnterLookAt: {
				SetTrue: isAiming
			},
			ExitLookAt: {
				SetFalse: isAiming
			}
		}
	})

	let blendInActions = [
		root.addChild({
			...getClassPath("HM5FixedCamProfileEntity"),
			properties: {
				m_dtBlendIn: {
					type: "float32",
					value: 1
				},
				m_mTransform: {
					type: "SMatrix43",
					value: {
						position: {
							x: 0,
							y: 0,
							z: 0
						},
						rotation: {
							x: 0,
							y: 0,
							z: 0
						}
					}
				},
				m_dtBlendOut: {
					type: "float32",
					value: 1.25
				},
				m_degFovY: {
					type: "float32",
					value: 30
				},
				m_stickLength: {
					type: "float32",
					value: 1.690000057220459
				},
				m_eidParent: {
					type: "SEntityTemplateReference",
					value: CommonRoots.Agent47
				}
			}
		}),
		root.addChild({
			...getClassPath("HM5GameCamProfileEntity"),
			properties: {
				m_fPitchMaxOffset: {
					type: "float32",
					value: 20
				},
				m_fPitchMinOffset: {
					type: "float32",
					value: 20
				},
				m_fYawOffset: {
					type: "float32",
					value: 0
				},
				m_bAlignYawPitch: {
					type: "bool",
					value: true
				},
				m_fFOV: {
					type: "float32",
					value: 30
				},
				m_fYawBase: {
					type: "float32",
					value: -15
				},
				m_fPitchAngle: {
					type: "float32",
					value: 20
				},
				m_fBlendTime: {
					type: "float32",
					value: 1.25
				},
				m_fStickLength: {
					type: "float32",
					value: 1
				},
				m_fRadius: {
					type: "float32",
					value: 0
				},
				m_fProfileBlendTime: {
					type: "float32",
					value: 1.25
				},
				m_nPriority: {
					type: "int32",
					value: 100
				},
				m_fHeight: {
					type: "float32",
					value: 1.7999999523162842
				},
				m_bEnableAimAssist: {
					type: "bool",
					value: false
				},
				m_bEnablePitchLevelOut: {
					type: "bool",
					value: true
				},
				m_bPitchAnimation: {
					type: "bool",
					value: false
				},
				m_fYawAngle: {
					type: "float32",
					value: -15
				},
				m_fRadiusLeft: {
					type: "float32",
					value: 0
				}
			}
		})
	]

	root.addChild({
		...getPath(
			"[assembly:/_pro/design/gamecore/setpiecehelpers.template?/setpiecehelpers_activator_singlepress.entitytemplate]"
		),
		properties: {
			m_mTransform: {
				type: "SMatrix43",
				value: {
					position: {
						x: 0,
						y: 0,
						z: 0
					},
					rotation: {
						x: 0,
						y: 0,
						z: 0
					}
				}
			},
			m_sId: {
				type: "ZGuid",
				value: "bbb59699-f6a7-4122-bccb-9c704cb9e645"
			},
			name_metricvalue: {
				type: "ZString",
				value: "47_Dialog_Activated"
			},
			m_bApplyPromptDescriptionText: {
				type: "bool",
				value: false
			},
			m_bRequiresHitmanFacing: {
				type: "bool",
				value: false
			},
			m_bActionHasValidDisguise: {
				type: "bool",
				value: false
			},
			m_bValueuseonce: {
				type: "bool",
				value: false
			},
			m_eidParent: {
				type: "SEntityTemplateReference",
				value: CommonRoots.Agent47
			},
			m_aValuesusable: {
				type: "TArray<SEntityTemplateReference>",
				value: [isAiming]
			},
			m_bIsIllegal: {
				type: "bool",
				value: false
			},
			m_rPromptTextPassiveResource: {
				type: "ZRuntimeResourceID",
				value: {
					resource: "601F5CC1D3AEFD20",
					flag: "5F"
				}
			},
			m_fOverrideInteractionRangeValue: {
				type: "float32",
				value: 10
			},
			m_bOverrideInteractionRange: {
				type: "bool",
				value: true
			},
			m_sPromptDescriptionText: {
				type: "ZString",
				value: ""
			},
			m_sPromptText: {
				type: "ZString",
				value: ""
			},
			m_rPromptTextResource: {
				type: "ZRuntimeResourceID",
				value: {
					resource: "601F5CC1D3AEFD20",
					flag: "5F"
				}
			},
			m_bRequiresHitmanInFront: {
				type: "bool",
				value: false
			},
			m_aPromptPositions: {
				type: "TArray<SEntityTemplateReference>",
				value: [
					{
						ref: root.addChild({
							...getPath(
								"[assembly:/_pro/design/gamecore/setpiecehelpers.template?/setpiecehelpers_interactionspatialsandgizmos.entitytemplate]"
							),
							properties: {
								m_mTransform: {
									type: "SMatrix43",
									value: {
										position: {
											x: 0,
											y: 0,
											z: 0
										},
										rotation: {
											x: 0,
											y: 0,
											z: 0
										}
									}
								},
								InteractionPoint: {
									type: "SMatrix43",
									value: {
										position: {
											x: 0,
											y: -1,
											z: 1.5
										},
										rotation: {
											x: 0,
											y: 0,
											z: 0
										}
									}
								},
								PromptPoint: {
									type: "SMatrix43",
									value: {
										position: {
											x: 0,
											y: 0,
											z: 0
										},
										rotation: {
											x: 0,
											y: 0,
											z: 0
										}
									}
								},
								m_eidParent: {
									type: "SEntityTemplateReference",
									value: CommonRoots.Agent47
								}
							}
						}),
						externalScene: null,
						exposedEntity: "PromptSpatial"
					}
				],
				postInit: true
			},
			m_aValuesvisible: {
				type: "TArray<SEntityTemplateReference>",
				value: [isAiming],
				postInit: true
			},
			m_eInputAction: {
				type: "EHM5GameInputFlag",
				value: "eGameInputRemoteAction"
			}
		},
		events: {
			Completed: {
				Open: root.addChild({
					...getClassPath("OpenMenuPageEntity"),
					properties: {
						m_pArgs: {
							type: "SEntityTemplateReference",
							value: root.addChild({
								...getClassPath("DynamicObjectEntity"),
								properties: {
									m_sStringValue: {
										type: "ZString",
										value: JSON.stringify({
											url: "stashpoint",
											allowlargeitems: true,
											allowcontainers: false,
											slotid: "3",
											slotname: "disguise"
										})
									}
								}
							})
						},
						m_sPageName: {
							type: "ZString",
							value: "wardrobe"
						},
						m_eMenu: {
							type: "EGameUIMenu",
							value: "eUIMenu_WardrobeMenu"
						}
					}
				}),
				BlendIn: blendInActions
			}
		}
	})
}
