import { ref, onMounted, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import APIService from '@/services/APIService.js'
import { useModalStore } from './modal'
export const useBebidasStore = defineStore('bebidas', () => {
  const categorias = ref([])
  const busqueda = reactive({
    nombre: '',
    categoria: '',
  })

  const modal = useModalStore()
  const recetas = ref([])
  const receta = ref({})

  onMounted(async function () {
    const {
      data: { drinks },
    } = await APIService.obtenerCategorias()
    categorias.value = drinks
  })

  async function obtenerRecetas() {
    const {
      data: { drinks },
    } = await APIService.buscarRecetas(busqueda)
    recetas.value = drinks
    // console.log(drinks)
  }

  async function seleccionarBebida(id) {
    const {
      data: { drinks },
    } = await APIService.buscarReceta(id)
    receta.value = drinks[0]

    modal.handleClickModal()
  }
  const noRecetas = computed(() => {
    return recetas.value.length === 0
  })
  return {
    categorias,
    busqueda,
    recetas,
    receta,
    noRecetas,
    obtenerRecetas,
    seleccionarBebida,
  }
})
