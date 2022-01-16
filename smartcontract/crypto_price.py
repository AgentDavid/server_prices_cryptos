from pyteal import *


def approval_program():
    on_creation = Seq([
        App.globalPut(Bytes("Creator"), Txn.sender()),
        Assert(Txn.application_args.length() == Int(0)),
        Approve()
    ])

    update_slot_1 = Seq([
        Assert(Txn.sender() == App.globalGet(Bytes("Creator"))),
        Assert(Txn.application_args.length() == Int(16)),
        App.globalPut(Bytes("BTC"), Btoi(Txn.application_args[1])),
        App.globalPut(Bytes("ETH"), Btoi(Txn.application_args[2])),
        App.globalPut(Bytes("BNB"), Btoi(Txn.application_args[3])),
        App.globalPut(Bytes("SOL"), Btoi(Txn.application_args[4])),
        App.globalPut(Bytes("ADA"), Btoi(Txn.application_args[5])),
        App.globalPut(Bytes("XRP"), Btoi(Txn.application_args[6])),
        App.globalPut(Bytes("LUNA"), Btoi(Txn.application_args[7])),
        App.globalPut(Bytes("DOT"), Btoi(Txn.application_args[8])),
        App.globalPut(Bytes("AVAX"), Btoi(Txn.application_args[9])),
        App.globalPut(Bytes("DOGE"), Btoi(Txn.application_args[10])),
        App.globalPut(Bytes("SHIB"), Btoi(Txn.application_args[11])),
        App.globalPut(Bytes("MATIC"), Btoi(Txn.application_args[12])),
        App.globalPut(Bytes("CRO"), Btoi(Txn.application_args[13])),
        App.globalPut(Bytes("WBTC"), Btoi(Txn.application_args[14])),
        App.globalPut(Bytes("UNI"), Btoi(Txn.application_args[15])),
        Approve()
    ])

    update_slot_2 = Seq([
        Assert(Txn.sender() == App.globalGet(Bytes("Creator"))),
        Assert(Txn.application_args.length() == Int(16)),
        App.globalPut(Bytes("LTC"), Btoi(Txn.application_args[1])),
        App.globalPut(Bytes("LINK"), Btoi(Txn.application_args[2])),
        App.globalPut(Bytes("ALGO"), Btoi(Txn.application_args[3])),
        App.globalPut(Bytes("BCH"), Btoi(Txn.application_args[4])),
        App.globalPut(Bytes("NEAR"), Btoi(Txn.application_args[5])),
        App.globalPut(Bytes("TRX"), Btoi(Txn.application_args[6])),
        App.globalPut(Bytes("XML"), Btoi(Txn.application_args[7])),
        App.globalPut(Bytes("MANA"), Btoi(Txn.application_args[8])),
        App.globalPut(Bytes("AXS"), Btoi(Txn.application_args[9])),
        App.globalPut(Bytes("ATOM"), Btoi(Txn.application_args[10])),
        App.globalPut(Bytes("VET"), Btoi(Txn.application_args[11])),
        App.globalPut(Bytes("FTT"), Btoi(Txn.application_args[12])),
        App.globalPut(Bytes("FTM"), Btoi(Txn.application_args[13])),
        App.globalPut(Bytes("SAND"), Btoi(Txn.application_args[14])),
        App.globalPut(Bytes("FIL"), Btoi(Txn.application_args[15])),
        Approve()
    ])

    update_slot_3 = Seq([
        Assert(Txn.sender() == App.globalGet(Bytes("Creator"))),
        Assert(Txn.application_args.length() == Int(16)),
        App.globalPut(Bytes("HBAR"), Btoi(Txn.application_args[1])),
        App.globalPut(Bytes("BTCB"), Btoi(Txn.application_args[2])),
        App.globalPut(Bytes("THETA"), Btoi(Txn.application_args[3])),
        App.globalPut(Bytes("EGLD"), Btoi(Txn.application_args[4])),
        App.globalPut(Bytes("ICP"), Btoi(Txn.application_args[5])),
        App.globalPut(Bytes("ETC"), Btoi(Txn.application_args[6])),
        App.globalPut(Bytes("MIOTA"), Btoi(Txn.application_args[7])),
        App.globalPut(Bytes("XTZ"), Btoi(Txn.application_args[8])),
        App.globalPut(Bytes("HNT"), Btoi(Txn.application_args[9])),
        App.globalPut(Bytes("XMR"), Btoi(Txn.application_args[10])),
        App.globalPut(Bytes("AAVE"), Btoi(Txn.application_args[11])),
        App.globalPut(Bytes("LEO"), Btoi(Txn.application_args[12])),
        App.globalPut(Bytes("KLAY"), Btoi(Txn.application_args[13])),
        App.globalPut(Bytes("GALA"), Btoi(Txn.application_args[14])),
        App.globalPut(Bytes("GRT"), Btoi(Txn.application_args[15])),
        Approve()
    ])

    update_slot_4 = Seq([
        Assert(Txn.sender() == App.globalGet(Bytes("Creator"))),
        Assert(Txn.application_args.length() == Int(16)),
        App.globalPut(Bytes("EOS"), Btoi(Txn.application_args[1])),
        App.globalPut(Bytes("CAKE"), Btoi(Txn.application_args[2])),
        App.globalPut(Bytes("STX"), Btoi(Txn.application_args[3])),
        App.globalPut(Bytes("FLOW"), Btoi(Txn.application_args[4])),
        App.globalPut(Bytes("LRC"), Btoi(Txn.application_args[5])),
        App.globalPut(Bytes("ONE"), Btoi(Txn.application_args[6])),
        App.globalPut(Bytes("BTT"), Btoi(Txn.application_args[7])),
        App.globalPut(Bytes("KSM"), Btoi(Txn.application_args[8])),
        App.globalPut(Bytes("MKR"), Btoi(Txn.application_args[9])),
        App.globalPut(Bytes("ENJ"), Btoi(Txn.application_args[10])),
        App.globalPut(Bytes("BSV"), Btoi(Txn.application_args[11])),
        App.globalPut(Bytes("QNT"), Btoi(Txn.application_args[12])),
        App.globalPut(Bytes("AMP"), Btoi(Txn.application_args[13])),
        App.globalPut(Bytes("KDA"), Btoi(Txn.application_args[14])),
        App.globalPut(Bytes("XEC"), Btoi(Txn.application_args[15])),
        Approve()
    ])

    only_admin = Seq([
        Assert(Txn.sender() == App.globalGet(Bytes("Creator"))),
        Approve()
    ])

    program = Cond(
        [Txn.application_id() == Int(0), on_creation],
        [Txn.on_completion() == OnComplete.OptIn, only_admin],
        [Txn.on_completion() == OnComplete.UpdateApplication, only_admin],
        [Txn.on_completion() == OnComplete.DeleteApplication, only_admin],
        [Txn.on_completion() == OnComplete.ClearState, only_admin],
        [Txn.application_args[0] == Bytes("update_slot_1"), update_slot_1],
        [Txn.application_args[0] == Bytes("update_slot_2"), update_slot_2],
        [Txn.application_args[0] == Bytes("update_slot_3"), update_slot_3],
        [Txn.application_args[0] == Bytes("update_slot_4"), update_slot_4],
    )

    return program


def clear_state_program():
    return Int(0)
