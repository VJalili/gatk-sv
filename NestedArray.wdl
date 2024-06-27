version 1.0

workflow EvidenceQC {
    input {
        Array[Array[File]] inputFiles
    }

    call TestTask as testTask {
        input:
            inputFiles = inputFiles
    }

    output {
        File outputFile = testTask.outputFile
    }
}

task TestTask {
    input {
        Array[Array[File]] inputFiles
    }

    output {
        File outputFile = "outputFile.txt"
    }

    runtime {
        docker: "ubuntu:24.04"
        cpu: 1
        memory: "2 GiB"
        disks: "local-disk 100 HDD"
    }

    command <<<
        mv ~{write_json(inputFiles)} outputFile.txt
    >>>
}