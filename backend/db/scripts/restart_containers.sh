# Nombre de los contenedores
containers=("backend-container" "db-container" "frontend-container")

# Función para verificar y reiniciar contenedores
check_and_restart() {
  for container in "${containers[@]}"; do
    if [ "$(docker inspect -f '{{.State.Running}}' $container)" == "false" ]; then
      echo "Reiniciando contenedor: $container"
      docker restart $container
    fi
  done
}


while true; do
  check_and_restart
  sleep 5
done